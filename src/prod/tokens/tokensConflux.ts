import { TokenSymbol } from "../symbols/tokenConflux";
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
        name: "Conflux Token",
        symbol: TokenSymbol.CFX,
        icon: baseURL + 'cfx.png',
        chains: [ChainId.Conflux],
        contracts: {
            [ChainId.Conflux]: {
                address: '0x14b2d3bc65e74dae1030eafd8ac30c533c976a9b', //WCFX
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped Conflux Token",
        symbol: TokenSymbol.WCFX,
        icon: baseURL + 'cfx.png',
        chains: [ChainId.Conflux],
        contracts: {
            [ChainId.Conflux]: {
                address: '0x14b2d3bc65e74dae1030eafd8ac30c533c976a9b',
                decimal: 18,
            },
        },
    },
]
