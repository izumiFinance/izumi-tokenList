import { TokenSymbol } from "../symbols/tokenOverProtocol";
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
        name: "Over Protocol Token",
        symbol: TokenSymbol.OVEROver,
        icon: baseURL + 'over.png',
        chains: [ChainId.OverProtocol],
        contracts: {
            [ChainId.OverProtocol]: {
                address: '0x59c914C8ac6F212bb655737CC80d9Abc79A1e273',  //WOVER
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped OVER",
        symbol: TokenSymbol.WOVEROver,
        icon: baseURL + 'over.png',
        chains: [ChainId.OverProtocol],
        contracts: {
            [ChainId.OverProtocol]: {
                address: '0x59c914C8ac6F212bb655737CC80d9Abc79A1e273',  
                decimal: 18,
            },
        },
    },
]
