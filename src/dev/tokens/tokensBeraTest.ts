import { TokenSymbol } from "../symbols/tokenBeraTest";
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
        name: "Berachain Token",
        symbol: TokenSymbol.BERABera,
        chains: [ChainId.BeraTest],
        icon: baseURL + 'bera.png',
        contracts: {
            [ChainId.BeraTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', // wbera
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped Bera",
        symbol: TokenSymbol.WBERABera,
        chains: [ChainId.BeraTest],
        icon: baseURL + 'bera.png',
        contracts: {
            [ChainId.BeraTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', 
                decimal: 18,
            },
        },
    },
]
