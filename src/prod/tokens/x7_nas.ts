import { TokenSymbol } from "../symbols/x7_nas";
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
        name: 'Nebulas Token',
        symbol: TokenSymbol.NAS,
        icon: baseURL + 'nas.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x2E1F3D4cB35980F6339C006e64AC3a555dB6676d',
                decimal: 18,
            },
        },
    },
]
