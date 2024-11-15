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
    {
        name: "Chibs Token",
        symbol: TokenSymbol.CHIBSCyber,
        chains: [ChainId.Cyber],
        icon: baseURL + 'chibs.png',
        contracts: {
            [ChainId.Cyber]: {
                address: '0x38f970260c3eeee0adcaed0e2c3e937e8e2e9780',
                decimal: 18, 
            },
        },
    },
    {
        name: "Phavercoin",
        symbol: TokenSymbol.SOCIALCyber,
        chains: [ChainId.Cyber],
        icon: baseURL + 'social.png',
        contracts: {
            [ChainId.Cyber]: {
                address: '0xd3c68968137317a57a9babeacc7707ec433548b4',
                decimal: 18, 
            },
        },
    },
    {
        name: "TRUCK",
        symbol: TokenSymbol.TRUCKCyber,
        chains: [ChainId.Cyber],
        icon: baseURL + 'truck.png',
        contracts: {
            [ChainId.Cyber]: {
                address: '0x2ea53081b5a184dfd9860a81633649e5d0f63d38',
                decimal: 18, 
            },
        },
    },
    {
        name: "Cyber Inu",
        symbol: TokenSymbol.CINUCyber,
        chains: [ChainId.Cyber],
        icon: baseURL + 'cinu.png',
        contracts: {
            [ChainId.Cyber]: {
                address: '0x590b8e9A79B51cF8A62f082d2C248c1C5Bf77D34',
                decimal: 18, 
            },
        },
    },
]
