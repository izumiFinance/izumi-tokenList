import { TokenSymbol } from "../symbols/tokenPlumeNew";
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
        name: "Plume Token",
        symbol: TokenSymbol.PLUMEPlumeNew,
        icon: baseURL + 'plume.png',
        chains: [ChainId.PlumeNew],
        contracts: {
            [ChainId.PlumeNew]: {
                address: '0xEa237441c92CAe6FC17Caaf9a7acB3f953be4bd1', //wplume
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped PLUME",
        symbol: TokenSymbol.WPLUMEPlumeNew,
        icon: baseURL + 'plume.png',
        chains: [ChainId.PlumeNew],
        contracts: {
            [ChainId.PlumeNew]: {
                address: '0xEa237441c92CAe6FC17Caaf9a7acB3f953be4bd1', 
                decimal: 18,
            },
        },
    },
    {
        name: "Plume USD",
        symbol: TokenSymbol.PUSDPlumeNew,
        icon: baseURL + 'plumeusd.png',
        chains: [ChainId.PlumeNew],
        contracts: {
            [ChainId.PlumeNew]: {
                address: '0xdddD73F5Df1F0DC31373357beAC77545dC5A6f3F',
                decimal: 6,
            },
        },
    },
]
