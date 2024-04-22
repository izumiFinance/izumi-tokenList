import { TokenSymbol } from "../symbols/tokenETC";
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
        name: "Ether Classic",
        symbol: TokenSymbol.ETCETC,
        icon: baseURL + 'etc.png',
        chains: [ChainId.ETC],
        contracts: {
            [ChainId.ETC]: {
                address: '0x82A618305706B14e7bcf2592D4B9324A366b6dAd', 
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped ETC",
        symbol: TokenSymbol.WETCETC,
        icon: baseURL + 'etc.png',
        chains: [ChainId.ETC],
        contracts: {
            [ChainId.ETC]: {
                address: '0x82A618305706B14e7bcf2592D4B9324A366b6dAd', 
                decimal: 18,
            },
        },
    },
]
