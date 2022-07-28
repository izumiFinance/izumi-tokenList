import { TokenSymbol } from "../symbols/x10_MNW";
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
        name: 'MNW',
        symbol: TokenSymbol.MNW,
        icon: baseURL + 'MNW.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x8E596702B7e84907836776fDdC56067b64147C8f',
                decimal: 18,
            },
        },
    },
]
