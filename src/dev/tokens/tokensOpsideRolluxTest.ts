import { TokenSymbol } from "../symbols/tokenOpsideRolluxTest";
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
        name: "Opside token",
        symbol: TokenSymbol.IDE,
        chains: [ChainId.OpsideRolluxTest],
        icon: baseURL + 'ide.png',
        contracts: {
            [ChainId.OpsideTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', //WIDE
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped IDE",
        symbol: TokenSymbol.WIDE,
        chains: [ChainId.OpsideRolluxTest],
        icon: baseURL + 'ide.png',
        contracts: {
            [ChainId.OpsideTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', 
                decimal: 18,
            },
        },
    },
]
