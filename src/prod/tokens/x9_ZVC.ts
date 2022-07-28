import { TokenSymbol } from "../symbols/x9_ZVC";
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
        name: 'Zero Verse Coin',
        symbol: TokenSymbol.ZVC,
        icon: baseURL + 'ZVC.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x8f76907B173FBf65ddd84A86519C8767a90b8B90',
                decimal: 9,
            },
        },
    },
]
