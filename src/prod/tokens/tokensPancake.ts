import { TokenSymbol } from "../symbols/tokenPancake";
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
        name: "LUNA (Wormhole)",
        symbol: TokenSymbol.LUNA,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/luna.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x156ab3346823B651294766e23e6Cf87254d68962',
                decimal: 6,
            },
        },
    },
    {
        name: "Ripple Token",
        symbol: TokenSymbol.XRP,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/xrp.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
                decimal: 18,
            },
        },
    },
    {
        name: "Biswap Token",
        symbol: TokenSymbol.BSW,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/bsw.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
                decimal: 18,
            },
        },
    },
    {
        name: "Uniswap",
        symbol: TokenSymbol.UNI,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/uni.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xBf5140A22578168FD562DCcF235E5D43A02ce9B1',
                decimal: 18,
            },
        },
    },
    {
        name: "Polkadot Token",
        symbol: TokenSymbol.DOT,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/dot.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
                decimal: 18,
            },
        },
    },
    {
        name: "ChainLink Token",
        symbol: TokenSymbol.LINK,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/link.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD',
                decimal: 18,
            },
        },
    },
    {
        name: "Litecoin",
        symbol: TokenSymbol.LTC,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/ltc.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94',
                decimal: 18,
            },
        },
    },
    {
        name: "Filecoin",
        symbol: TokenSymbol.FIL,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/fil.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153',
                decimal: 18,
            },
        },
    },
    {
        name: "TRON",
        symbol: TokenSymbol.TRX,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/trx.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B',
                decimal: 18,
            },
        },
    },
    {
        name: "SHIBA INU Token",
        symbol: TokenSymbol.SHIB,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/shib.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x2859e4544C4bB03966803b044A93563Bd2D0DD4D',
                decimal: 18,
            },
        },
    },
    {
        name: "Wombat Token",
        symbol: TokenSymbol.WOM,
        icon: baseURL + 'wom.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
                decimal: 18,
            },
        },
    },
    {
        name: "Wombex Token",
        symbol: TokenSymbol.WMX,
        icon: baseURL + 'wmx.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xa75d9ca2a0a1D547409D82e1B06618EC284A2CeD',
                decimal: 18,
            },
        },
    },
]
