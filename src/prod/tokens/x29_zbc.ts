import { TokenSymbol } from "../symbols/x29_zbc";
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
        name: 'ZEBEC token',
        symbol: TokenSymbol.ZBC,
        icon: baseURL + 'zbc.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x37a56cdcD83Dce2868f721De58cB3830C44C6303',
                decimal: 9,
            },
        },
    },
]
