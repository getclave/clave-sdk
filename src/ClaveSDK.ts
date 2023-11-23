/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
import { Core, PopulatedTransaction } from '@getclave/core';
import { FString } from '@getclave/utils';
import { CONSTANT_ADDRESSES } from 'clave-constants';
import { BigNumber, ethers } from 'ethers';
import { types } from 'zksync-web3';

import { ClaveSDKContracts } from './ClaveSDKContracts';

export class ClaveSDK extends ClaveSDKContracts {
    private core: Core;
    constants = CONSTANT_ADDRESSES;

    constructor(core: Core) {
        super(core);
        this.core = core;
    }

    /**
     *
     * @param to To address
     * @param value Value to send
     * @param data Data to send
     * @returns {PopulatedTransaction} Populated transaction
     */
    public async genPopulatedTransaction(
        to: string,
        value = BigNumber.from(0),
        data = '0x',
    ): Promise<PopulatedTransaction> {
        return await this.core.populateTransaction(to, value, data);
    }

    /**
     *
     * @param transaction Populated transaction
     * @param validatorAddress Optional validator address, defaults to the TEE validator
     * @param hookData Optional hook data, defaults to empty array
     * @returns {types.TransactionResponse} Default response of zksync-web3's sendTransaction
     */
    public async sendTransaction(
        transaction: PopulatedTransaction,
        validatorAddress = CONSTANT_ADDRESSES.TEE_VALIDATOR,
        hookData: Array<ethers.utils.BytesLike> = [],
    ): Promise<types.TransactionResponse> {
        return await transaction.send(validatorAddress, hookData);
    }

    /**
     *
     * @returns {Array<string>} Array of guardian addresses
     */
    public async genGuardians(): Promise<Array<string>> {
        const guardians = await this.contracts.socialRecovery.read<
            [],
            Array<string>
        >('getGuardians');

        return guardians.map((guardian) => FString.toLowerCase(guardian));
    }
}
