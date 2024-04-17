import { TokenSymbol } from "../symbols/tokenAINNL2";
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
        name: "Bitcoin",
        symbol: TokenSymbol.BTCAINN,
        chains: [ChainId.AINNL2],
        icon: baseURL + 'btc.png',
        contracts: {
            [ChainId.AINNL2]: {
                address: '0x1470a4831F76954686BfB4dE8180F7469EA8dE6F', //WBTC
                decimal: 18,
            },
        },
    },
    {
        name: "AINN Layer2 BTC",
        symbol: TokenSymbol.ABTCAINN,
        chains: [ChainId.AINNL2],
        icon: baseURL + 'btc.png',
        contracts: {
            [ChainId.AINNL2]: {
                address: '0x1470a4831F76954686BfB4dE8180F7469EA8dE6F', 
                decimal: 18,
            },
        },
    },
    {
        name: "iZUMi Bond USD",
        symbol: TokenSymbol.IUSDAINN,
        chains: [ChainId.AINNL2],
        icon: baseURL + 'iusd.png',
        contracts: {
            [ChainId.AINNL2]: {
                address: '0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D', 
                decimal: 18,
            },
        },
    },
    {
        name: "AINN Token",
        symbol: TokenSymbol.AINNAINN,
        chains: [ChainId.AINNL2],
        icon: baseURL + 'ainn.png',
        contracts: {
            [ChainId.AINNL2]: {
                address: '0xc5ed6c946cdc82f4599f0f2f012e1822502e70e3', 
                decimal: 18,
            },
        },
    },

]
