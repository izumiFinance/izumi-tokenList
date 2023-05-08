import { TokenSymbol } from "../symbols/x37_degen";
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
        name: 'DegenReborn Token',
        symbol: TokenSymbol.DEGEN,
        icon: baseURL + 'degen.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x1a131F7B106D58f33eAf0fE5B47DB2f2045E5732',
                decimal: 18,
            },
        },
    },
]
