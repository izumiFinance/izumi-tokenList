import { TokenSymbol } from "../symbols/x24_fevr";
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
        name: 'Fevr Token',
        symbol: TokenSymbol.FEVR,
        icon: baseURL + 'fevr.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x82030CDBD9e4B7c5bb0b811A61DA6360D69449cc',
                decimal: 18,
            },
        },
    },
]
