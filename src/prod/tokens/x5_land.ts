import { TokenSymbol } from "../symbols/x5_land";
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
        name: 'Revoland Game Token',
        symbol: TokenSymbol.LAND,
        icon: baseURL + 'LAND.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x9A981FAcCD3B9b3B9453BFF266296fc0f2De21a2',
                decimal: 18,
            },
        },
    },
    {
        name: 'Revoland Governance Token',
        symbol: TokenSymbol.REVO,
        icon: baseURL + 'REVO.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xfC279e6ff1FB1C7F5848d31561cAb27d34a2856b',
                decimal: 18,
            },
        },
    }
]
