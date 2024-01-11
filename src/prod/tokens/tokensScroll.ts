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
                decimal: 18,
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
                decimal: 18,
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
    {
        name: "Aave Token",
        symbol: TokenSymbol.AAVEScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'aave.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0x79379C0E09a41d7978f883a56246290eE9a8c4d3',
                decimal: 18,
            },
        },
    },
    {
        name: "Balancer Token",
        symbol: TokenSymbol.BALScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'bal.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0x6a28e90582c583fcd3347931c544819C31e9D0e0',
                decimal: 18,
            },
        },
    },
    {
        name: "Curve DAO",
        symbol: TokenSymbol.CRVScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'crv.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0xB755039eDc7910C1F1BD985D48322E55A31AC0bF',
                decimal: 18,
            },
        },
    },
    {
        name: "Kyber Network Crystal",
        symbol: TokenSymbol.KNCScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'knc.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0x608ef9A3BffE206B86c3108218003b3cfBf99c84',
                decimal: 18,
            },
        },
    },
    {
        name: "Gho Token",
        symbol: TokenSymbol.GHOScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'gho.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0xD9692f1748aFEe00FACE2da35242417dd05a8615',
                decimal: 18,
            },
        },
    },
    {
        name: "LayerBank Token",
        symbol: TokenSymbol.LABScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'labs.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0x2A00647F45047f05BDed961Eb8ECABc42780e604',
                decimal: 18,
            },
        },
    },
    {
        name: "Axelar Wrapped USDC",
        symbol: TokenSymbol.AXLUSDC,
        chains: [ChainId.Scroll],
        icon: baseURL + 'axlusdc.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
                decimal: 6,
            },
        },
    },
    {
        name: "Skydrome Token",
        symbol: TokenSymbol.SKYScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'sky.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0x95a52EC1d60e74CD3Eb002fE54A2c74b185A4C16',
                decimal: 18,
            },
        },
    },
    {
        name: "Scrolly The Map",
        symbol: TokenSymbol.SCROLLYScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'scrolly.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0xb65aD8d81d1E4Cb2975352338805AF6e39BA8Be8',
                decimal: 18,
            },
        },
    },
    {
        name: "Danjuan Cat",
        symbol: TokenSymbol.CATScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'cat.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0xdd6a49995ad38fe7409b5d5cb5539261bd1bc901',
                decimal: 18,
            },
        },
    },
    {
        name: "蛋卷",
        symbol: TokenSymbol.EGGROLLScroll,
        chains: [ChainId.Scroll],
        icon: baseURL + 'eggroll.png',
        contracts: {
            [ChainId.Scroll]: {
                address: '0x3275fa3a5e244a17b16a9867ebf5e0f9e5d9fcd0',
                decimal: 18,
            },
        },
    },
]
