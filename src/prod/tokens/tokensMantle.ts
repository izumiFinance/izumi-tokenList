import { TokenSymbol } from "../symbols/tokenMantle";
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
        name: "Mantle Token",
        symbol: TokenSymbol.MNTMANTLE,
        icon: baseURL + 'mnt.png',
        chains: [ChainId.Mantle],
        contracts: {
            [ChainId.Mantle]: {
                address: '0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8',  // WMNT
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped MNT",
        symbol: TokenSymbol.WMNTMANTLE,
        icon: baseURL + 'mnt.png',
        chains: [ChainId.Mantle],
        contracts: {
            [ChainId.Mantle]: {
                address: '0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8',  
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped Ether",
        symbol: TokenSymbol.WETHMANTLE,
        icon: baseURL + 'weth.png',
        chains: [ChainId.Mantle],
        contracts: {
            [ChainId.Mantle]: {
                address: '0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111',  
                decimal: 18,
            },
        },
    },
    {
        name: "Tether",
        symbol: TokenSymbol.USDTMANTLE,
        icon: baseURL + 'usdt.png',
        chains: [ChainId.Mantle],
        contracts: {
            [ChainId.Mantle]: {
                address: '0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE',  
                decimal: 6,
            },
        },
    },
]