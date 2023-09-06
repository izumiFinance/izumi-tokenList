import { TokenSymbol } from "../symbols/tokenKroma";
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
        name: "Ether",
        symbol: TokenSymbol.ETHKroma,
        icon: baseURL + 'eth.png',
        chains: [ChainId.Kroma],
        contracts: {
            [ChainId.Kroma]: {
                address: '0x4200000000000000000000000000000000000001', //WETH
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped ETH",
        symbol: TokenSymbol.WETHKroma,
        icon: baseURL + 'WETH.png',
        chains: [ChainId.Kroma],
        contracts: {
            [ChainId.Kroma]: {
                address: '0x4200000000000000000000000000000000000001',
                decimal: 18,
            },
        },
    },
]
