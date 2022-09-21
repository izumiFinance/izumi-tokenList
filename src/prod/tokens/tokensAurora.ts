import { TokenSymbol } from "../symbols/tokenAurora";
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
        name: "USN Stable Coin",
        symbol: TokenSymbol.USN,
        icon: baseURL + 'usn.png',
        chains: [ChainId.Aurora],
        contracts: {
            [ChainId.Aurora]: {
                address: '0x5183e1B1091804BC2602586919E6880ac1cf2896',
                decimal: 18,
            },
        },
    },
]
