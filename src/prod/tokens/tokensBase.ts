import { TokenSymbol } from "../symbols/tokenBase";
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
        name: "Bald Token",
        symbol: TokenSymbol.BALDBase,
        chains: [ChainId.Base],
        icon: baseURL + 'bald.png',
        contracts: {
            [ChainId.Base]: {
                address: '0x27D2DECb4bFC9C76F0309b8E88dec3a601Fe25a8',
                decimal: 18,
            },
        },
    },
]
