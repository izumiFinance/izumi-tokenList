import { TokenSymbol } from "../symbols/tokenTaiko";
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
        name: "TAIKO Token",
        symbol: TokenSymbol.TAIKOTaiko,
        icon: baseURL + 'taiko.png',
        chains: [ChainId.Taiko],
        contracts: {
            [ChainId.Taiko]: {
                address: '0xA9d23408b9bA935c230493c40C73824Df71A0975', 
                decimal: 18,
            },
        },
    },
    {
        name: "MAGA Token",
        symbol: TokenSymbol.MAGATaiko,
        icon: baseURL + 'maga.png',
        chains: [ChainId.Taiko],
        contracts: {
            [ChainId.Taiko]: {
                address: '0x2D9E1dA77F086c50f93db46E554974B71536a9Ee', 
                decimal: 18,
            },
        },
    },
]
