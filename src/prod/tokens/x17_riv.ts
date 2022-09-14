import { TokenSymbol } from "../symbols/x17_riv";
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
        name: 'Richverse Web3 Token',
        symbol: TokenSymbol.RIV,
        icon: baseURL + 'RIV.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xca5e32d44f1744001b5600dc2f5f5e0bbb6e9d3e',
                decimal: 18,
            },
        },
    },
]
