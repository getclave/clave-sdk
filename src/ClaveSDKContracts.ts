/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
import {
    CLOUD_RECOVERY_ABI,
    CONSTANT_ADDRESSES,
    FACTORY_ABI,
    PAYMASTERABI,
    REGISTRY_ABI,
    SOCIAL_RECOVERY_ABI,
} from '@getclave/constants';
import { Contract, Core } from '@getclave/core';

import { ClaveContractKey } from './types';

export class ClaveSDKContracts {
    contracts: Record<ClaveContractKey, Contract>;

    constructor(core: Core) {
        this.contracts = {
            cloudRecovery: core.Contract(
                CONSTANT_ADDRESSES.CLOUD_RECOVERY,
                CLOUD_RECOVERY_ABI,
            ),
            socialRecovery: core.Contract(
                CONSTANT_ADDRESSES.SOCIAL_RECOVERY,
                SOCIAL_RECOVERY_ABI,
            ),
            factory: core.Contract(CONSTANT_ADDRESSES.FACTORY, FACTORY_ABI),
            gaslessPaymaster: core.Contract(
                CONSTANT_ADDRESSES.GASLESS_PAYMASTER,
                PAYMASTERABI,
            ),
            erc20Paymaster: core.Contract(
                CONSTANT_ADDRESSES.ERC20_PAYMASTER,
                PAYMASTERABI,
            ),
            registry: core.Contract(CONSTANT_ADDRESSES.REGISTRY, REGISTRY_ABI),
        };
    }
}
