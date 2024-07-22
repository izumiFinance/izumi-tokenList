import { TokenSymbol } from "../symbols/tokenZkLink";
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
        name: "zkLink Token",
        symbol: TokenSymbol.ZKLZkLink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'zkl.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0xC967dabf591B1f4B86CFc74996EAD065867aF19E',
                decimal: 18, 
            },
        },
    },
    {
        name: "Nova Tether USD",
        symbol: TokenSymbol.USDTZklink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0x2F8A25ac62179B31D62D7F80884AE57464699059',
                decimal: 6, 
            },
        },
    },
    {
        name: "Nova USD Coin",
        symbol: TokenSymbol.USDCZklink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0x1a1A3b2ff016332e866787B311fcB63928464509',
                decimal: 6, 
            },
        },
    },
    {
        name: "Nova Dai Stablecoin",
        symbol: TokenSymbol.DAIZklink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'dai.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0xF573fA04A73d5AC442F3DEa8741317fEaA3cDeab',
                decimal: 18, 
            },
        },
    },
    {
        name: "Nova Wrapped BTC",
        symbol: TokenSymbol.WBTCZklink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'wbtc.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0xDa4AaEd3A53962c83B35697Cd138cc6df43aF71f',
                decimal: 8, 
            },
        },
    },
    {
        name: "USD Coin (Linea)",
        symbol: TokenSymbol.USDCLineaZklink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0xfFE944D301BB97b1271f78c7d0E8C930b75DC51B',
                decimal: 6, 
            },
        },
    },
    {
        name: "Tether USD (Linea)",
        symbol: TokenSymbol.USDTLineaZkLink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0xAF5852CA4Fc29264226Ed0c396dE30C945589D6D',
                decimal: 6, 
            },
        },
    },
    {
        name: "USD Coin (Ethereum)",
        symbol: TokenSymbol.USDCEthZklink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0x220B1C622c8c169a9174f42CEA89a9E2f83B63F6',
                decimal: 6, 
            },
        },
    },
    {
        name: "Tether USD (Ethereum)",
        symbol: TokenSymbol.USDTEthZklink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0x0ace5E8e1Be0d3Df778f639d79fa8231b376b9F1',
                decimal: 6, 
            },
        },
    },
    {
        name: "USD Coin (ZkSync Era)",
        symbol: TokenSymbol.USDCZkSyncZklink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0x60CF0D62329699A23E988d500A7E40Faae4a3E4D',
                decimal: 6, 
            },
        },
    },
    {
        name: "Tether USD (ZkSync Era)",
        symbol: TokenSymbol.USDTZkSynZklink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0x8Fed4307f02eCcbd9EC88C84081Ba5eDCAcD0964',
                decimal: 6, 
            },
        },
    },
    {
        name: "USD Coin (Arbitrum)",
        symbol: TokenSymbol.USDCArbiZkLink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0x7581469cb53E786F39ff26E8aF6Fd750213dAcEd',
                decimal: 6, 
            },
        },
    },
    {
        name: "Tether USD (Arbitrum)",
        symbol: TokenSymbol.USDTArbiZkLink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0x012726F9f458a63f86055b24E67BA0aa26505028',
                decimal: 6, 
            },
        },
    },
    {
        name: "USD Coin (Manta)",
        symbol: TokenSymbol.USDCMantaZkLink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0xA8A59Bb7fe9fE2364ae39a3B48E219fAB096c852',
                decimal: 6, 
            },
        },
    },
    {
        name: "USD Coin (Mantle)",
        symbol: TokenSymbol.USDCMantleZkLink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0x4E340B4Ea46ca1D1CE6e2dF7b21e649e2921521f',
                decimal: 6, 
            },
        },
    },
    {
        name: "Wrapped BTC (Ethereum)",
        symbol: TokenSymbol.WBTCEthZkLink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'WBTC.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0xEbc45Ef3B6D7E31573DAa9BE81825624725939f9',
                decimal: 8, 
            },
        },
    },
    {
        name: "Wrapped BTC (Arbitrum)",
        symbol: TokenSymbol.WBTCArbiZkLink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'WBTC.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0x3DabBd8A31a411E85f628278d6601fCeD82f6844',
                decimal: 8, 
            },
        },
    },
    {
        name: "Free Bridged SolvBTC",
        symbol: TokenSymbol.SOLVBTCZkLink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'solvbtc.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0xbEAf16cFD8eFe0FC97C2a07E349B9411F5dC272C',
                decimal: 18, 
            },
        },
    },
    {
        name: "BTCT Token",
        symbol: TokenSymbol.BTCTZkLink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'btct.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0xFb8dBdc644eb54dAe0D7A9757f1e6444a07F8067',
                decimal: 18, 
            },
        },
    },
    {
        name: "ZK",
        symbol: TokenSymbol.ZKZkLink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'zk.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0x6d316f7bfc72d3924ef37c782f066044a4347da8',
                decimal: 18, 
            },
        },
    },
]
