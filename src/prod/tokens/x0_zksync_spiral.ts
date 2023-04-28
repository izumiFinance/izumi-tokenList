import { TokenSymbol } from "../symbols/x0_zksync_spiral";
import { ChainId } from "../chainId";

export interface TokenInfo {
    chains: number[];
    name: string;
    symbol: TokenSymbol,
    icon: string;
    contracts: Partial<Record<ChainId, { address: string; decimal: number }>>;
}

const baseURL = 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/'

export const tokens: TokenInfo[] = [
    {
        name: 'SpiralFi Token',
        symbol: TokenSymbol.SPIRAL,
        icon: baseURL + 'spiral.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0xe161a60da0943dad69affe0249b7f623c518337b',
                decimal: 18,
            },
        },
    },
]
