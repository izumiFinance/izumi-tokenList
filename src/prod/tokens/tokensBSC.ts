import { TokenSymbol } from "../symbols/tokenBSC";
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
        name: 'Tiny Coin',
        symbol: TokenSymbol.TINC,
        icon: baseURL + 'TINC.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x05aD6E30A855BE07AfA57e08a4f30d00810a402e',
                decimal: 18,
            },
        },
    },
    {
        name: "ChiChaCoin",
        symbol: TokenSymbol.CCC,
        icon: baseURL + 'ccc.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x383268691ee31c68489b19b8f2d7003ec504d534', 
                decimal: 18,
            },
        },
    },
    {
        name: "Arbipad",
        symbol: TokenSymbol.ARBIBSC,
        icon: baseURL + 'arbi.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xa7bD657C5838472dDF85FF0797A2e6fce8fd4833', 
                decimal: 18,
            },
        },
    },
]
