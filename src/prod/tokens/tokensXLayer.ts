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
        name: "FBPAY Token",
        symbol: TokenSymbol.FBXLayer,
        icon: baseURL + 'fb.png',
        chains: [ChainId.XLayer],
        contracts: {
            [ChainId.XLayer]: {
                address: '0x770f030fdbf63ebf1c939de8bcff8943c2c2d454',
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
    {
        name: "XDOG Token",
        symbol: TokenSymbol.XDOGXLayer,
        icon: baseURL + 'xdogxlayer.png',
        chains: [ChainId.XLayer],
        contracts: {
            [ChainId.XLayer]: {
                address: '0x0eae5d6bb2c534d20a0452e51479957de49583ca',  
                decimal: 18,
            },
        },
    },
    {
        name: "Tiny Tiger Cat",
        symbol: TokenSymbol.TCATXLayer,
        icon: baseURL + 'caca.png',
        chains: [ChainId.XLayer],
        contracts: {
            [ChainId.XLayer]: {
                address: '0xf782E172A14Ee1c85cD980C15375bA0E87957028',
                decimal: 18,
            },
        },
    },
    // {
    //     name: "MUKI Token",
    //     symbol: TokenSymbol.MUKIXLayer,
    //     icon: baseURL + 'muki.png',
    //     chains: [ChainId.XLayer],
    //     contracts: {
    //         [ChainId.XLayer]: {
    //             address: '0x73644a48a4f540fa49a8b4d41dba2ded5df3912b',  
    //             decimal: 18,
    //         },
    //     },
    // },
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
        name: "OKOX Token",
        symbol: TokenSymbol.OKOXXLayer,
        icon: baseURL + 'okox.png',
        chains: [ChainId.XLayer],
        contracts: {
            [ChainId.XLayer]: {
                address: '0x980855ca48b601df572e6877ff908c8bed38bcb5',  
                decimal: 18,
            },
        },
    },

    {
        name: "okx xPEPE Token",
        symbol: TokenSymbol.XPEPELayer,
        icon: baseURL + 'xpepe.png',
        chains: [ChainId.XLayer],
        contracts: {
            [ChainId.XLayer]: {
                address: '0x3e40cc5b2ffe8f848e881c28f641131f62eb4ae9',  
                decimal: 18,
            },
        },
    },
]
