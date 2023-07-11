import { TokenSymbol } from "../symbols/tokenOpBNBTestnet";
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
        name: "Tether",
        symbol: TokenSymbol.USDTOPBNB,
        chains: [ChainId.OpBNBTest],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.OpBNBTest]: {
                address: '0x6a7436775c0d0B70cfF4c5365404ec37c9d9aF4b',
                decimal: 18,
            },
        },
    },
    {
        name: "iZUMi token",
        symbol: TokenSymbol.IZIOPBNB,
        chains: [ChainId.OpBNBTest],
        icon: baseURL + 'izi.png',
        contracts: {
            [ChainId.OpBNBTest]: {
                address: '0x2A2E08ea99E63482BDad8Bf69c7b69752F07736F',
                decimal: 18,
            },
        },
    },
    {
        name: "opBNB",
        symbol: TokenSymbol.OPBNB,
        chains: [ChainId.OpBNBTest],
        icon: baseURL + 'opbnb.png',
        contracts: {
            [ChainId.OpBNBTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', // wopbnb
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped opBNB",
        symbol: TokenSymbol.WOPBNB,
        chains: [ChainId.OpBNBTest],
        icon: baseURL + 'opbnb.png',
        contracts: {
            [ChainId.OpBNBTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',
                decimal: 18,
            },
        },
    },
]
