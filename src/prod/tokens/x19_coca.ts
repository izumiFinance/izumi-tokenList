import { TokenSymbol } from "../symbols/x19_coca";
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
        name: 'Cyber Soccer',
        symbol: TokenSymbol.COCA,
        icon: baseURL + 'coca.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x44516Eb3D488175128D257748610426a866937D8',
                decimal: 9,
            },
        },
    },
]
