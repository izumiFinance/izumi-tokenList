import { TokenSymbol } from "../symbols/x23_ant";
import { ChainId } from "../chainId";

export interface TokenInfo {
    chains: number[];
    name: string;
    symbol: TokenSymbol,
    icon: string;
    contracts: Partial<Record<ChainId, { address: string; decimal: number; wrapTokenAddress?: string; }>>;
}

const baseURL = 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/'

export const tokens: TokenInfo[] = [
    {
        name: "AntDAO",
        symbol: TokenSymbol.ANT,
        chains: [ChainId.BSC],
        icon: baseURL + 'ant.png',
        contracts: {
            [ChainId.BSC]: {
                address: '0x76E4EFB2c78b08c3fdE3eDF98c6503dd9Df9C5E8',
                decimal: 18,
                wrapTokenAddress: '0xa0D289c752FE23043f29BD81e30D8345180bD9BB',
            },
        },
    },
]
