import { TokenSymbol } from "../symbols/x8_jupyter";
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
        name: 'Jupyter',
        symbol: TokenSymbol.IOM,
        icon: baseURL + 'iom.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xD6ea4ec77fB7e0d5c331F9109f00CcEdE255b9C8',
                decimal: 18,
            },
        },
    },
]
