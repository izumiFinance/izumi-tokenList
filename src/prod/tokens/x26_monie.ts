import { TokenSymbol } from "../symbols/x26_monie";
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
        name: 'INFIBLUE WORLD',
        symbol: TokenSymbol.MONIE,
        icon: baseURL + 'monie.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x7E60C74b9096f8FA6fb5a9FD88405dED8B7D44f3',
                decimal: 18,
            },
        },
    },
]
