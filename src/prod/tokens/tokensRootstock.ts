import { TokenSymbol } from "../symbols/tokenRootstock";
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
        name: "Rootstock BTC",
        symbol: TokenSymbol.RBTCRoot,
        icon: baseURL + 'btc.png',
        chains: [ChainId.RootStock],
        contracts: {
            [ChainId.RootStock]: {
                address: '0x542fda317318ebf1d3deaf76e0b632741a7e677d',  // WRBTC
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped RBTC",
        symbol: TokenSymbol.WRBTCRoot,
        icon: baseURL + 'btc.png',
        chains: [ChainId.RootStock],
        contracts: {
            [ChainId.RootStock]: {
                address: '0x542fda317318ebf1d3deaf76e0b632741a7e677d', 
                decimal: 18,
            },
        },
    },
    {
        name: "Rootstock USDT",
        symbol: TokenSymbol.RUSDTRoot,
        icon: baseURL + 'usdt.png',
        chains: [ChainId.RootStock],
        contracts: {
            [ChainId.RootStock]: {
                address: '0xef213441a85df4d7acbdae0cf78004e1e486bb96', 
                decimal: 18,
            },
        },
    },
]
