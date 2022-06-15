import { TokenSymbol } from "../symbols/x0_tinc";
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
]
