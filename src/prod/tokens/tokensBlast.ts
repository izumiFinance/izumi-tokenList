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
    {
        name: "Blast Token",
        symbol: TokenSymbol.BLASTBLAST,
        icon: baseURL + 'blast.png',
        chains: [ChainId.Blast],
        contracts: {
            [ChainId.Blast]: {
                address: '0xb1a5700fa2358173fe465e6ea4ff52e36e88e2ad', 
                decimal: 18,
            },
        },
    },
    {
        name: "Ting Tiger Cat",
        symbol: TokenSymbol.CACABLAST,
        icon: baseURL + 'caca.png',
        chains: [ChainId.Blast],
        contracts: {
            [ChainId.Blast]: {
                address: '0xf782e172a14ee1c85cd980c15375ba0e87957028', 
                decimal: 18,
            },
        },
    },
    {
        name: "Boom!",
        symbol: TokenSymbol.BOOMBLAST,
        icon: baseURL + 'boom.png',
        chains: [ChainId.Blast],
        contracts: {
            [ChainId.Blast]: {
                address: '0x0bde92b80c759326b89b62c5082febed90e8627f', 
                decimal: 18,
            },
        },
    },
    {
        name: "Bang!",
        symbol: TokenSymbol.BANGBLAST,
        icon: baseURL + 'bang.png',
        chains: [ChainId.Blast],
        contracts: {
            [ChainId.Blast]: {
                address: '0x2b193502f4b8f5f8fe22692449a30f52bf6364f2', 
                decimal: 18,
            },
        },
    },
    {
        name: "Frog Rich",
        symbol: TokenSymbol.RICHBLAST,
        icon: baseURL + 'rich.png',
        chains: [ChainId.Blast],
        contracts: {
            [ChainId.Blast]: {
                address: '0x038f1C6ED5FccF690A920a27b39366eeeF27eFCe', 
                decimal: 18,
            },
        },
    },

]
