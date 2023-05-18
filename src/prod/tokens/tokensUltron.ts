import { TokenSymbol } from "../symbols/tokenUltron";
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
        name: "ULX MirrorWorld",
        symbol: TokenSymbol.XULX,
        icon: baseURL + 'xulx.png',
        chains: [ChainId.Ultron],
        contracts: {
            [ChainId.Ultron]: {
                address: '0xf26e50c26ed51abec4078380ed1f13440011f2a1', 
                decimal: 18,
            },
        },
    },
    {
        name: "ULX token",
        symbol: TokenSymbol.ULX,
        icon: baseURL + 'ulx.png',
        chains: [ChainId.Ultron],
        contracts: {
            [ChainId.Ultron]: {
                address: '0xb1183357745D3fD7d291E42a2c4B478cdB5710c6',  //wULX, not official
                decimal: 18,
            },
        },
    },
    {
        name: "wrapped ULX token",
        symbol: TokenSymbol.WULX,
        icon: baseURL + 'wulx.png',
        chains: [ChainId.Ultron],
        contracts: {
            [ChainId.Ultron]: {
                address: '0xb1183357745D3fD7d291E42a2c4B478cdB5710c6',  //wULX, not official
                decimal: 18,
            },
        },
    },
    {
        name: "wrapped Ethererum",
        symbol: TokenSymbol.WETH,
        icon: baseURL + 'weth.png',
        chains: [ChainId.Ultron],
        contracts: {
            [ChainId.Ultron]: {
                address: '0x2318bf5809a72aabadd15a3453a18e50bbd651cd', 
                decimal: 18,
            },
        },
    },
    {
        name: "wrapped Bitcoin",
        symbol: TokenSymbol.WBTC,
        icon: baseURL + 'wbtc.png',
        chains: [ChainId.Ultron],
        contracts: {
            [ChainId.Ultron]: {
                address: '0xd2b86a80a8f30b83843e247a50ecdc8d843d87dd', 
                decimal: 18,
            },
        },
    },
    {
        name: "Ultron Tether",
        symbol: TokenSymbol.UUSDT,
        icon: baseURL + 'usdt.png',
        chains: [ChainId.Ultron],
        contracts: {
            [ChainId.Ultron]: {
                address: '0x97fdd294024f50c388e39e73f1705a35cfe87656', 
                decimal: 6,
            },
        },
    },
    {
        name: "Ultron USD Coin",
        symbol: TokenSymbol.UUSDC,
        icon: baseURL + 'usdc.png',
        chains: [ChainId.Ultron],
        contracts: {
            [ChainId.Ultron]: {
                address: '0x3c4e0fded74876295ca36f62da289f69e3929cc4', 
                decimal: 6,
            },
        },
    },
]
