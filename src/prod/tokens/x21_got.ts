import { TokenSymbol } from "../symbols/x21_got";
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
        name: 'Era GOT Token',
        symbol: TokenSymbol.GOT,
        icon: baseURL + 'got.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xDA71E3eC0d579FED5dbABa31eEaD3cEB9e77A928',
                decimal: 18,
            },
        },
    },
]
