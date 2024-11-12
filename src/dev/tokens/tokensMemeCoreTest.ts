import { TokenSymbol } from "../symbols/tokenMemeCoreTest";
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
        name: "M Token",
        symbol: TokenSymbol.MMemeCoreTest,
        chains: [ChainId.MemeCoreTest],
        icon: baseURL + 'memecore.png',
        contracts: {
            [ChainId.MemeCoreTest]: {
                address: '0x1eE5eDC5Fe498a2dD82862746D674DB2a5e7fef6',  //WM
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped M Token",
        symbol: TokenSymbol.WMMemeCoreTest,
        chains: [ChainId.MemeCoreTest],
        icon: baseURL + 'memecore.png',
        contracts: {
            [ChainId.MemeCoreTest]: {
                address: '0x1eE5eDC5Fe498a2dD82862746D674DB2a5e7fef6',  //WM
                decimal: 18,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDTMemeCoreTest,
        chains: [ChainId.MemeCoreTest],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.MemeCoreTest]: {
                address: '0xb0453a1bAf6056393897e60dfd851C61A825ef67',
                decimal: 18,
            },
        },
    },
]
