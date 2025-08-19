import { TokenSymbol } from "../symbols/tokenStableTest";
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
        name: "USD Tether",
        symbol: TokenSymbol.USDTSTable,
        chains: [ChainId.StableTest],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.StableTest]: {
                address: '0x1eE5eDC5Fe498a2dD82862746D674DB2a5e7fef6', // wusdt
                decimal: 18,
            },
        },
    },

    {
        name: "Wrapped USDT",
        symbol: TokenSymbol.WUSDTSTable,
        chains: [ChainId.StableTest],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.StableTest]: {
                address: '0x1eE5eDC5Fe498a2dD82862746D674DB2a5e7fef6', // wusdt
                decimal: 18,
            },
        },
    },
]
