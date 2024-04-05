import { TokenSymbol } from "../symbols/tokenBeraTest";
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
        name: "Berachain Token",
        symbol: TokenSymbol.BERABera,
        chains: [ChainId.BeraTest],
        icon: baseURL + 'bera.png',
        contracts: {
            [ChainId.BeraTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', // wbera
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped Bera",
        symbol: TokenSymbol.WBERABera,
        chains: [ChainId.BeraTest],
        icon: baseURL + 'bera.png',
        contracts: {
            [ChainId.BeraTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', 
                decimal: 18,
            },
        },
    },
    {
        name: "Stargate USD Coin",
        symbol: TokenSymbol.STGUSDCBera,
        chains: [ChainId.BeraTest],
        icon: baseURL + 'stgusdc.png',
        contracts: {
            [ChainId.BeraTest]: {
                address: '0x6581e59a1c8da66ed0d313a0d4029dce2f746cc5', 
                decimal: 18,
            },
        },
    },
    {
        name: "Honey Token",
        symbol: TokenSymbol.STGUSDCBera,
        chains: [ChainId.BeraTest],
        icon: baseURL + 'honey.png',
        contracts: {
            [ChainId.BeraTest]: {
                address: '0x7eeca4205ff31f947edbd49195a7a88e6a91161b', 
                decimal: 18,
            },
        },
    },
]
