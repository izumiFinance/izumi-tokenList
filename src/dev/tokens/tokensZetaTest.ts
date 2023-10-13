import { TokenSymbol } from "../symbols/tokenZetaTest";
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
        name: "aZETA",
        symbol: TokenSymbol.AZETA,
        chains: [ChainId.ZetaTest],
        icon: baseURL + 'zeta.png',
        contracts: {
            [ChainId.ZetaTest]: {
                address: '0x5F0b1a82749cb4E2278EC87F8BF6B618dC71a8bf', // wzeta
                decimal: 18,
            },
        },
    },
    {
        name: "wrapped ZETA",
        symbol: TokenSymbol.WZETA,
        chains: [ChainId.ZetaTest],
        icon: baseURL + 'zeta.png',
        contracts: {
            [ChainId.ZetaTest]: {
                address: '0x5F0b1a82749cb4E2278EC87F8BF6B618dC71a8bf', // wzeta
                decimal: 18,
            },
        },
    },
]
