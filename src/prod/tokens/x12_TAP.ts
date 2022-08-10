import { TokenSymbol } from "../symbols/x12_TAP";
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
        name: 'TAP Coin',
        symbol: TokenSymbol.TAP,
        icon: baseURL + 'tap.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x35bEdBF9291b22218a0dA863170dcC9329Ef2563',
                decimal: 18,
            },
        },
    },
]
