import { TokenSymbol } from "../symbols/tokenX1Test";
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
        name: "OKB",
        symbol: TokenSymbol.OKB,
        chains: [ChainId.X1Test],
        icon: baseURL + 'okb.png',
        contracts: {
            [ChainId.X1Test]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', // wokb
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped OKB",
        symbol: TokenSymbol.WOKB,
        chains: [ChainId.X1Test],
        icon: baseURL + 'okb.png',
        contracts: {
            [ChainId.X1Test]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', 
                decimal: 18,
            },
        },
    },
]
