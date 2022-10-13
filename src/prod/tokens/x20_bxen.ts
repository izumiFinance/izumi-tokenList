import { TokenSymbol } from "../symbols/x20_bxen";
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
        name: 'XEN Crypto',
        symbol: TokenSymbol.BXEN,
        icon: baseURL + 'bxen.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e',
                decimal: 18,
            },
        },
    },
]
