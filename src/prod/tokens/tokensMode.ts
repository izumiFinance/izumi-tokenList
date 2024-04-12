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
]
