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
        name: "Ether Classic",
        symbol: TokenSymbol.ETC,
        chains: [ChainId.ETC],
        icon: baseURL + 'etc.png',
        contracts: {
            [ChainId.ETC]: {
                address: '0x82A618305706B14e7bcf2592D4B9324A366b6dAd',
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
                address: '0x82A618305706B14e7bcf2592D4B9324A366b6dAd',
                decimal: 18,
            },
        },
    },
    {
        name: 'iZUMi Token',
        symbol: TokenSymbol.IZI,
        icon: baseURL + 'izumi.svg',
        chains: [ChainId.EthereumMainnet, ChainId.Matic, ChainId.Arbitrum, ChainId.BSC, 
                 //ChainId.ETC, 
                 ChainId.ZkSyncEra, ChainId.Linea, ChainId.Mantle,
                 ChainId.Base, ChainId.Scroll, ChainId.Manta, ChainId.Kroma, ChainId.Zeta],
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
            // [ChainId.ETC]: {
            //     address: '0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747',
            //     decimal: 18,
            // },
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
            [ChainId.Scroll]: {
                address: '0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747',
                decimal: 18,
            },
            [ChainId.Manta]: {
                address: '0x91647632245caBf3d66121F86C387aE0ad295F9A',
                decimal: 18,
            },
            [ChainId.Kroma]: {
                address: '0x57b5284ba55a1170b4d3e5c0d4fa22bac893b291',
                decimal: 18,
            },
            [ChainId.Zeta]: {
                address: '0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747',
                decimal: 18,
            },
        },
    },
    {
        name: "iZUMi Bond USD",
        symbol: TokenSymbol.IUSD,
        icon: baseURL + 'iusd.png',
        chains: [
                 ChainId.EthereumMainnet, ChainId.BSC, 
                 ChainId.ETC, 
                 ChainId.Arbitrum, 
                 ChainId.ZkSyncEra, 
                 ChainId.Linea, 
                 ChainId.Mantle, 
                 ChainId.Base, 
                 ChainId.Scroll, 
                 ChainId.Manta, 
                 ChainId.Blast,
                 ChainId.Klaytn
                ],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D',
                decimal: 18,
            },
            [ChainId.BSC]: {
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
            [ChainId.Scroll]: {
                address: '0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D',
                decimal: 18,
            },
            [ChainId.Manta]: {
                address: '0x078f712f038a95beea94f036cadb49188a90604b',
                decimal: 18,
            },
            [ChainId.Blast]: {
                address: '0x0A3BB08b3a15A19b4De82F8AcFc862606FB69A2D',
                decimal: 18,
            },
            [ChainId.Klaytn]: {
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
            ChainId.Arbitrum,
            ChainId.Optimism,
            ChainId.Mode,
            ChainId.XLayer,
            ChainId.Cyber,
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
            [ChainId.Mode]: {
                address: '0xd988097fb8612cc24eeC14542bC03424c656005f',
                decimal: 6,
            },
            [ChainId.XLayer]: {
                address: '0x74b7f16337b8972027f6196a17a631ac6de26d22',
                decimal: 6,
            },
            [ChainId.Cyber]: {
                address: '0x81759AdbF5520aD94da10991DfA29Ff147d3337b',
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
            ChainId.Arbitrum, 
            ChainId.Matic, 
            ChainId.BSC, 
            ChainId.Ontology, 
            ChainId.Optimism,
            ChainId.Mode,
            ChainId.XLayer,
            ChainId.Cyber,
            ChainId.BOB,
        ],
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
            [ChainId.Mode]: {
                address: '0xf0F161fDA2712DB8b566946122a5af183995e2eD',
                decimal: 6,
            },
            [ChainId.XLayer]: {
                address: '0x1E4a5963aBFD975d8c9021ce480b42188849D41d',
                decimal: 6,
            },
            [ChainId.Cyber]: {
                address: '0x6F6238c8eaea56F54Df418823585d61FDD7DE5Da',
                decimal: 6,
            },
            [ChainId.BOB]: {
                address: '0x05D032ac25d322df992303dCa074EE7392C117b9',
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
        chains: [
            ChainId.EthereumMainnet, ChainId.Matic, ChainId.Arbitrum, ChainId.ZkSyncEra, ChainId.XLayer,
            ChainId.BOB,
            ChainId.Mode,
        ],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
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
            [ChainId.XLayer]: {
                address: '0xEA034fb02eB1808C2cc3adbC15f447B93CbE08e1',
                decimal: 8,
            },
            [ChainId.BOB]: {
                address: '0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3',
                decimal: 8,
            },
            [ChainId.Mode]: {
                address: '0xcDd475325D6F564d27247D1DddBb0DAc6fA0a5CF',
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
        chains: [
            ChainId.EthereumMainnet, 
            ChainId.BSC, 
            ChainId.Arbitrum, 
            ChainId.ZkSyncEra, 
            ChainId.Linea, 
            ChainId.Base, 
            ChainId.Optimism, 
            ChainId.Zklink, 
            ChainId.Mode,
            ChainId.Cyber,
            ChainId.BOB,
        ],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',  //weth
                decimal: 18,
            },
            [ChainId.BSC]: {
                address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
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
            [ChainId.Zklink]: {
                address: '0x8280a4e7D5B3B658ec4580d3Bc30f5e50454F169', //weth
                decimal: 18,
            }, 
            [ChainId.Mode]: {
                address: '0x4200000000000000000000000000000000000006',  //weth
                decimal: 18,
            }, 
            [ChainId.Cyber]: {
                address: '0x4200000000000000000000000000000000000006',  //weth
                decimal: 18,
            }, 
            [ChainId.BOB]: {
                address: '0x4200000000000000000000000000000000000006',  //weth
                decimal: 18,
            }, 
        },
    },
    {
        name: "Dai Stablecoin",
        symbol: TokenSymbol.DAI,
        icon: baseURL + 'dai.png',
        chains: [ChainId.EthereumMainnet, ChainId.XLayer, ChainId.BOB, ChainId.Linea, ChainId.ZkSyncEra],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
                decimal: 18,
            },
            [ChainId.XLayer]: {
                address: '0xC5015b9d9161Dca7e18e32f6f25C4aD850731Fd4',
                decimal: 18,
            },
            [ChainId.BOB]: {
                address: '0x6c851F501a3F24E29A8E39a29591cddf09369080',
                decimal: 18,
            },
            [ChainId.Linea]: {
                address: '0x4af15ec2a0bd43db75dd04e62faa3b8ef36b00d5',
                decimal: 18,
            },
            [ChainId.ZkSyncEra]: {
                address: '0x4b9eb6c0b6ea15176bbf62841c6b2a8a398cb656',
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped Ether",
        symbol: TokenSymbol.WETH,
        icon: baseURL + 'WETH.png',
        chains: [
            ChainId.EthereumMainnet, 
            ChainId.Matic, 
            ChainId.Arbitrum, 
            ChainId.ZkSyncEra, 
            ChainId.Linea, 
            ChainId.Base, 
            ChainId.Optimism, 
            ChainId.Zklink,
            ChainId.Mode,
            ChainId.XLayer,
            ChainId.Cyber,
            ChainId.BOB,
        ],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
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
            [ChainId.Zklink]: {
                address: '0x8280a4e7D5B3B658ec4580d3Bc30f5e50454F169', 
                decimal: 18,
            }, 
            [ChainId.Mode]: {
                address: '0x4200000000000000000000000000000000000006', 
                decimal: 18,
            }, 
            [ChainId.XLayer]: {
                address: '0x5A77f1443D16ee5761d310e38b62f77f726bC71c',
                decimal: 18,
            }, 
            [ChainId.Cyber]: {
                address: '0x4200000000000000000000000000000000000006',  
                decimal: 18,
            }, 
            [ChainId.BOB]: {
                address: '0x4200000000000000000000000000000000000006',  
                decimal: 18,
            }, 
        },
    },
    {
        name: "Wrapped liquid staked Ether 2.0",
        symbol: TokenSymbol.wstETH,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/wsteth.png',
        chains: [ChainId.Linea,ChainId.Scroll],
        contracts: {
            [ChainId.Linea]: {
                address: '0xb5bedd42000b71fdde22d3ee8a79bd49a568fc8f',
                decimal: 18,
            },
            [ChainId.Scroll]: {
                address: '0x2Bbbdf97295F73175b12CC087cF446765931e1C3',
                decimal: 18,
            },
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
]
