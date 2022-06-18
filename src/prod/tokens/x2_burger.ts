import { TokenSymbol } from "../symbols/x2_burger";
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
        name: 'Burger Swap',
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
