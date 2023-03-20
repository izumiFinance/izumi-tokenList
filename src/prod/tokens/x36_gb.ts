import { TokenSymbol } from "../symbols/x36_gb";
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
        name: 'Meta Interstellar Token',
        symbol: TokenSymbol.MIT,
        icon: baseURL + 'mit.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xe6906717f129427eebade5406de68cadd57aa0c0',
                decimal: 18,
            },
        },
    },
    {
        name: 'Hydroxyl Token',
        symbol: TokenSymbol.HYT,
        icon: baseURL + 'HYT.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xe28c51f4fa57dc44af3691c6f73d1ca578b586be',
                decimal: 18,
            },
        },
    },
]
