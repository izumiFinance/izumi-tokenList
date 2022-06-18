import { TokenSymbol } from "../symbols/tokenSymbol";
import { ChainId } from "../chainId";

export interface TokenInfo {
    chains: number[];
    name: string;
    symbol: TokenSymbol,
    icon: string;
    contracts: Partial<Record<ChainId, { address: string; decimal: number }>>;
}

export const tokens: TokenInfo[] = [
    {
        name: 'iZUMi Token',
        symbol: TokenSymbol.IZI,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/izumi.svg',
        chains: [ChainId.Izumi, ChainId.EthereumMainnet, ChainId.Matic, ChainId.Arbitrum, ChainId.BSC],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0x9ad37205d608B8b219e6a2573f922094CEc5c200',
                decimal: 18,
            },
            [ChainId.Matic]: {
                address: '0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747',
                decimal: 18,
            },
            [ChainId.Izumi]: {
                address: '0xEe5e3852434eB67F8e9E97015e32845861ea15E8',
                decimal: 18,
            },
            [ChainId.Arbitrum]: {
                address: '0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747',
                decimal: 18,
            },
            [ChainId.BSC]: {
                address: '0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747',
                decimal: 18,
            },
        },
    },
    {
        name: "iZUMi Bond USD",
        symbol: TokenSymbol.IUSD,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/iusd.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D',
                decimal: 18,
            },
        },
    },
    {
        name: 'USD Coin',
        symbol: TokenSymbol.USDC,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/usdc.png',
        chains: [
            ChainId.BSC,
            ChainId.Heco,
            ChainId.Matic,
            ChainId.Fantom,
            ChainId.Izumi,
            ChainId.Harmony,
        ],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
                decimal: 6,
            },
            [ChainId.Optimism]: {
                address: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
                decimal: 6,
            },
            [ChainId.BSC]: {
                address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
                decimal: 18,
            },
            [ChainId.Heco]: {
                address: '0x9362bbef4b8313a8aa9f0c9808b80577aa26b73b',
                decimal: 6,
            },
            [ChainId.Matic]: {
                address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
                decimal: 6,
            },
            [ChainId.Fantom]: {
                address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
                decimal: 6,
            },
            [ChainId.Izumi]: {
                address: '0xe507AAC9eFb2A08F53C7BC73B3B1b8BCf883E41B',
                decimal: 6,
            },
            [ChainId.Arbitrum]: {
                address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
                decimal: 6,
            },
            [ChainId.Harmony]: {
                address: '0x985458e523db3d53125813ed68c274899e9dfab4',
                decimal: 6,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDT,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/usdt.png',
        chains: [ChainId.Izumi, ChainId.EthereumMainnet, ChainId.Arbitrum, ChainId.Matic, ChainId.BSC],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
                decimal: 6,
            },
            [ChainId.Izumi]: {
                address: '0x2d2bA91b026E08e0f23Eb01d7ecAb0e7E279a45f',
                decimal: 6,
            },
            [ChainId.Arbitrum]: {
                address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
                decimal: 6,
            },
            [ChainId.Matic]: {
                address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
                decimal: 6,
            },
            [ChainId.BSC]: {
                address: '0x55d398326f99059fF775485246999027B3197955',
                decimal: 18,
            },
        },
    },
    {
        name: "Binance-Peg BUSD Token",
        symbol: TokenSymbol.BUSD,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/busd.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
                decimal: 18,
            },
        },
    },
    {
        name: "BNB",
        symbol: TokenSymbol.BNB,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/bnb.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', //Wrapped BNB
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped BNB",
        symbol: TokenSymbol.WBNB,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/bnb.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 
                decimal: 18,
            },
        },
    },

    {
        name: "Binance-Peg Bitcoin BEP2",
        symbol: TokenSymbol.BTCB,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/btc.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 
                decimal: 18,
            },
        },
    },

    {
        name: "Binance-Peg Ethereum Token",
        symbol: TokenSymbol.ETH,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/eth.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', 
                decimal: 18,
            },
        },
    },

    // {
    //     name: "Dogecoin Token",
    //     symbol: TokenSymbol.DOGE,
    //     icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/doge.png',
    //     chains: [ChainId.BSC],
    //     contracts: {
    //         [ChainId.BSC]: {
    //             address: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
    //             decimal: 8,
    //         },
    //     },
    // },
    // {
    //     name: "SHIBA INU Token",
    //     symbol: TokenSymbol.SHIB,
    //     icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/shib.png',
    //     chains: [ChainId.BSC],
    //     contracts: {
    //         [ChainId.BSC]: {
    //             address: '0x2859e4544C4bB03966803b044A93563Bd2D0DD4D',
    //             decimal: 18,
    //         },
    //     },
    // },
]
