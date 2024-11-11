import { TokenSymbol } from "../symbols/tokenMode";
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
        name: "Mode Token",
        symbol: TokenSymbol.MODEMode,
        icon: baseURL + 'mode.png',
        chains: [ChainId.Mode],
        contracts: {
            [ChainId.Mode]: {
                address: '0xDfc7C877a950e49D2610114102175A06C2e3167a',
                decimal: 18,
            },
        },
    },
    {
        name: "Merlin BTC",
        symbol: TokenSymbol.MBTCMode,
        icon: baseURL + 'mbtc.svg',
        chains: [ChainId.Mode],
        contracts: {
            [ChainId.Mode]: {
                address: '0x59889b7021243dB5B1e065385F918316cD90D46c',
                decimal: 18,
            },
        },
    },
    {
        name: "Universal BTC",
        symbol: TokenSymbol.UNIBTCMode,
        icon: baseURL + 'unibtc.png',
        chains: [ChainId.Mode],
        contracts: {
            [ChainId.Mode]: {
                address: '0x6B2a01A5f79dEb4c2f3c0eDa7b01DF456FbD726a',
                decimal: 8,
            },
        },
    },
    {
        name: "Renzo Restaked ETH",
        symbol: TokenSymbol.EZETHMode,
        icon: baseURL + 'ezeth.png',
        chains: [ChainId.Mode],
        contracts: {
            [ChainId.Mode]: {
                address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped eETH",
        symbol: TokenSymbol.WEETHMODEMode,
        icon: baseURL + 'weeth.png',
        chains: [ChainId.Mode],
        contracts: {
            [ChainId.Mode]: {
                address: '0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A',
                decimal: 18,
            },
        },
    },
]
