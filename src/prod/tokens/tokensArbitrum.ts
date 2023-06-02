import { TokenSymbol } from "../symbols/tokenArbitrum";
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
        name: "Poodlera Token",
        symbol: TokenSymbol.POOD,
        icon: baseURL + 'pood.png',
        chains: [ChainId.Arbitrum],
        contracts: {
            [ChainId.Arbitrum]: {
                address: '0x4Bd840786F87aEa5c31BC87705516cB9Cc55eDB9', 
                decimal: 18,
            },
        },
    },
    {
        name: "MetaLine Gold",
        symbol: TokenSymbol.MTG,
        icon: baseURL + 'mtg.png',
        chains: [ChainId.Arbitrum],
        contracts: {
            [ChainId.Arbitrum]: {
                address: '0x748b5BE12ac1Ce2EF73035189F943591C1822B7d', 
                decimal: 18,
            },
        },
    },
]
