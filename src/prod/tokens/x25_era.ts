import { TokenSymbol } from "../symbols/x25_era";
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
        name: 'Era Token',
        symbol: TokenSymbol.ERA,
        icon: baseURL + 'era.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x6f9F0c4ad9Af7EbD61Ac5A1D4e0F2227F7B0E5f9',
                decimal: 18,
            },
        },
    },
]
