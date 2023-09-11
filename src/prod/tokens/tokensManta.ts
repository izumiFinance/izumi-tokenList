import { TokenSymbol } from "../symbols/tokenManta";
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
        symbol: TokenSymbol.ETHManta,
        icon: baseURL + 'eth.png',
        chains: [ChainId.Manta],
        contracts: {
            [ChainId.Manta]: {
                address: '0x0Dc808adcE2099A9F62AA87D9670745AbA741746',
                decimal: 18,
            }, // WETH
        },
    },
    {
        name: "Wrapped Ethere",
        symbol: TokenSymbol.WETHManta,
        icon: baseURL + 'WETH.png',
        chains: [ChainId.Manta],
        contracts: {
            [ChainId.Manta]: {
                address: '0x0Dc808adcE2099A9F62AA87D9670745AbA741746',
                decimal: 18,
            }, 
        },
    },
]
