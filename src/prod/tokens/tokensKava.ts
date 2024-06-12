import { TokenSymbol } from "../symbols/tokenKava";
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
        name: "Tether USDt",
        symbol: TokenSymbol.USDTKava,
        icon: baseURL + 'usdt.png',
        chains: [ChainId.Kava],
        contracts: {
            [ChainId.Kava]: {
                address: '0x919C1c267BC06a7039e03fcc2eF738525769109c', 
                decimal: 6,
            },
        },
    },
    {
        name: "Kava Token",
        symbol: TokenSymbol.KAVAKava,
        icon: baseURL + 'kava.png',
        chains: [ChainId.Kava],
        contracts: {
            [ChainId.Kava]: {
                address: '0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b',  //Wrapped KAVA
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped KAVA",
        symbol: TokenSymbol.WKAVAKava,
        icon: baseURL + 'kava.png',
        chains: [ChainId.Kava],
        contracts: {
            [ChainId.Kava]: {
                address: '0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b', 
                decimal: 18,
            },
        },
    },
]
