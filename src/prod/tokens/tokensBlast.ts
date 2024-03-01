import { TokenSymbol } from "../symbols/tokenBlast";
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
        name: "Ether",
        symbol: TokenSymbol.ETHBLAST,
        icon: baseURL + 'eth.png',
        chains: [ChainId.Blast],
        contracts: {
            [ChainId.Blast]: {
                address: '0x4300000000000000000000000000000000000004', //WETH Rebasing
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped Ether",
        symbol: TokenSymbol.WETHBLAST,
        icon: baseURL + 'WETH.png',
        chains: [ChainId.Blast],
        contracts: {
            [ChainId.Blast]: {
                address: '0x4300000000000000000000000000000000000004', 
                decimal: 18,
            },
        },
    },
    {
        name: "Rebasing USD",
        symbol: TokenSymbol.USDBBLAST,
        icon: baseURL + 'usdb.png',
        chains: [ChainId.Blast],
        contracts: {
            [ChainId.Blast]: {
                address: '0x4300000000000000000000000000000000000003', 
                decimal: 18,
            },
        },
    },
]
