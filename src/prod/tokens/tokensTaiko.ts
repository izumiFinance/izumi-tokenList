import { TokenSymbol } from "../symbols/tokenTaiko";
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
        name: "Tether USD (Stargate)",
        symbol: TokenSymbol.USDTSTARTaiko,
        icon: baseURL + 'usdt.png',
        chains: [ChainId.Taiko],
        contracts: {
            [ChainId.Taiko]: {
                address: '0x9c2dc7377717603eB92b2655c5f2E7997a4945BD', 
                decimal: 6,
            },
        },
    },
    {
        name: "Bridged USDC (Stargate)",
        symbol: TokenSymbol.USDCSTARTaiko,
        icon: baseURL + 'usdcstar.png',
        chains: [ChainId.Taiko],
        contracts: {
            [ChainId.Taiko]: {
                address: '0x19e26B0638bf63aa9fa4d14c6baF8D52eBE86C5C', 
                decimal: 6,
            },
        },
    },
    {
        name: "TAIKO Token",
        symbol: TokenSymbol.TAIKOTaiko,
        icon: baseURL + 'taiko.png',
        chains: [ChainId.Taiko],
        contracts: {
            [ChainId.Taiko]: {
                address: '0xA9d23408b9bA935c230493c40C73824Df71A0975', 
                decimal: 18,
            },
        },
    },
    {
        name: "Affine ultraETHs 2.0",
        symbol: TokenSymbol.ULTRAETHSTaiko,
        icon: baseURL + 'ultraeths.png',
        chains: [ChainId.Taiko],
        contracts: {
            [ChainId.Taiko]: {
                address: '0x5217c8f3b7fb8b6501c8ff2a4c09b14b4b08c9f9', 
                decimal: 18,
            },
        },
    },
    {
        name: "MAGA Token",
        symbol: TokenSymbol.MAGATaiko,
        icon: baseURL + 'maga.png',
        chains: [ChainId.Taiko],
        contracts: {
            [ChainId.Taiko]: {
                address: '0x2D9E1dA77F086c50f93db46E554974B71536a9Ee', 
                decimal: 18,
            },
        },
    },
]
