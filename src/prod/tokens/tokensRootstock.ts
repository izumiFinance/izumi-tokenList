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
    {
        name: "SolvBTC",
        symbol: TokenSymbol.SOLVBTCRoot,
        icon: baseURL + 'solvbtc.png',
        chains: [ChainId.RootStock],
        contracts: {
            [ChainId.RootStock]: {
                address: '0x541fd749419ca806a8bc7da8ac23d346f2df8b77', 
                decimal: 18,
            },
        },
    },
    {
        name: "SolvBTC.BBN",
        symbol: TokenSymbol.SOLVBTCBBNRoot,
        icon: baseURL + 'solvbtcbbn.png',
        chains: [ChainId.RootStock],
        contracts: {
            [ChainId.RootStock]: {
                address: '0xCC0966D8418d412c599A6421b760a847eB169A8c', 
                decimal: 18,
            },
        },
    },
    {
        name: "ETHs",
        symbol: TokenSymbol.ETHSRoot,
        icon: baseURL + 'eth.png',
        chains: [ChainId.RootStock],
        contracts: {
            [ChainId.RootStock]: {
                address: '0x1d931bf8656d795e50ef6d639562c5bd8ac2b78f', 
                decimal: 18,
            },
        },
    },
    {
        name: "RIF Token",
        symbol: TokenSymbol.RIFRoot,
        icon: baseURL + 'rif.svg',
        chains: [ChainId.RootStock],
        contracts: {
            [ChainId.RootStock]: {
                address: '0x2acc95758f8b5f583470ba265eb685a8f45fc9d5', 
                decimal: 18,
            },
        },
    },
]
