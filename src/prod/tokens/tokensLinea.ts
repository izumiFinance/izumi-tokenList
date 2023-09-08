import { TokenSymbol } from "../symbols/tokenLinea";
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
        name: "Celer BUSD",
        symbol: TokenSymbol.CEBUSDLinea,
        chains: [ChainId.Linea],
        icon: baseURL + 'busd.png',
        contracts: {
            [ChainId.Linea]: {
                address: '0x7d43AABC515C356145049227CeE54B608342c0ad',
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped BTC",
        symbol: TokenSymbol.WBTCLinea,
        chains: [ChainId.Linea],
        icon: baseURL + 'WBTC.png',
        contracts: {
            [ChainId.Linea]: {
                address: '0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4',
                decimal: 8,
            },
        },
    },
    {
        name: "USD Coin",
        symbol: TokenSymbol.USDCLinea,
        chains: [ChainId.Linea],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.Linea]: {
                address: '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
                decimal: 6,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDTLinea,
        chains: [ChainId.Linea],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.Linea]: {
                address: '0xA219439258ca9da29E9Cc4cE5596924745e12B93',
                decimal: 6,
            },
        },
    },
]
