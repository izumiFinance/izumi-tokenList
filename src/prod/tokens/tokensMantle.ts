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
    {
        name: "LUSD Stablecoin",
        symbol: TokenSymbol.LUSDMANTLE,
        icon: baseURL + 'lusd.png',
        chains: [ChainId.Mantle],
        contracts: {
            [ChainId.Mantle]: {
                address: '0xf93a85d53e4aF0D62bdf3A83CCFc1EcF3EAf9F32',  
                decimal: 18,
            },
        },
    },
    {
        name: "Pendle Token",
        symbol: TokenSymbol.LUSDMANTLE,
        icon: baseURL + 'pendle.png',
        chains: [ChainId.Mantle],
        contracts: {
            [ChainId.Mantle]: {
                address: '0xd27B18915e7acc8FD6Ac75DB6766a80f8D2f5729',  
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped BTC",
        symbol: TokenSymbol.WBTCMANTLE,
        icon: baseURL + 'wbtc.png',
        chains: [ChainId.Mantle],
        contracts: {
            [ChainId.Mantle]: {
                address: '0xCAbAE6f6Ea1ecaB08Ad02fE02ce9A44F09aebfA2',  
                decimal: 8,
            },
        },
    },
    {
        name: "Wrapped liquid staked Ether 2.0",
        symbol: TokenSymbol.WSTETHMANTLE,
        icon: baseURL + 'steth.png',
        chains: [ChainId.Mantle],
        contracts: {
            [ChainId.Mantle]: {
                address: '0x636D4073738C071326Aa70c9e5DB7C334bEb87bE',  
                decimal: 18,
            },
        },
    },
]