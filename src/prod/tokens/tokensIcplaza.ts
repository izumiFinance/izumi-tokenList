import { TokenSymbol } from "../symbols/tokenIcplaza";
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
        name: "Icplaza Token",
        symbol: TokenSymbol.ICT,
        icon: baseURL + 'ict.png',
        chains: [ChainId.Icplaza],
        contracts: {
            [ChainId.Icplaza]: {
                address: '0xc59d478873d11CCc68F9c63571E821a253c5B605', // WICT
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped ICT",
        symbol: TokenSymbol.WICT,
        icon: baseURL + 'ict.png',
        chains: [ChainId.Icplaza],
        contracts: {
            [ChainId.Icplaza]: {
                address: '0xc59d478873d11CCc68F9c63571E821a253c5B605', 
                decimal: 18,
            },
        },
    },
    {
        name: "BICT",
        symbol: TokenSymbol.BICT,
        icon: baseURL + 'ict.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x93Ac66639D295332762bdCBf223194f16E84Cc70', 
                decimal: 18,
            },
        },
    },
]
