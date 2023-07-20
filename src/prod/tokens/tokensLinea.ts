import { TokenSymbol } from "../symbols/tokenLinea";
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
        name: "Celer BUSD",
        symbol: TokenSymbol.CEBUSDLinea,
        chains: [ChainId.LineaTest],
        icon: baseURL + 'busd.png',
        contracts: {
            [ChainId.Linea]: {
                address: '0x7d43AABC515C356145049227CeE54B608342c0ad',
                decimal: 18,
            },
        },
    },
]
