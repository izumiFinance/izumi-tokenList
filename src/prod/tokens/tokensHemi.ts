import { TokenSymbol } from "../symbols/tokenHemi";
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
        name: "VUSD Token",
        symbol: TokenSymbol.VUSDHemi,
        icon: baseURL + 'vusd.png',
        chains: [ChainId.Hemi],
        contracts: {
            [ChainId.Hemi]: {
                address: '0x7A06C4AeF988e7925575C50261297a946aD204A8',
                decimal: 18,
            },
        },
    },
    {
        name: "Hemi BTC",
        symbol: TokenSymbol.HEMIBTCHemi,
        icon: baseURL + 'hemibtc.png',
        chains: [ChainId.Hemi],
        contracts: {
            [ChainId.Hemi]: {
                address: '0xAA40c0c7644e0b2B224509571e10ad20d9C4ef28',
                decimal: 8,
            },
        },
    },
]
