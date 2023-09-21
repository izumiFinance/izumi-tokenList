import { TokenSymbol } from "../symbols/tokenGasZeroTest";
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
        name: "Gas Zero Token",
        symbol: TokenSymbol.GAS0Test,
        chains: [ChainId.GasZeroGoerliL2],
        icon: baseURL + 'gaszero.png',
        contracts: {
            [ChainId.GasZeroGoerliL2]: {
                address: '0xC6C7c2edF70A3245ad6051E93809162B9758ce08', //WGAS0
                decimal: 18, 
            },
        },
    },
    {
        name: "Wrapped GAS0",
        symbol: TokenSymbol.WGAS0Test,
        chains: [ChainId.GasZeroGoerliL2],
        icon: baseURL + 'gaszero.png',
        contracts: {
            [ChainId.GasZeroGoerliL2]: {
                address: '0xC6C7c2edF70A3245ad6051E93809162B9758ce08',
                decimal: 18, 
            },
        },
    },
]
