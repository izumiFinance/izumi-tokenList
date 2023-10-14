import { TokenSymbol } from "../symbols/tokenScroll";
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
        symbol: TokenSymbol.ETHScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'eth.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0x5300000000000000000000000000000000000004',
                decimal: 8,
            },
        },
    },
    {
        name: "Wrapped ETH",
        symbol: TokenSymbol.WETHScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'WETH.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0x5300000000000000000000000000000000000004',
                decimal: 8,
            },
        },
    },
    {
        name: "Wrapped BTC",
        symbol: TokenSymbol.WBTCScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'WBTC.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0x3C1BCa5a656e69edCD0D4E36BEbb3FcDAcA60Cf1',
                decimal: 8,
            },
        },
    },
    {
        name: "USD Coin",
        symbol: TokenSymbol.USDCScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4',
                decimal: 6,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDTScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df',
                decimal: 6,
            },
        },
    },
    {
        name: "Uniswap token",
        symbol: TokenSymbol.UNIScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'uni.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0x434cdA25E8a2CA5D9c1C449a8Cb6bCbF719233E8',
                decimal: 18,
            },
        },
    },
    {
        name: "Pancakeswap token",
        symbol: TokenSymbol.CAKEScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'cake.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0xF613F403C2887aa473b46252da3AA5D6a6084b15',
                decimal: 18,
            },
        },
    },
    {
        name: "Liquity USD",
        symbol: TokenSymbol.LUSDScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'lusd.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0xeDEAbc3A1e7D21fE835FFA6f83a710c70BB1a051',
                decimal: 18,
            },
        },
    },
    {
        name: "DAI stable coin",
        symbol: TokenSymbol.DAIScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'dai.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0xcA77eB3fEFe3725Dc33bccB54eDEFc3D9f764f97',
                decimal: 18,
            },
        },
    },
    {
        name: "Rocket Pool ETH",
        symbol: TokenSymbol.RETHScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'reth.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0x53878B874283351D26d206FA512aEcE1Bef6C0dD',
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped stETH",
        symbol: TokenSymbol.WSTETHScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'steth.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32',
                decimal: 18,
            },
        },
    },
]
