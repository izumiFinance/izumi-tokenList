import { TokenSymbol } from "../symbols/x8_free";
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
        name: 'Free USD',
        symbol: TokenSymbol.FUSD,
        icon: baseURL + 'FUSD.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x1C81dB7f98EFCEb72f5944F49f5Bb667fd22f2Fb',
                decimal: 18,
            },
        },
    },
    {
        name: 'Free dogecoin',
        symbol: TokenSymbol.FDOGE,
        icon: baseURL + 'FDOGE.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x06DabdEF2C43c0DC4C29Cb93c271fAF0Ab1f2CD4',
                decimal: 18,
            },
        },
    },
    {
        name: 'Free stepn',
        symbol: TokenSymbol.FGMT,
        icon: baseURL + 'FGMT.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x22beb880bE67a89eb46c04D0F0887cc87bEB249f',
                decimal: 18,
            },
        },
    },
    {
        name: 'Free milo lnu',
        symbol: TokenSymbol.FMILO,
        icon: baseURL + 'FMILO.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x140841BE8DecF3831e4cDb9C4E62ED413CF2d50E',
                decimal: 18,
            },
        },
    },
]
