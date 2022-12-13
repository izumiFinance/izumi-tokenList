import { TokenSymbol } from "../symbols/x22_abnbc";
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
        name: 'Ankr BNB Reward Bearing Certificate',
        symbol: TokenSymbol.ABNBC,
        icon: baseURL + 'abnbc.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xE85aFCcDaFBE7F2B096f268e31ccE3da8dA2990A',
                decimal: 18,
            },
        },
    },
    {
        name: 'Ankr Token',
        symbol: TokenSymbol.ANKR,
        icon: baseURL + 'ankr.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xf307910A4c7bbc79691fD374889b36d8531B08e3',
                decimal: 18,
            },
        },
    },
    {
        name: 'Ankr Staked BNB',
        symbol: TokenSymbol.ANKRBNB,
        icon: baseURL + 'abnbc.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x52F24a5e03aee338Da5fd9Df68D2b6FAe1178827',
                decimal: 18,
            },
        },
    },
]
