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
    {
        name: 'TokenPocket Token',
        symbol: TokenSymbol.TPT,
        icon: baseURL + 'TPT.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xECa41281c24451168a37211F0bc2b8645AF45092',
                decimal: 4,
            },
        },
    },
    {
        name: 'Duet Governance Token',
        symbol: TokenSymbol.DUET,
        icon: baseURL + 'DUET.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x95ee03e1e2c5c4877f9a298f1c0d6c98698fab7b',
                decimal: 18,
            },
        },
    },
    {
        name: 'Duet USD',
        symbol: TokenSymbol.DUSD,
        icon: baseURL + 'dUSD.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xe04fe47516C4Ebd56Bc6291b15D46A47535e736B',
                decimal: 18,
            },
        },
    },
    {
        name: 'Duet WTI',
        symbol: TokenSymbol.DWTI,
        icon: baseURL + 'dWTI.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x587Fb3e1C6819fd54e3740C6C4C7832484eF451b',
                decimal: 18,
            },
        },
    },
    {
        name: 'Duet XAU',
        symbol: TokenSymbol.DXAU,
        icon: baseURL + 'dXAU.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x7e3b9b1313ad547feb71ac5bc48b03d7e683601e',
                decimal: 18,
            },
        },
    },
    {
        name: 'BurgerCities',
        symbol: TokenSymbol.BURGER,
        icon: baseURL + 'burger.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f',
                decimal: 18,
            },
        },
    },
]
