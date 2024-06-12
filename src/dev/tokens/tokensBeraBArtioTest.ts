import { TokenSymbol } from "../symbols/tokenBeraBArtioTest";
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
        symbol: TokenSymbol.BERABArtioBera,
        chains: [ChainId.BERABArtioBeraTest],
        icon: baseURL + 'bera.png',
        contracts: {
            [ChainId.BERABArtioBeraTest]: {
                address: '0x7507c1dc16935B82698e4C63f2746A2fCf994dF8', // wbera
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped Bera",
        symbol: TokenSymbol.WBERABartioBera,
        chains: [ChainId.BERABArtioBeraTest],
        icon: baseURL + 'bera.png',
        contracts: {
            [ChainId.BERABArtioBeraTest]: {
                address: '0x7507c1dc16935B82698e4C63f2746A2fCf994dF8', 
                decimal: 18,
            },
        },
    },
]
