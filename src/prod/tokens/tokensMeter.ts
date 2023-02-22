import { TokenSymbol } from "../symbols/tokenMeter";
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
        name: "Meter Token",
        symbol: TokenSymbol.MTR,
        icon: baseURL + 'mtr.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0x160361ce13ec33C993b5cCA8f62B6864943eb083', //WMTR
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped Meter Token",
        symbol: TokenSymbol.WMTR,
        icon: baseURL + 'mtr.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0x160361ce13ec33C993b5cCA8f62B6864943eb083', 
                decimal: 18,
            },
        },
    },
    {
        name: "Meter Governance Token",
        symbol: TokenSymbol.MTRG,
        icon: baseURL + 'mtrg.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0x228ebBeE999c6a7ad74A6130E81b12f9Fe237Ba3', 
                decimal: 18,
            },
        },
    },
]
