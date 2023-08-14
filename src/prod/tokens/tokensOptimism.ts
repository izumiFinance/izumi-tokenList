import { TokenSymbol } from "../symbols/tokenOptimism";
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
        name: "ChainLink Token",
        symbol: TokenSymbol.LINKOp,
        icon: baseURL + 'link.png',
        chains: [ChainId.Optimism],
        contracts: {
            [ChainId.Optimism]: {
                address: '0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6', 
                decimal: 18,
            },
        },
    },
    {
        name: "CyberConnect Token",
        symbol: TokenSymbol.CYBEROp,
        icon: baseURL + 'cyber.png',
        chains: [ChainId.Optimism],
        contracts: {
            [ChainId.Optimism]: {
                address: '0x14778860E937f509e651192a90589dE711Fb88a9', 
                decimal: 18,
            },
        },
    },
    {
        name: "Optimism Token",
        symbol: TokenSymbol.OPOp,
        icon: baseURL + 'op.png',
        chains: [ChainId.Optimism],
        contracts: {
            [ChainId.Optimism]: {
                address: '0x4200000000000000000000000000000000000042', 
                decimal: 18,
            },
        },
    },
]
