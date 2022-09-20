import { TokenSymbol } from "../symbols/x18_stader";
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
        name: 'Liquid Staking BNB',
        symbol: TokenSymbol.BNBX,
        icon: baseURL + 'bnbx.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x1bdd3Cf7F79cfB8EdbB955f20ad99211551BA275',
                decimal: 18,
            },
        },
    },
    {
        name: 'Stader Token',
        symbol: TokenSymbol.SD,
        icon: baseURL + 'sd.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x3BC5AC0dFdC871B365d159f728dd1B9A0B5481E8',
                decimal: 18,
            },
        },
    },
]
