import { TokenSymbol } from "../symbols/x28_volt";
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
        name: 'Volt Inu',
        symbol: TokenSymbol.VOLT,
        icon: baseURL + 'volt.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x7db5af2B9624e1b3B4Bb69D6DeBd9aD1016A58Ac',
                decimal: 9,
            },
        },
    },
]
