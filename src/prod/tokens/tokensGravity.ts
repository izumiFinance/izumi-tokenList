import { TokenSymbol } from "../symbols/tokenGravity";
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
        name: "Gravity Token",
        symbol: TokenSymbol.GGravity,
        icon: baseURL + 'gravity.png',
        chains: [ChainId.Gravity],
        contracts: {
            [ChainId.Gravity]: {
                address: '0xBB859E225ac8Fb6BE1C7e38D87b767e95Fef0EbD',  //WG
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped G.",
        symbol: TokenSymbol.WGGravity,
        icon: baseURL + 'gravity.png',
        chains: [ChainId.Gravity],
        contracts: {
            [ChainId.Gravity]: {
                address: '0xBB859E225ac8Fb6BE1C7e38D87b767e95Fef0EbD',  
                decimal: 18,
            },
        },
    },
]
