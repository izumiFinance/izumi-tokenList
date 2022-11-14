import { TokenSymbol } from "../symbols/x27_gri";
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
        name: 'Great Resilient Incentive',
        symbol: TokenSymbol.GRI,
        icon: baseURL + 'gri.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xD767713e787Cb351e4daFb777DD93d54f5381D29',
                decimal: 8,
            },
        },
    },
]
