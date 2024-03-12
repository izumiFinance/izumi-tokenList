import { TokenSymbol } from "../symbols/tokenZkLink";
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
        name: "USD Coin (Linea)",
        symbol: TokenSymbol.USDCLineaZklink,
        chains: [ChainId.Zklink],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.Zklink]: {
                address: '0xfFE944D301BB97b1271f78c7d0E8C930b75DC51B',
                decimal: 6, 
            },
        },
    },
]
