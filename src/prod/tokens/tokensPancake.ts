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
]
