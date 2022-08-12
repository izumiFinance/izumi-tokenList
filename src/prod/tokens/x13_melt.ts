import { TokenSymbol } from "../symbols/x13_melt";
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
        name: 'MetaElfLand Token',
        symbol: TokenSymbol.MELT,
        icon: baseURL + 'melt.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x7eb35225995b097c84eF10501dD6E93A49bdFd63',
                decimal: 8,
            },
        },
    },
]
