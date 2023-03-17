import { TokenSymbol } from "../symbols/x35_gdo";
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
        name: 'Gameta Diamond',
        symbol: TokenSymbol.GDO,
        icon: baseURL + 'gdo.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x1c37948Cb9fC4a802f91e946CA15df4504c91D03',
                decimal: 18,
            },
        },
    },
]
