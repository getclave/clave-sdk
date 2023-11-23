import { BigNumber } from 'ethers';

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
