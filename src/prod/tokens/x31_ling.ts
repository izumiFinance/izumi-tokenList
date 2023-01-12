import { TokenSymbol } from "../symbols/x31_ling";
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
        name: 'Lingose Token',
        symbol: TokenSymbol.LING,
        icon: baseURL + 'ling.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x68c0E798b749183c97239114BB76fd1e5e3DB98C',
                decimal: 18,
            },
        },
    },
]
