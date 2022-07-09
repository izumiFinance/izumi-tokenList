import { TokenSymbol } from "../symbols/x3__mw";
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
        name: 'Metazodiac Token',
        symbol: TokenSymbol.MW,
        icon: baseURL + 'MW.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x154d746794449B6CF534FA11A2Cf7FfF5C968977',
                decimal: 18,
            },
        },
    },
]
