import { TokenSymbol } from "../symbols/x3_sld";
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
        name: 'ShieldEX',
        symbol: TokenSymbol.SLD,
        icon: baseURL + 'sld.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x1ef6A7e2c966fb7C5403EFEFdE38338b1a95a084',
                decimal: 18,
            },
        },
    },
]
