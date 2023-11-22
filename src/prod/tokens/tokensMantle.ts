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
        name: "USD Coin",
        symbol: TokenSymbol.USDCMANTLE,
        icon: baseURL + 'usdc.png',
        chains: [ChainId.Mantle],
        contracts: {
            [ChainId.Mantle]: {
                address: '0x09bc4e0d864854c6afb6eb9a9cdf58ac190d0df9',  
                decimal: 6,
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
    {
        name: "Ondo U.S. Dollar Yield",
        symbol: TokenSymbol.USDYMantle,
        icon: baseURL + 'usdy.png',
        chains: [ChainId.Mantle],
        contracts: {
            [ChainId.Mantle]: {
                address: '0x5bE26527e817998A7206475496fDE1E68957c5A6',  
                decimal: 18,
            },
        },
    },
    {
        name: "mETH",
        symbol: TokenSymbol.METHMantle,
        icon: baseURL + 'meth.png',
        chains: [ChainId.Mantle],
        contracts: {
            [ChainId.Mantle]: {
                address: '0xcDA86A272531e8640cD7F1a92c01839911B90bb0',  
                decimal: 18,
            },
        },
    },
    {
        name: "Mantle Inu Token",
        symbol: TokenSymbol.MINUMantle,
        icon: baseURL + 'minu.png',
        chains: [ChainId.Mantle],
        contracts: {
            [ChainId.Mantle]: {
                address: '0x51cfe5b1E764dC253F4c8C1f19a081fF4C3517eD',  
                decimal: 18,
            },
        },
    },
    {
        name: "Lendle Protocol Token",
        symbol: TokenSymbol.LENDMantle,
        icon: baseURL + 'lend.png',
        chains: [ChainId.Mantle],
        contracts: {
            [ChainId.Mantle]: {
                address: '0x25356aeca4210eF7553140edb9b8026089E49396',  
                decimal: 18,
            },
        },
    },
    {
        name: "Cashtree Token",
        symbol: TokenSymbol.CTTMantle,
        icon: baseURL + 'ctt.png',
        chains: [ChainId.Mantle],
        contracts: {
            [ChainId.Mantle]: {
                address: '0x6A3b0eb5b57C9a4F5772fc900dAE427E65f8C1a5',  
                decimal: 18,
            },
        },
    },
    {
        name: "Bella",
        symbol: TokenSymbol.BELMantle,
        icon: baseURL + 'bel.png',
        chains: [ChainId.Mantle],
        contracts: {
            [ChainId.Mantle]: {
                address: '0x3390108E913824B8eaD638444cc52B9aBdF63798',  
                decimal: 18,
            },
        },
    },
    {
        name: "Axelar Token",
        symbol: TokenSymbol.AXLMantle,
        icon: baseURL + 'axl.png',
        chains: [ChainId.Mantle],
        contracts: {
            [ChainId.Mantle]: {
                address: '0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f',  
                decimal: 6,
            },
        },
    },
]