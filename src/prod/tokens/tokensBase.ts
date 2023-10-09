import { TokenSymbol } from "../symbols/tokenBase";
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
        name: "Bald Token",
        symbol: TokenSymbol.BALDBase,
        chains: [ChainId.Base],
        icon: baseURL + 'bald.png',
        contracts: {
            [ChainId.Base]: {
                address: '0x27D2DECb4bFC9C76F0309b8E88dec3a601Fe25a8',
                decimal: 18,
            },
        },
    },
    {
        name: "USD Coin",
        symbol: TokenSymbol.USDCBase,
        chains: [ChainId.Base],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.Base]: {
                address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
                decimal: 6,
            },
        },
    },
    {
        name: "USD Base Coin",
        symbol: TokenSymbol.USDBCBase,
        chains: [ChainId.Base],
        icon: baseURL + 'usdbc.png',
        contracts: {
            [ChainId.Base]: {
                address: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
                decimal: 6,
            },
        },
    },
    {
        name: "Magic Internet Money",
        symbol: TokenSymbol.MIMBase,
        chains: [ChainId.Base],
        icon: baseURL + 'mim.png',
        contracts: {
            [ChainId.Base]: {
                address: '0x4A3A6Dd60A34bB2Aba60D73B4C88315E9CeB6A3D',
                decimal: 18,
            },
        },
    },
    {
        name: "Coinbase Wrapped Staked ETH",
        symbol: TokenSymbol.CBETHBase,
        chains: [ChainId.Base],
        icon: baseURL + 'cbeth.png',
        contracts: {
            [ChainId.Base]: {
                address: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
                decimal: 18,
            },
        },
    },
    {
        name: "Dai Stablecoin",
        symbol: TokenSymbol.DAIBase,
        chains: [ChainId.Base],
        icon: baseURL + 'dai.png',
        contracts: {
            [ChainId.Base]: {
                address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
                decimal: 18,
            },
        },
    },
]
