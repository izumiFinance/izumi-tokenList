import { TokenSymbol } from "../symbols/tokenEXPchainTest";
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
        name: "tZKJ",
        symbol: TokenSymbol.TZKJEXPchainTest,
        chains: [ChainId.EXPchainTest],
        icon: baseURL + 'tZKJ.png',
        contracts: {
            [ChainId.EXPchainTest]: {
                address: '0x1eE5eDC5Fe498a2dD82862746D674DB2a5e7fef6', // wtzkj
                decimal: 18,
            },
        },
    },
    {
        name: "wrapped tZKJ",
        symbol: TokenSymbol.WTZKJEXPchainTest,
        chains: [ChainId.EXPchainTest],
        icon: baseURL + 'tZKJ.png',
        contracts: {
            [ChainId.EXPchainTest]: {
                address: '0x1eE5eDC5Fe498a2dD82862746D674DB2a5e7fef6', 
                decimal: 18,
            },
        },
    },
]
