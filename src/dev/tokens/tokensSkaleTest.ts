import { TokenSymbol } from "../symbols/tokenSkaleTest";
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
        name: "sFUEL",
        symbol: TokenSymbol.SFUEL,
        chains: [ChainId.SkaleTest],
        icon: baseURL + 'sfuel.png',
        contracts: {
            [ChainId.SkaleTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', // wsfuel
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped sFUEL",
        symbol: TokenSymbol.WSFUEL,
        chains: [ChainId.SkaleTest],
        icon: baseURL + 'sfuel.png',
        contracts: {
            [ChainId.SkaleTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', 
                decimal: 18,
            },
        },
    },
]
