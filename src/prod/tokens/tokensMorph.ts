import { TokenSymbol } from "../symbols/tokenMorph";
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
        name: "Morph Koala",
        symbol: TokenSymbol.KOLMorph,
        icon: baseURL + 'koala.png',
        chains: [ChainId.Morph],
        contracts: {
            [ChainId.Morph]: {
                address: '0xD8b8d868e994df5D4Ba8bD599eadBc21598a732E',
                decimal: 18,
            },
        },
    },
]
