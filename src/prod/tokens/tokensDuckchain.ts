import { TokenSymbol } from "../symbols/tokenDuckchain";
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
        name: "Bridged Tether USD",
        symbol: TokenSymbol.USDTDuckchain,
        chains: [ChainId.Duckchain],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.Duckchain]: {
                address: '0xbE138aD5D41FDc392AE0B61b09421987C1966CC3',
                decimal: 18, 
            },
        },
    },
    {
        name: "TON Token",
        symbol: TokenSymbol.TONDuckchain,
        chains: [ChainId.Duckchain],
        icon: baseURL + 'ton.png',
        contracts: {
            [ChainId.Duckchain]: {
                address: '0x7F9308E8d724e724EC31395f3af52e0593BB2e3f', // WTON
                decimal: 18, 
            },
        },
    },
    {
        name: "Wrapped TON Token",
        symbol: TokenSymbol.WTONDuckchain,
        chains: [ChainId.Duckchain],
        icon: baseURL + 'ton.png',
        contracts: {
            [ChainId.Duckchain]: {
                address: '0x7F9308E8d724e724EC31395f3af52e0593BB2e3f',
                decimal: 18, 
            },
        },
    },
    {
        name: "Bridged UTONIC TON",
        symbol: TokenSymbol.UTONDuckchain,
        chains: [ChainId.Duckchain],
        icon: baseURL + 'uton.png',
        contracts: {
            [ChainId.Duckchain]: {
                address: '0x3D46452b3486d7d4201Dd69127d325ce53E1cC80',
                decimal: 18, 
            },
        },
    },
    {
        name: "Duckchain PEPE",
        symbol: TokenSymbol.DPEPEDuckchain,
        chains: [ChainId.Duckchain],
        icon: baseURL + 'dpepe.png',
        contracts: {
            [ChainId.Duckchain]: {
                address: '0x2D9E1dA77F086c50f93db46E554974B71536a9Ee',
                decimal: 18, 
            },
        },
    },
    {
        name: "Dackie Token",
        symbol: TokenSymbol.DACKIEDuckchain,
        chains: [ChainId.Duckchain],
        icon: baseURL + 'dackie.png',
        contracts: {
            [ChainId.Duckchain]: {
                address: '0xD70Cb40a07665630C88684bDb04b6b84461041dA',
                decimal: 18, 
            },
        },
    },
    {
        name: "Duckchain MOON",
        symbol: TokenSymbol.MOONDuckchain,
        chains: [ChainId.Duckchain],
        icon: baseURL + 'moon.png',
        contracts: {
            [ChainId.Duckchain]: {
                address: '0xCdCF0E27F7D458eBFF82249cC5b9Bf7e6183F3a2',
                decimal: 18, 
            },
        },
    },
]
