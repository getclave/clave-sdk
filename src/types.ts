/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
import { type BigNumber } from 'ethers';

export type ClaveContractKey =
    | 'registry'
    | 'factory'
    | 'socialRecovery'
    | 'cloudRecovery'
    | 'gaslessPaymaster'
    | 'erc20Paymaster';

export type PopulateTransactionParams = {
    to: string;
    value: BigNumber;
    data: string;
};
