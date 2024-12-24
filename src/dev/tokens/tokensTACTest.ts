import { TokenSymbol } from "../symbols/tokenTACTest";
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
        name: "TAC Token",
        symbol: TokenSymbol.TACTACTest,
        chains: [ChainId.TacTest],
        icon: baseURL + 'tac.png',
        contracts: {
            [ChainId.TacTest]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339', // wtac
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped TAC",
        symbol: TokenSymbol.WTACTACTest,
        chains: [ChainId.TacTest],
        icon: baseURL + 'tac.png',
        contracts: {
            [ChainId.TacTest]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339', 
                decimal: 18,
            },
        },
    },
    {
        name: "Bridged Tether USD",
        symbol: TokenSymbol.USDTTACTest,
        chains: [ChainId.TacTest],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.TacTest]: {
                address: '0x7336A5a3251b9259DDf8B9D02a96dA0153e0799d', 
                decimal: 18,
            },
        },
    },
]
