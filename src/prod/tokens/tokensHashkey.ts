import { TokenSymbol } from "../symbols/tokenHashkey";
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
        name: "Hashkey Token",
        symbol: TokenSymbol.HSKHashkey,
        icon: baseURL + 'hsk.png',
        chains: [ChainId.HashKey],
        contracts: {
            [ChainId.HashKey]: {
                address: '0xB210D2120d57b758EE163cFfb43e73728c471Cf1',  //WHSK
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped HSK",
        symbol: TokenSymbol.WHSKHashkey,
        icon: baseURL + 'hsk.png',
        chains: [ChainId.HashKey],
        contracts: {
            [ChainId.HashKey]: {
                address: '0xB210D2120d57b758EE163cFfb43e73728c471Cf1', 
                decimal: 18,
            },
        },
    },
]
