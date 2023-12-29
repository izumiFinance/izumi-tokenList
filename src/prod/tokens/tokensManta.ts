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
    {
        name: "TIA",
        symbol: TokenSymbol.TIAManta, 
        icon: baseURL + 'tia.png',
        chains: [ChainId.Manta],
        contracts: {
            [ChainId.Manta]: {
                address: '0x6fae4d9935e2fcb11fc79a64e917fb2bf14dafaa',
                decimal: 6,
            }, 
        },
    },
    {
        name: "Asmatch Token",
        symbol: TokenSymbol.ASMManta, 
        icon: baseURL + 'asm.png',
        chains: [ChainId.Manta],
        contracts: {
            [ChainId.Manta]: {
                address: '0xCd5d6dE3fdBce1895F0Dac13A065673599ED6806',
                decimal: 18,
            }, 
        },
    },
    {
        name: "Wrapped Mountain Protocol USD",
        symbol: TokenSymbol.WUSDMManta, 
        icon: baseURL + 'usdm.png',
        chains: [ChainId.Manta],
        contracts: {
            [ChainId.Manta]: {
                address: '0xbdAd407F77f44F7Da6684B416b1951ECa461FB07',
                decimal: 18,
            }, 
        },
    },
    {
        name: "StakeStone Ether",
        symbol: TokenSymbol.STONEManta, 
        icon: baseURL + 'stone.png',
        chains: [ChainId.Manta],
        contracts: {
            [ChainId.Manta]: {
                address: '0xEc901DA9c68E90798BbBb74c11406A32A70652C3',
                decimal: 18,
            }, 
        },
    },
    {
        name: "Minu the Manta",
        symbol: TokenSymbol.MNUManta, 
        icon: baseURL + 'mnu.png',
        chains: [ChainId.Manta],
        contracts: {
            [ChainId.Manta]: {
                address: '0x0d613b80f9afb3cef99fe26702227d74b0178740',
                decimal: 18,
            }, 
        },
    },
    {
        name: "MANTE",
        symbol: TokenSymbol.MANTEManta, 
        icon: baseURL + 'mante.png',
        chains: [ChainId.Manta],
        contracts: {
            [ChainId.Manta]: {
                address: '0xaa902c15676c076ec0e7cb7cc57201d2162e2eb6',
                decimal: 18,
            }, 
        },
    },
    {
        name: "KUMA",
        symbol: TokenSymbol.KUMAManta, 
        icon: baseURL + 'kuma.png',
        chains: [ChainId.Manta],
        contracts: {
            [ChainId.Manta]: {
                address: '0xCA24Fdce9d4D9BD69c829689bAEa02E34d025f43',
                decimal: 18,
            }, 
        },
    },
]
