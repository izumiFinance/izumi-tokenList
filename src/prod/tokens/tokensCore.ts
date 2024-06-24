import { TokenSymbol } from "../symbols/tokenCore";
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
        name: "CORE Token",
        symbol: TokenSymbol.CORECore,
        chains: [ChainId.Core],
        icon: baseURL + 'core.png',
        contracts: {
            [ChainId.Core]: {
                address: '0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f', //WCORE
                decimal: 18, 
            },
        },
    },

    {
        name: "Wrapped CORE",
        symbol: TokenSymbol.WCORECore,
        chains: [ChainId.Core],
        icon: baseURL + 'core.png',
        contracts: {
            [ChainId.Core]: {
                address: '0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f', 
                decimal: 18, 
            },
        },
    },
]
