import { TokenSymbol } from "../symbols/x38_halo";
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
        name: 'HALO token',
        symbol: TokenSymbol.HALO,
        icon: baseURL + 'halo.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xB6b8CCD230Bb4235C7b87986274E7aB550b72261',
                decimal: 18,
            },
        },
    },
]
