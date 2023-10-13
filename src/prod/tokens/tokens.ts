import { TokenSymbol } from "../symbols/tokenSymbol";
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
        name: "Arctic Token",
        symbol: TokenSymbol.ARC,
        chains: [ChainId.Aurora],
        icon: baseURL + 'arc.png',
        contracts: {
            [ChainId.Aurora]: {
                address: '0xBCD4e5E349Cc2810830E94f7fFEa4BD6b04c5978',
                decimal: 18,
            },
        },
    },
    {
        name: "Aurora Token",
        symbol: TokenSymbol.AURORA,
        chains: [ChainId.Aurora],
        icon: baseURL + 'aurora.png',
        contracts: {
            [ChainId.Aurora]: {
                address: '0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79',
                decimal: 18,
            },
        },
    },
    {
        name: "Ether Classic",
        symbol: TokenSymbol.ETC,
        chains: [ChainId.ETC],
        icon: baseURL + 'etc.png',
        contracts: {
            [ChainId.ETC]: {
                address: '0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a',
                decimal: 18, // WETC
            },
        },
    },
    {
        name: "Wrapped Ether Classic",
        symbol: TokenSymbol.WETC,
        chains: [ChainId.ETC],
        icon: baseURL + 'etc.png',
        contracts: {
            [ChainId.ETC]: {
                address: '0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a',
                decimal: 18,
            },
        },
    },
    {
        name: 'iZUMi Token',
        symbol: TokenSymbol.IZI,
        icon: baseURL + 'izumi.svg',
        chains: [ChainId.EthereumMainnet, ChainId.Matic, ChainId.Arbitrum, ChainId.BSC, ChainId.Aurora, ChainId.ETC, 
                 ChainId.Cronos, ChainId.ZkSyncEra, ChainId.Linea, ChainId.Mantle,
                 ChainId.Base],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0x9ad37205d608B8b219e6a2573f922094CEc5c200',
                decimal: 18,
            },
            [ChainId.Matic]: {
                address: '0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747',
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
            [ChainId.Aurora]: {
                address: '0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747',
                decimal: 18,
            },
            [ChainId.ETC]: {
                address: '0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747',
                decimal: 18,
            },
            [ChainId.Cronos]: {
                address: '0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747',
                decimal: 18,
            },
            [ChainId.ZkSyncEra]: {
                address: '0x16A9494e257703797D747540f01683952547EE5b',
                decimal: 18,
            },
            [ChainId.Linea]: {
                address: '0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747',
                decimal: 18,
            },
            [ChainId.Mantle]: {
                address: '0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747',
                decimal: 18,
            },
            [ChainId.Base]: {
                address: '0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747',
                decimal: 18,
            },
        },
    },
    {
        name: "iZUMi Bond USD",
        symbol: TokenSymbol.IUSD,
        icon: baseURL + 'iusd.png',
        chains: [ChainId.EthereumMainnet, ChainId.BSC, ChainId.Aurora, ChainId.ETC, ChainId.Arbitrum, 
                 ChainId.ZkSyncEra, ChainId.Linea, ChainId.Mantle, ChainId.Base],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D',
                decimal: 18,
            },
            [ChainId.BSC]: {
                address: '0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D',
                decimal: 18,
            },
            [ChainId.Aurora]: {
                address: '0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D',
                decimal: 18,
            },
            [ChainId.ETC]: {
                address: '0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D',
                decimal: 18,
            },
            [ChainId.Arbitrum]: {
                address: '0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D',
                decimal: 18,
            },
            [ChainId.ZkSyncEra]: {
                address: '0x1382628e018010035999A1FF330447a0751aa84f',
                decimal: 18,
            },
            [ChainId.Linea]: {
                address: '0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D',
                decimal: 18,
            },
            [ChainId.Mantle]: {
                address: '0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D',
                decimal: 18,
            },
            [ChainId.Base]: {
                address: '0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D',
                decimal: 18,
            },
        },
    },
    {
        name: 'USD Coin',
        symbol: TokenSymbol.USDC,
        icon: baseURL + 'usdc.png',
        chains: [
            ChainId.EthereumMainnet,
            ChainId.BSC,
            ChainId.Heco,
            ChainId.Matic,
            ChainId.Fantom,
            ChainId.Harmony,
            ChainId.Aurora,
            ChainId.Cronos,
            ChainId.Arbitrum,
            ChainId.ZkSyncEra,
            ChainId.Optimism,
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
            [ChainId.Arbitrum]: {
                address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
                decimal: 6,
            },
            [ChainId.Harmony]: {
                address: '0x985458e523db3d53125813ed68c274899e9dfab4',
                decimal: 6,
            },
            [ChainId.Aurora]: {
                address: '0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
                decimal: 6,
            },
            [ChainId.Cronos]: {
                address: '0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
                decimal: 6,
            },
            [ChainId.ZkSyncEra]: {
                address: '0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4',
                decimal: 6,
            },
            [ChainId.Optimism]: {
                address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
                decimal: 6,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDT,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/usdt.png',
        chains: [
            ChainId.EthereumMainnet, 
            ChainId.ZkSyncEra,
            ChainId.Arbitrum, ChainId.Matic, ChainId.BSC, ChainId.Aurora, ChainId.Cronos, ChainId.Icplaza, ChainId.Conflux, ChainId.TELOS, ChainId.Ontology, ChainId.Optimism],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
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
            [ChainId.Aurora]: {
                address: '0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
                decimal: 6,
            },
            [ChainId.Cronos]: {
                address: '0x66e428c3f67a68878562e79A0234c1F83c208770',
                decimal: 6,
            },
            [ChainId.Icplaza]: {
                address: '0x334A4801C21Bc279a63cB80E703E4da704057C13',
                decimal: 18,
            },
            [ChainId.Conflux]: {
                address: '0xfe97e85d13abd9c1c33384e796f10b73905637ce',
                decimal: 18,
            },
            [ChainId.TELOS]: {
                address: '0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73',
                decimal: 18,
            },
            [ChainId.Ontology]: {
                address: '0x72b0f5612802d473a13716db71a0348bcf631d98',
                decimal: 6,
            },
            [ChainId.Optimism]: {
                address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
                decimal: 6,
            },
            [ChainId.ZkSyncEra]: {
                address: '0x493257fD37EDB34451f62EDf8D2a0C418852bA4C',
                decimal: 6,
            },
        },
    },
    {
        name: "Binance-Peg BUSD Token",
        symbol: TokenSymbol.BUSD,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/busd.png',
        chains: [ChainId.BSC, ChainId.ZkSyncEra],
        contracts: {
            [ChainId.BSC]: {
                address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
                decimal: 18,
            },
            [ChainId.ZkSyncEra]: {
                address: '0x2039bb4116B4EFc145Ec4f0e2eA75012D6C0f181',
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
        name: "Arbitrum Token",
        symbol: TokenSymbol.ARB,
        icon: baseURL + 'arb.svg',
        chains: [ChainId.Arbitrum],
        contracts: {
            [ChainId.Arbitrum]: {
                address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped BTC",
        symbol: TokenSymbol.WBTC,
        icon: baseURL + 'WBTC.png',
        chains: [ChainId.EthereumMainnet, ChainId.Aurora, ChainId.Cronos, ChainId.Matic, ChainId.Arbitrum, ChainId.ZkSyncEra],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
                decimal: 8,
            },
            [ChainId.Aurora]: {
                address: '0xF4eB217Ba2454613b15dBdea6e5f22276410e89e',
                decimal: 8,
            },
            [ChainId.Cronos]: {
                address: '0x062E66477Faf219F25D27dCED647BF57C3107d52',
                decimal: 8,
            },
            [ChainId.Matic]: {
                address: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
                decimal: 8,
            },
            [ChainId.Arbitrum]: {
                address: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
                decimal: 8,
            },
            [ChainId.ZkSyncEra]: {
                address: '0xBBeB516fb02a01611cBBE0453Fe3c580D7281011',
                decimal: 8,
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
        name: "Ether",
        symbol: TokenSymbol.ETH,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/eth.png',
        chains: [ChainId.EthereumMainnet, ChainId.BSC, ChainId.Aurora, ChainId.Arbitrum, ChainId.ZkSyncEra, ChainId.Linea, ChainId.Base, ChainId.Optimism],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',  //weth
                decimal: 18,
            },
            [ChainId.BSC]: {
                address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
                decimal: 18,
            },
            [ChainId.Aurora]: {
                address: '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',  //weth
                decimal: 18,
            },
            [ChainId.Arbitrum]: {
                address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',  //weth
                decimal: 18,
            },
            [ChainId.ZkSyncEra]: {
                address: '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91',  //weth
                decimal: 18,
            },
            [ChainId.Linea]: {
                address: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',  //weth
                decimal: 18,
            },
            [ChainId.Base]: {
                address: '0x4200000000000000000000000000000000000006',  //weth
                decimal: 18,
            },
            [ChainId.Optimism]: {
                address: '0x4200000000000000000000000000000000000006',
                decimal: 18,
            }, // WETH on Optimism
        },
    },
    {
        name: "NEAR Token",
        symbol: TokenSymbol.NEAR,
        icon: baseURL + 'near.png',
        chains: [ChainId.Aurora],
        contracts: {
            [ChainId.Aurora]: {
                address: '0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d',
                decimal: 24,
            },
        },
    },
    {
        name: "Dai Stablecoin",
        symbol: TokenSymbol.DAI,
        icon: baseURL + 'dai.png',
        chains: [ChainId.EthereumMainnet, ChainId.Aurora],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
                decimal: 18,
            },
            [ChainId.Aurora]: {
                address: '0xe3520349F477A5F6EB06107066048508498A291b',
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped Ether",
        symbol: TokenSymbol.WETH,
        icon: baseURL + 'WETH.png',
        chains: [ChainId.EthereumMainnet, ChainId.Aurora, ChainId.Cronos, ChainId.Matic, ChainId.Arbitrum, ChainId.ZkSyncEra, ChainId.Linea, ChainId.Base, ChainId.Optimism],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                decimal: 18,
            },
            [ChainId.Aurora]: {
                address: '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
                decimal: 18,
            },
            [ChainId.Cronos]: {
                address: '0xe44Fd7fCb2b1581822D0c862B68222998a0c299a',
                decimal: 18,
            },
            [ChainId.Matic]: {
                address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
                decimal: 18,
            },
            [ChainId.Arbitrum]: {
                address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
                decimal: 18,
            },
            [ChainId.ZkSyncEra]: {
                address: '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91',
                decimal: 18,
            },
            [ChainId.Linea]: {
                address: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
                decimal: 18,
            },
            [ChainId.Base]: {
                address: '0x4200000000000000000000000000000000000006',
                decimal: 18,
            },
            [ChainId.Optimism]: {
                address: '0x4200000000000000000000000000000000000006',
                decimal: 18,
            }, // WETH on Optimism
        },
    },
    {
        name: "Bit Dao",
        symbol: TokenSymbol.BIT,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/bit.png',
        chains: [ChainId.EthereumMainnet],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0x1a4b46696b2bb4794eb3d4c26f1c55f9170fa4c5',
                decimal: 18,
            },
        },
    },
    {
        name: "Dogecoin Token",
        symbol: TokenSymbol.DOGE,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/doge.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
                decimal: 8,
            },
        },
    },
    {
        name: "Green Metaverse Token",
        symbol: TokenSymbol.GMT,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/gmt.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x3019BF2a2eF8040C242C9a4c5c4BD4C81678b2A1',
                decimal: 8,
            },
        },
    },
    {
        name: "Milo Inu",
        symbol: TokenSymbol.MILO,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/milo.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xd9dE2B1973E57Dc9DBA90c35d6Cd940ae4A3CBe1',
                decimal: 9,
            },
        },
    },
    {
        name: "PancakeSwap Token",
        symbol: TokenSymbol.CAKE,
        icon: baseURL + 'cake.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
                decimal: 18,
            },
        },
    },
    {
        name: "Solana Token",
        symbol: TokenSymbol.SOL,
        icon: baseURL + 'sol.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x570A5D26f7765Ecb712C0924E4De545B89fD43dF',
                decimal: 18,
            },
        },
    },
    {
        name: "Space ID",
        symbol: TokenSymbol.ID,
        icon: baseURL + 'id.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x2dfF88A56767223A5529eA5960Da7A3F5f766406',
                decimal: 18,
            },
        },
    },
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
