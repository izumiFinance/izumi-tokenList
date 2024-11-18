import { TokenSymbol } from "../symbols/tokenDuckchain";
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
        name: "TON Token",
        symbol: TokenSymbol.TONDuckchain,
        chains: [ChainId.Duckchain],
        icon: baseURL + 'ton.png',
        contracts: {
            [ChainId.Duckchain]: {
                address: '0x7F9308E8d724e724EC31395f3af52e0593BB2e3f', // WTON
                decimal: 18, 
            },
        },
    },
    {
        name: "Wrapped TON Token",
        symbol: TokenSymbol.WTONDuckchain,
        chains: [ChainId.Duckchain],
        icon: baseURL + 'ton.png',
        contracts: {
            [ChainId.Duckchain]: {
                address: '0x7F9308E8d724e724EC31395f3af52e0593BB2e3f',
                decimal: 18, 
            },
        },
    },
    {
        name: "Duckchain PEPE",
        symbol: TokenSymbol.DPEPEDuckchain,
        chains: [ChainId.Duckchain],
        icon: baseURL + 'dpepe.png',
        contracts: {
            [ChainId.Duckchain]: {
                address: '0x2D9E1dA77F086c50f93db46E554974B71536a9Ee',
                decimal: 18, 
            },
        },
    },
]
