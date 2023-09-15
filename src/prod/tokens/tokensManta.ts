import { TokenSymbol } from "../symbols/tokenManta";
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
        symbol: TokenSymbol.ETHManta,
        icon: baseURL + 'eth.png',
        chains: [ChainId.Manta],
        contracts: {
            [ChainId.Manta]: {
                address: '0x0Dc808adcE2099A9F62AA87D9670745AbA741746',
                decimal: 18,
            }, // WETH
        },
    },
    {
        name: "Wrapped Ether",
        symbol: TokenSymbol.WETHManta,
        icon: baseURL + 'WETH.png',
        chains: [ChainId.Manta],
        contracts: {
            [ChainId.Manta]: {
                address: '0x0Dc808adcE2099A9F62AA87D9670745AbA741746',
                decimal: 18,
            }, 
        },
    },
    {
        name: "USD Coin",
        symbol: TokenSymbol.USDCManta,
        icon: baseURL + 'usdc.png',
        chains: [ChainId.Manta],
        contracts: {
            [ChainId.Manta]: {
                address: '0xb73603C5d87fA094B7314C74ACE2e64D165016fb',
                decimal: 6,
            }, 
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDTManta,
        icon: baseURL + 'usdt.png',
        chains: [ChainId.Manta],
        contracts: {
            [ChainId.Manta]: {
                address: '0xf417F5A458eC102B90352F697D6e2Ac3A3d2851f',
                decimal: 6,
            }, 
        },
    },
    {
        name: "Dai Stablecoin",
        symbol: TokenSymbol.DAIManta,
        icon: baseURL + 'dai.png',
        chains: [ChainId.Manta],
        contracts: {
            [ChainId.Manta]: {
                address: '0x1c466b9371f8aBA0D7c458bE10a62192Fcb8Aa71',
                decimal: 18,
            }, 
        },
    },
    {
        name: "Wrapped BTC",
        symbol: TokenSymbol.WBTCManta,
        icon: baseURL + 'WBTC.png',
        chains: [ChainId.Manta],
        contracts: {
            [ChainId.Manta]: {
                address: '0x305E88d809c9DC03179554BFbf85Ac05Ce8F18d6',
                decimal: 8,
            }, 
        },
    },
    {
        name: "Wrapped liquid staked Ether 2.0",
        symbol: TokenSymbol.WSTETHManta, 
        icon: baseURL + 'steth.png',
        chains: [ChainId.Manta],
        contracts: {
            [ChainId.Manta]: {
                address: '0x2FE3AD97a60EB7c79A976FC18Bb5fFD07Dd94BA5',
                decimal: 18,
            }, 
        },
    },
    {
        name: "Rocket Pool ETH",
        symbol: TokenSymbol.RETHManta, 
        icon: baseURL + 'reth.png',
        chains: [ChainId.Manta],
        contracts: {
            [ChainId.Manta]: {
                address: '0x6E9655611b42C10b9aF25B6ca08bE349Df45c370',
                decimal: 18,
            }, 
        },
    },
]
