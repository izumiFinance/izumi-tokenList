import { TokenSymbol } from "../symbols/tokenAurora";
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
        name: "USN Stable Coin",
        symbol: TokenSymbol.USN,
        icon: baseURL + 'usn.png',
        chains: [ChainId.Aurora],
        contracts: {
            [ChainId.Aurora]: {
                address: '0x5183e1B1091804BC2602586919E6880ac1cf2896',
                decimal: 18,
            },
        },
    },
    {
        name: "Aurigami Token",
        symbol: TokenSymbol.PLY,
        icon: baseURL + 'ply.png',
        chains: [ChainId.Aurora],
        contracts: {
            [ChainId.Aurora]: {
                address: '0x09C9D464b58d96837f8d8b6f4d9fE4aD408d3A4f',
                decimal: 18,
            },
        },
    },
    {
        name: "Trisolaris Token",
        symbol: TokenSymbol.TRI,
        icon: baseURL + 'tri.png',
        chains: [ChainId.Aurora],
        contracts: {
            [ChainId.Aurora]: {
                address: '0xFa94348467f64D5A457F75F8bc40495D33c65aBB',
                decimal: 18,
            },
        },
    },
    {
        name: "Bastion Token",
        symbol: TokenSymbol.BSTN,
        icon: baseURL + 'bstn.png',
        chains: [ChainId.Aurora],
        contracts: {
            [ChainId.Aurora]: {
                address: '0x9f1F933C660a1DC856F0E0Fe058435879c5CCEf0',
                decimal: 18,
            },
        },
    },
    {
        name: "Ref Finance Token",
        symbol: TokenSymbol.REF,
        icon: baseURL + 'ref.png',
        chains: [ChainId.Aurora],
        contracts: {
            [ChainId.Aurora]: {
                address: '0x221292443758F63563a1ed04b547278B05845FCb',
                decimal: 18,
            },
        },
    },
]
