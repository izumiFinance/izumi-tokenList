import { TokenSymbol } from "../symbols/tokenOntology";
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
        name: "Wrapped ONT",
        symbol: TokenSymbol.WONT,
        icon: baseURL + 'wont.png',
        chains: [ChainId.Ontology],
        contracts: {
            [ChainId.Ontology]: {
                address: '0x219cc8e994ea6b35cdcffb5d44e229325d5ad02a', 
                decimal: 9,
            },
        },
    },
    {
        name: "Ontology Gas Token",
        symbol: TokenSymbol.ONG,
        icon: baseURL + 'ong.png',
        chains: [ChainId.Ontology],
        contracts: {
            [ChainId.Ontology]: {
                address: '0xd8bc24cfd45452ef2c8bc7618e32330b61f2691b', //WONG
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped ONG",
        symbol: TokenSymbol.WONG,
        icon: baseURL + 'wong.png',
        chains: [ChainId.Ontology],
        contracts: {
            [ChainId.Ontology]: {
                address: '0xd8bc24cfd45452ef2c8bc7618e32330b61f2691b',
                decimal: 18,
            },
        },
    },
    {
        name: "WING token",
        symbol: TokenSymbol.WING,
        icon: baseURL + 'wing.png',
        chains: [ChainId.Ontology],
        contracts: {
            [ChainId.Ontology]: {
                address: '0x6ea9f7B81bdEB047d63A023b1F28Bea481a5785a',
                decimal: 9,
            },
        },
    },
]
