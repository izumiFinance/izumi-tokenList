import { TokenSymbol } from "../symbols/tokenMonad";
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
        name: "Monad Token",
        symbol: TokenSymbol.MONMonad,
        icon: baseURL + 'mon.png',
        chains: [ChainId.Monad],
        contracts: {
            [ChainId.Monad]: {
                address: '0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A',
                decimal: 18,
            }, // WMON
        },
    },
    {
        name: "Wrapped MON",
        symbol: TokenSymbol.WMONMonad,
        icon: baseURL + 'mon.png',
        chains: [ChainId.Monad],
        contracts: {
            [ChainId.Monad]: {
                address: '0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A',
                decimal: 18,
            }, 
        },
    },
    {
        name: "HULU Cat Token",
        symbol: TokenSymbol.HULUMonad,
        icon: baseURL + 'huhu.png',
        chains: [ChainId.Monad],
        contracts: {
            [ChainId.Monad]: {
                address: '0xD8b8d868e994df5D4Ba8bD599eadBc21598a732E',
                decimal: 18,
            }, 
        },
    },
    {
        name: "Agora USD",
        symbol: TokenSymbol.AUSDMonad,
        icon: 'https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/ausd.jpg/public',
        chains: [ChainId.Monad],
        contracts: {
            [ChainId.Monad]: {
                address: '0x00000000eFE302BEAA2b3e6e1b18d08D69a9012a',
                decimal: 6,
            }, 
        },
    },
    {
        name: "Wrapped SOL",
        symbol: TokenSymbol.WSOLMonad,
        icon: baseURL + 'sol.png',
        chains: [ChainId.Monad],
        contracts: {
            [ChainId.Monad]: {
                address: '0xea17E5a9efEBf1477dB45082d67010E2245217f1',
                decimal: 9,
            }, 
        },
    },
]
