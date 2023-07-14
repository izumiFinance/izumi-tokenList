import { TokenSymbol } from "../symbols/tokenBSC";
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
        name: 'Tiny Coin',
        symbol: TokenSymbol.TINC,
        icon: baseURL + 'TINC.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x05aD6E30A855BE07AfA57e08a4f30d00810a402e',
                decimal: 18,
            },
        },
    },
    {
        name: "ChiChaCoin",
        symbol: TokenSymbol.CCC,
        icon: baseURL + 'ccc.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x383268691ee31c68489b19b8f2d7003ec504d534', 
                decimal: 18,
            },
        },
    },
    {
        name: "Arbipad",
        symbol: TokenSymbol.ARBIBSC,
        icon: baseURL + 'arbi.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xa7bD657C5838472dDF85FF0797A2e6fce8fd4833', 
                decimal: 18,
            },
        },
    },
    {
        name: 'TokenPocket Token',
        symbol: TokenSymbol.TPT,
        icon: baseURL + 'TPT.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xECa41281c24451168a37211F0bc2b8645AF45092',
                decimal: 4,
            },
        },
    },
    {
        name: 'Duet Governance Token',
        symbol: TokenSymbol.DUET,
        icon: baseURL + 'DUET.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x95ee03e1e2c5c4877f9a298f1c0d6c98698fab7b',
                decimal: 18,
            },
        },
    },
    {
        name: 'Duet USD',
        symbol: TokenSymbol.DUSD,
        icon: baseURL + 'dUSD.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xe04fe47516C4Ebd56Bc6291b15D46A47535e736B',
                decimal: 18,
            },
        },
    },
    {
        name: 'Duet WTI',
        symbol: TokenSymbol.DWTI,
        icon: baseURL + 'dWTI.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x587Fb3e1C6819fd54e3740C6C4C7832484eF451b',
                decimal: 18,
            },
        },
    },
    {
        name: 'Duet XAU',
        symbol: TokenSymbol.DXAU,
        icon: baseURL + 'dXAU.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x7e3b9b1313ad547feb71ac5bc48b03d7e683601e',
                decimal: 18,
            },
        },
    },
    {
        name: 'BurgerCities',
        symbol: TokenSymbol.BURGER,
        icon: baseURL + 'burger.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f',
                decimal: 18,
            },
        },
    },
    {
        name: 'Metazodiac Token',
        symbol: TokenSymbol.MW,
        icon: baseURL + 'MW.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x154d746794449B6CF534FA11A2Cf7FfF5C968977',
                decimal: 18,
            },
        },
    },
    {
        name: 'Shield',
        symbol: TokenSymbol.SLD,
        icon: baseURL + 'sld.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x1ef6A7e2c966fb7C5403EFEFdE38338b1a95a084',
                decimal: 18,
            },
        },
    },
    {
        name: 'KillSwitch Token',
        symbol: TokenSymbol.KSW,
        icon: baseURL + 'KSW.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x270178366a592bA598C2e9d2971DA65f7bAa7C86',
                decimal: 18,
            },
        },
    },
    {
        name: 'Revoland Game Token',
        symbol: TokenSymbol.LAND,
        icon: baseURL + 'LAND.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x9A981FAcCD3B9b3B9453BFF266296fc0f2De21a2',
                decimal: 18,
            },
        },
    },
    {
        name: 'Revoland Governance Token',
        symbol: TokenSymbol.REVO,
        icon: baseURL + 'REVO.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xfC279e6ff1FB1C7F5848d31561cAb27d34a2856b',
                decimal: 18,
            },
        },
    },
    {
        name: 'Froyo Token',
        symbol: TokenSymbol.FROYO,
        icon: baseURL + 'froyo.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xe369fec23380f9F14ffD07a1DC4b7c1a9fdD81c9',
                decimal: 18,
            },
        },
    },
    {
        name: 'Nebulas Token',
        symbol: TokenSymbol.NAS,
        icon: baseURL + 'nas.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x2E1F3D4cB35980F6339C006e64AC3a555dB6676d',
                decimal: 18,
            },
        },
    },
    {
        name: 'Jupyter',
        symbol: TokenSymbol.IOM,
        icon: baseURL + 'iom.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xD6ea4ec77fB7e0d5c331F9109f00CcEdE255b9C8',
                decimal: 18,
            },
        },
    },
    {
        name: 'Zero Verse Coin',
        symbol: TokenSymbol.ZVC,
        icon: baseURL + 'ZVC.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x8f76907B173FBf65ddd84A86519C8767a90b8B90',
                decimal: 9,
            },
        },
    },
    {
        name: 'MNW',
        symbol: TokenSymbol.MNW,
        icon: baseURL + 'MNW.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x8E596702B7e84907836776fDdC56067b64147C8f',
                decimal: 18,
            },
        },
    },
    {
        name: 'MetaElfLand Token',
        symbol: TokenSymbol.MELT,
        icon: baseURL + 'melt.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x7eb35225995b097c84eF10501dD6E93A49bdFd63',
                decimal: 8,
            },
        },
    },
    {
        name: 'Green Energy',
        symbol: TokenSymbol.GE,
        icon: baseURL + 'ge.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x708F90170722f8F8775bf64d7f435A2BADBd89FD',
                decimal: 18,
            },
        },
    },
    {
        name: 'Richverse Web3 Token',
        symbol: TokenSymbol.RIV,
        icon: baseURL + 'RIV.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xca5e32d44f1744001b5600dc2f5f5e0bbb6e9d3e',
                decimal: 18,
            },
        },
    },
]
