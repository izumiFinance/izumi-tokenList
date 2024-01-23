import { TokenSymbol } from "../symbols/tokenMerlinTest";
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
        name: "Tether",
        symbol: TokenSymbol.USDTMerlin,
        chains: [ChainId.MerlinTest],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.MerlinTest]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339', 
                decimal: 18,
            },
        },
    },
]
