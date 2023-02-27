import { TokenSymbol } from "../symbols/x33_goblin";
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
        name: 'Goblin',
        symbol: TokenSymbol.GOBLIN,
        icon: baseURL + 'goblin.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xDe2A66C92583332E8e1F0AEEb03DEB749A3fD33a',
                decimal: 18,
            },
        },
    },
]
