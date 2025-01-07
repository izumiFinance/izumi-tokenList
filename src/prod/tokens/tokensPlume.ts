import { TokenSymbol } from "../symbols/tokenPlume";
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
        name: "Plume ETH",
        symbol: TokenSymbol.PETHPlume,
        icon: baseURL + 'plumeeth.png',
        chains: [ChainId.Plume],
        contracts: {
            [ChainId.Plume]: {
                address: '0xD630fb6A07c9c723cf709d2DaA9B63325d0E0B73',
                decimal: 18,
            },
        },
    },
    {
        name: "Plume USD",
        symbol: TokenSymbol.PUSDPlume,
        icon: baseURL + 'plumeusd.png',
        chains: [ChainId.Plume],
        contracts: {
            [ChainId.Plume]: {
                address: '0xdddD73F5Df1F0DC31373357beAC77545dC5A6f3F',
                decimal: 6,
            },
        },
    },
]
