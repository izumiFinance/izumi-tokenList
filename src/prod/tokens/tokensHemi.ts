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
    {
        name: "uniBTC",
        symbol: TokenSymbol.UNIBTCHemi,
        icon: baseURL + 'unibtc.png',
        chains: [ChainId.Hemi],
        contracts: {
            [ChainId.Hemi]: {
                address: '0xF9775085d726E782E83585033B58606f7731AB18',
                decimal: 8,
            },
        },
    },
    {
        name: "Sumerian BTC",
        symbol: TokenSymbol.SUBTCHemi,
        icon: baseURL + 'subtc.png',
        chains: [ChainId.Hemi],
        contracts: {
            [ChainId.Hemi]: {
                address: '0xe85411C030fB32A9D8b14Bbbc6CB19417391F711',
                decimal: 18,
            },
        },
    },
    {
        name: "brBTC",
        symbol: TokenSymbol.BRBTCHemi,
        icon: baseURL + 'brbtc.png',
        chains: [ChainId.Hemi],
        contracts: {
            [ChainId.Hemi]: {
                address: '0x93919784C523f39CACaa98Ee0a9d96c3F32b593e',
                decimal: 8,
            },
        },
    },
    {
        name: "BitFi Bitcoin",
        symbol: TokenSymbol.BFBTCHemi,
        icon: baseURL + 'bfbtc.png',
        chains: [ChainId.Hemi],
        contracts: {
            [ChainId.Hemi]: {
                address: '0x623F2774d9f27B59bc6b954544487532CE79d9DF',
                decimal: 8,
            },
        },
    },
]
