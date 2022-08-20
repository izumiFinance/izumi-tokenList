import { TokenSymbol } from "../symbols/x14_bnc";
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
        name: 'BattleNet Coin',
        symbol: TokenSymbol.BNC,
        icon: baseURL + 'bnc.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x5ec7A2F894C95C29928ae374BE1c8aD3338092DB',
                decimal: 8,
            },
        },
    },
]
