import { TokenSymbol } from "../symbols/tokenCyber";
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
        name: "Cyber Token",
        symbol: TokenSymbol.CYBERCyber,
        chains: [ChainId.Cyber],
        icon: baseURL + 'cyber.png',
        contracts: {
            [ChainId.Cyber]: {
                address: '0x14778860E937f509e651192a90589dE711Fb88a9',
                decimal: 18, 
            },
        },
    },
    {
        name: "Compound CYBER",
        symbol: TokenSymbol.CCYBERCyber,
        chains: [ChainId.Cyber],
        icon: baseURL + 'ccyber.svg',
        contracts: {
            [ChainId.Cyber]: {
                address: '0x522D3A9C2Bc14cE1C4D210ED41ab239FdED02F2b',
                decimal: 18, 
            },
        },
    },
    {
        name: "Staked CYBER",
        symbol: TokenSymbol.STCYBERCyber,
        chains: [ChainId.Cyber],
        icon: baseURL + 'stcyber.svg',
        contracts: {
            [ChainId.Cyber]: {
                address: '0x3efe22fa52f6789ddfc263cec5bcf435b14b77e2',
                decimal: 18, 
            },
        },
    },
]
