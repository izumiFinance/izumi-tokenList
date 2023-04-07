import { TokenSymbol } from "../symbols/tokenTelos";
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
        name: "Telos Token",
        symbol: TokenSymbol.TLOS,
        icon: baseURL + 'tlos.png',
        chains: [ChainId.TELOS, ChainId.BSC],
        contracts: {
            [ChainId.TELOS]: {
                address: '0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E', //WTLOS
                decimal: 18,
            },
            [ChainId.BSC]: {
                address: '0xb6C53431608E626AC81a9776ac3e999c5556717c',
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped Telos Token",
        symbol: TokenSymbol.WTLOS,
        icon: baseURL + 'tlos.png',
        chains: [ChainId.TELOS],
        contracts: {
            [ChainId.TELOS]: {
                address: '0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E',
                decimal: 18,
            },
        },
    },
]
