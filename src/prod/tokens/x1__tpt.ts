import { TokenSymbol } from "../symbols/x1__tpt";
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
        name: 'TokenPocket Token',
        symbol: TokenSymbol.TPT,
        icon: baseURL + 'TPT.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xECa41281c24451168a37211F0bc2b8645AF45092',
                decimal: 4,
            },
        },
    },
]
