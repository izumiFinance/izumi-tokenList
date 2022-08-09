import { TokenSymbol } from "../symbols/x11_DMT";
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
        name: 'Drive Metaverse Token',
        symbol: TokenSymbol.DMT,
        icon: baseURL + 'DMT.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x09CdC7E87ABd416246F1015B08B4463Abdda00B4',
                decimal: 18,
            },
        },
    },
]
