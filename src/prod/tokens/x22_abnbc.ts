import { TokenSymbol } from "../symbols/x22_abnbc";
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
        name: 'Ankr BNB Reward Bearing Certificate',
        symbol: TokenSymbol.ABNBC,
        icon: baseURL + 'abnbc.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xE85aFCcDaFBE7F2B096f268e31ccE3da8dA2990A',
                decimal: 18,
            },
        },
    },
]