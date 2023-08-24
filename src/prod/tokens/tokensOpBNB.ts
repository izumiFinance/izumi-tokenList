import { TokenSymbol } from "../symbols/tokenOpBNB";
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
        name: "OpBNB Token",
        symbol: TokenSymbol.BNBOp,
        chains: [ChainId.OpBNB],
        icon: baseURL + 'bnb.png',
        contracts: {
            [ChainId.OpBNB]: {
                address: '0x4200000000000000000000000000000000000006', //WBNB
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped OpBNB Token",
        symbol: TokenSymbol.BNBOp,
        chains: [ChainId.OpBNB],
        icon: baseURL + 'bnb.png',
        contracts: {
            [ChainId.OpBNB]: {
                address: '0x4200000000000000000000000000000000000006',
                decimal: 18,
            },
        },
    },
]
