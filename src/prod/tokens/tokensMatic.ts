import { TokenSymbol } from "../symbols/tokenMatic";
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
        name: "Matic Token",
        symbol: TokenSymbol.MATIC,
        icon: baseURL + 'matic.png',
        chains: [ChainId.Matic],
        contracts: {
            [ChainId.Matic]: {
                address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
                decimal: 18,
            }, // WMATIC
        },
    },
    {
        name: "Wrapped Matic",
        symbol: TokenSymbol.WMATIC,
        icon: baseURL + 'matic.png',
        chains: [ChainId.Matic],
        contracts: {
            [ChainId.Matic]: {
                address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
                decimal: 18,
            },
        },
    },
    {
        name: "Peak Token",
        symbol: TokenSymbol.PKTK,
        icon: baseURL + 'pktk.png',
        chains: [ChainId.Matic],
        contracts: {
            [ChainId.Matic]: {
                address: '0x55bb4d4b4545a886df159354e5fa5791c2d13496',
                decimal: 18,
            },
        },
    },
]
