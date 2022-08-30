import { TokenSymbol } from "../symbols/x15_soul";
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
        name: 'Soul Meta Token',
        symbol: TokenSymbol.SOUL,
        icon: baseURL + 'soul.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x9c2DcEB3fEBEC3b7245a0c2395aFdd92d9364862',
                decimal: 18,
            },
        },
    },
]
