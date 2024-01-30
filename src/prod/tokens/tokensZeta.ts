import { TokenSymbol } from "../symbols/tokenZeta";
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
        name: "Zeta Token",
        symbol: TokenSymbol.ZETAZeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'zeta.png',
        contracts: {
            [ChainId.Zeta]: {
                address: '0x5F0b1a82749cb4E2278EC87F8BF6B618dC71a8bf',
                decimal: 18, //wzeta
            },
        },
    },
    {
        name: "Wrapped ZETA",
        symbol: TokenSymbol.WZETAZeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'zeta.png',
        contracts: {
            [ChainId.Zeta]: {
                address: '0x5F0b1a82749cb4E2278EC87F8BF6B618dC71a8bf',
                decimal: 18, 
            },
        },
    },
]
