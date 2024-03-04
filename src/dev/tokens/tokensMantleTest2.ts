import { TokenSymbol } from "../symbols/tokenMantleTest2";
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
        name: "Mantle Token",
        symbol: TokenSymbol.MNT,
        chains: [ChainId.MantleTest2],
        icon: baseURL + 'mnt.png',
        contracts: {
            [ChainId.MantleTest2]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', // WMNT
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped MNT",
        symbol: TokenSymbol.WMNT,
        chains: [ChainId.MantleTest2],
        icon: baseURL + 'mnt.png',
        contracts: {
            [ChainId.MantleTest2]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',
                decimal: 18,
            },
        },
    },
]
