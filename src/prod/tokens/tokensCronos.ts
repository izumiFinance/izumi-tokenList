import { TokenSymbol } from "../symbols/tokenCronos";
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
        name: "Cronos Token",
        symbol: TokenSymbol.CRO,
        icon: baseURL + 'cro.png',
        chains: [ChainId.Cronos],
        contracts: {
            [ChainId.Cronos]: {
                address: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
                decimal: 18,
            }, // wrapped WCRO
        },
    },
    {
        name: "Wrapped Cronos Token",
        symbol: TokenSymbol.CRO,
        icon: baseURL + 'cro.png',
        chains: [ChainId.Cronos],
        contracts: {
            [ChainId.Cronos]: {
                address: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
                decimal: 18,
            },
        },
    },
]
