import { TokenSymbol } from "../symbols/x4_ksw";
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
        name: 'KillSwitch Token',
        symbol: TokenSymbol.KSW,
        icon: baseURL + 'KSW.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x270178366a592bA598C2e9d2971DA65f7bAa7C86',
                decimal: 18,
            },
        },
    },
]
