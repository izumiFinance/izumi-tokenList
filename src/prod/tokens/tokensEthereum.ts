import { TokenSymbol } from "../symbols/tokenEthereum";
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
        name: "CyberConnect Token",
        symbol: TokenSymbol.CYBEREth,
        icon: baseURL + 'cyber.png',
        chains: [ChainId.EthereumMainnet],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0x14778860E937f509e651192a90589dE711Fb88a9', 
                decimal: 18,
            },
        },
    },
]
