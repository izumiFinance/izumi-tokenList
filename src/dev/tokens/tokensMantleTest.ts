import { TokenSymbol } from "../symbols/tokenMantleTest";
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
        name: "USDC (official bridge)",
        symbol: TokenSymbol.USDCMantle,
        chains: [ChainId.MantleTestnet],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.MantleTestnet]: {
                address: '0x2ED3c15eC59CE827c4aBBabfF76d37562558437D',
                decimal: 6,
            },
        },
    },
    {
        name: "Tether (Mantle native)",
        symbol: TokenSymbol.USDTCustom,
        chains: [ChainId.MantleTestnet],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.MantleTestnet]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 18,
            },
        },
    },
]
