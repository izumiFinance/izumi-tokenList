import { TokenSymbol } from "../symbols/tokenXLayer";
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
        name: "OKB Token",
        symbol: TokenSymbol.OKBXLayer,
        icon: baseURL + 'okb.png',
        chains: [ChainId.XLayer],
        contracts: {
            [ChainId.XLayer]: {
                address: '0xe538905cf8410324e03a5a23c1c177a474d59b2b',  //WOKB
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped OKB",
        symbol: TokenSymbol.WOKBXLayer,
        icon: baseURL + 'okb.png',
        chains: [ChainId.XLayer],
        contracts: {
            [ChainId.XLayer]: {
                address: '0xe538905cf8410324e03a5a23c1c177a474d59b2b',  
                decimal: 18,
            },
        },
    },
    {
        name: "X Layer Cat",
        symbol: TokenSymbol.XCAT2XLayer,
        icon: baseURL + 'xcat2.png',
        chains: [ChainId.XLayer],
        contracts: {
            [ChainId.XLayer]: {
                address: '0x019f7fdc7342b5bf5d180272ef0fe9c16ae4ee83',  
                decimal: 18,
            },
        },
    },
    {
        name: "Xcat Token",
        symbol: TokenSymbol.XCAT1XLayer,
        icon: baseURL + 'xcat1.png',
        chains: [ChainId.XLayer],
        contracts: {
            [ChainId.XLayer]: {
                address: '0x734ddad5e0cdab730da30c580f32aea83beab218',  
                decimal: 18,
            },
        },
    },
    {
        name: "Xlayerinu Token",
        symbol: TokenSymbol.XINUXLayer,
        icon: baseURL + 'xinu.png',
        chains: [ChainId.XLayer],
        contracts: {
            [ChainId.XLayer]: {
                address: '0xe7e267284e38461c951e7d464958c8c717c9da9d',  
                decimal: 18,
            },
        },
    },
]
