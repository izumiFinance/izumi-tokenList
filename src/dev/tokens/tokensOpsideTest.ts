import { TokenSymbol } from "../symbols/tokenOpsideTest";
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
        name: "Opside token",
        symbol: TokenSymbol.IDE,
        chains: [ChainId.OpsideTest],
        icon: baseURL + 'ide.png',
        contracts: {
            [ChainId.OpsideTest]: {
                address: '0xD2Af4C638d9AF34405CDD6403F853Acb0774efe3', //WIDE
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped IDE",
        symbol: TokenSymbol.WIDE,
        chains: [ChainId.OpsideTest],
        icon: baseURL + 'ide.png',
        contracts: {
            [ChainId.OpsideTest]: {
                address: '0xD2Af4C638d9AF34405CDD6403F853Acb0774efe3', 
                decimal: 18,
            },
        },
    },
]
