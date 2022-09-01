import { TokenSymbol } from "../symbols/x16_ge";
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
        name: 'Green Energy',
        symbol: TokenSymbol.GE,
        icon: baseURL + 'ge.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x708F90170722f8F8775bf64d7f435A2BADBd89FD',
                decimal: 18,
            },
        },
    },
]
