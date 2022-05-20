import { TokenSymbol } from "../symbols/duet";
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
        name: 'Duet Governance Token',
        symbol: TokenSymbol.DUET,
        icon: baseURL + 'DUET.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x95ee03e1e2c5c4877f9a298f1c0d6c98698fab7b',
                decimal: 18,
            },
        },
    },
    {
        name: 'Duet USD',
        symbol: TokenSymbol.DUSD,
        icon: baseURL + 'dUSD.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xe04fe47516C4Ebd56Bc6291b15D46A47535e736B',
                decimal: 18,
            },
        },
    },
    {
        name: 'Duet WTI',
        symbol: TokenSymbol.DWTI,
        icon: baseURL + 'dWTI.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x587Fb3e1C6819fd54e3740C6C4C7832484eF451b',
                decimal: 18,
            },
        },
    },
    {
        name: 'Duet XAU',
        symbol: TokenSymbol.DXAU,
        icon: baseURL + 'dXAU.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x7e3b9b1313ad547feb71ac5bc48b03d7e683601e',
                decimal: 18,
            },
        },
    },
]
