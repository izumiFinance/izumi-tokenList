import { TokenSymbol } from "../symbols/tokenDuckchainTest";
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
        name: "TON Token",
        symbol: TokenSymbol.TONDuckchain,
        chains: [ChainId.DuckchainTestnet],
        icon: baseURL + 'ton.png',
        contracts: {
            [ChainId.DuckchainTestnet]: {
                address: '0x1eE5eDC5Fe498a2dD82862746D674DB2a5e7fef6', // wton
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped TON",
        symbol: TokenSymbol.WTONDuckchain,
        chains: [ChainId.DuckchainTestnet],
        icon: baseURL + 'ton.png',
        contracts: {
            [ChainId.DuckchainTestnet]: {
                address: '0x1eE5eDC5Fe498a2dD82862746D674DB2a5e7fef6', 
                decimal: 18,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDTDuckchain,
        chains: [ChainId.DuckchainTestnet],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.DuckchainTestnet]: {
                address: '0xb0453a1bAf6056393897e60dfd851C61A825ef67', 
                decimal: 18,
            },
        },
    },
]
