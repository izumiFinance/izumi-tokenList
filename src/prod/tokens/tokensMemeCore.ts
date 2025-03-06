import { TokenSymbol } from "../symbols/tokenMemeCore";
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
        name: "M Token",
        symbol: TokenSymbol.MMemeCore,
        icon: baseURL + 'memecore.png',
        chains: [ChainId.MemeCore],
        contracts: {
            [ChainId.MemeCore]: {
                address: '0x653e645e3d81a72e71328Bc01A04002945E3ef7A', //WM
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped M Token",
        symbol: TokenSymbol.WMMemeCore,
        icon: baseURL + 'memecore.png',
        chains: [ChainId.MemeCore],
        contracts: {
            [ChainId.MemeCore]: {
                address: '0x653e645e3d81a72e71328Bc01A04002945E3ef7A', 
                decimal: 18,
            },
        },
    },
]
