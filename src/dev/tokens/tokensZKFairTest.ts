import { TokenSymbol } from "../symbols/tokenZKFairTest";
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
        name: "USDC",
        symbol: TokenSymbol.USDCZKFT,
        chains: [ChainId.ZKFairTest],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.ZKFairTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', // wusdc
                decimal: 18,
            },
        },
    },
    {
        name: "wrapped USDC",
        symbol: TokenSymbol.WUSDCZKFT,
        chains: [ChainId.ZKFairTest],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.ZKFairTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', 
                decimal: 18,
            },
        },
    },
    {
        name: "iZUMi Token",
        symbol: TokenSymbol.IZIZKFT,
        chains: [ChainId.ZKFairTest],
        icon: baseURL + 'izumi.svg',
        contracts: {
            [ChainId.ZKFairTest]: {
                address: '0xEB122DE19FeA9eD039E2d087113db26017f5F91a', 
                decimal: 18,
            },
        },
    },
    {
        name: "Tether",
        symbol: TokenSymbol.USDTZKFT,
        chains: [ChainId.ZKFairTest],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.ZKFairTest]: {
                address: '0x551197e6350936976DfFB66B2c3bb15DDB723250', 
                decimal: 18,
            },
        },
    },
]
