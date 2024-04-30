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
        name: "Ontology Gas",
        symbol: TokenSymbol.ONG,
        chains: [ChainId.OntologyTest],
        icon: baseURL + 'ong.png',
        contracts: {
            [ChainId.OntologyTest]: {
                address: '0xe8cf015f797877a9a23e80447429c0b0f04e114b', //WONG
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped ONG",
        symbol: TokenSymbol.WONG,
        chains: [ChainId.OntologyTest],
        icon: baseURL + 'ong.png',
        contracts: {
            [ChainId.OntologyTest]: {
                address: '0xe8cf015f797877a9a23e80447429c0b0f04e114b',
                decimal: 18,
            },
        },
    },
    {
        name: "Rollux Syscoin Token",
        symbol: TokenSymbol.RSYS,
        chains: [ChainId.RolluxBedrockTest],
        icon: baseURL + 'sys.png',
        contracts: {
            [ChainId.RolluxBedrockTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', //wrapped rsys
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped Rollux Syscoin Token",
        symbol: TokenSymbol.WRSYS,
        chains: [ChainId.RolluxBedrockTest],
        icon: baseURL + 'sys.png',
        contracts: {
            [ChainId.RolluxBedrockTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',
                decimal: 18,
            },
        },
    },
    {
        name: 'iZUMi Token',
        symbol: TokenSymbol.IZI,
        icon: baseURL + 'izumi.svg',
        chains: [
            ChainId.OpsideRolluxTest,
            ChainId.GasZeroGoerliL2,
            ChainId.ZetaTest,
            ChainId.BSCTestnet, 
            ChainId.ScrollTestnet, 
            ChainId.ZkSyncAlphaTest, 
            ChainId.RolluxBedrockTest, 
            ChainId.MantleTestnet, 
            ChainId.OntologyTest, 
            ChainId.LineaTest, 
            ChainId.MantaTest, 
            ChainId.SkaleTest, 
            ChainId.KromaTest, 
            ChainId.ScrollSepoliaTest,
            ChainId.X1Test,
            ChainId.MantleTest2,
            ChainId.ZklinkNovaTest,
            ChainId.ModeTest,
            ChainId.TaikoHeklaTest,
        ],
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0x551197e6350936976DfFB66B2c3bb15DDB723250',
                decimal: 18,
            },
            [ChainId.MantleTestnet]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 18,
            },
            [ChainId.ScrollTestnet]: {
                address: '0xdB1A8CF7e6d2fa2C0775D090BCc2cfB3A9e00CdC',
                decimal: 18,
            },
            [ChainId.ZkSyncAlphaTest]: {
                address: '0xA5900cce51c45Ab9730039943B3863C822342034',
                decimal: 18,
            },
            [ChainId.RolluxBedrockTest]: {
                address: '0x6a7436775c0d0B70cfF4c5365404ec37c9d9aF4b',
                decimal: 18,
            },
            [ChainId.OntologyTest]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 18,
            },
            [ChainId.LineaTest]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 18,
            },
            [ChainId.OpsideRolluxTest]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 18,
            },
            [ChainId.MantaTest]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 18,
            },
            [ChainId.SkaleTest]: {
                address: '0x551197e6350936976DfFB66B2c3bb15DDB723250',
                decimal: 18,
            },
            [ChainId.KromaTest]: {
                address: '0xEB122DE19FeA9eD039E2d087113db26017f5F91a',
                decimal: 18,
            },
            [ChainId.ScrollSepoliaTest]: {
                address: '0xEB122DE19FeA9eD039E2d087113db26017f5F91a',
                decimal: 18,
            },
            [ChainId.GasZeroGoerliL2]: {
                address: '0x6a7436775c0d0B70cfF4c5365404ec37c9d9aF4b',
                decimal: 18,
            },
            [ChainId.ZetaTest]: {
                address: '0xb0453a1bAf6056393897e60dfd851C61A825ef67',
                decimal: 18,
            },
            [ChainId.X1Test]: {
                address: '0x551197e6350936976DfFB66B2c3bb15DDB723250',
                decimal: 18,
            },
            [ChainId.MantleTest2]: {
                address: '0x551197e6350936976DfFB66B2c3bb15DDB723250',
                decimal: 18,
            },
            [ChainId.ZklinkNovaTest]: {
                address: '0x8474F8D17aAdB2eD1264265781311EFa9381FC87',
                decimal: 18,
            },
            [ChainId.ModeTest]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 18,
            },
            [ChainId.TaikoHeklaTest]: {
                address: '0x6a7436775c0d0B70cfF4c5365404ec37c9d9aF4b',
                decimal: 18,
            },
        },
    },
    {
        name: "iZUMi Bond USD",
        symbol: TokenSymbol.IUSD,
        chains: [ChainId.BSCTestnet,ChainId.ZkSyncAlphaTest, ChainId.OntologyTest],
        icon: baseURL + 'iusd.png',
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0x60FE1bE62fa2082b0897eA87DF8D2CfD45185D30',
                decimal: 18,
            },
            [ChainId.ZkSyncAlphaTest]: {
                address: '0xC0ddcc53b3F971EdeEc65E69D5cb01B518a7F7C8',
                decimal: 18,
            },
            [ChainId.OntologyTest]: {
                address: '0x551197e6350936976DfFB66B2c3bb15DDB723250',
                decimal: 18,
            },
        },
    },
    {
        name: "Binance USD",
        symbol: TokenSymbol.BUSD,
        chains: [ChainId.BSCTestnet],
        icon: baseURL + 'busd.png',
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0xd88972676f5D0997c8150A3d2C4634CbaaDD3396',
                decimal: 18,
            },
        },
    },
    {
        name: 'USD Coin',
        symbol: TokenSymbol.USDC,
        icon: baseURL + 'usdc.png',
        chains: [
            ChainId.OpsideRolluxTest,
            ChainId.BSCTestnet, 
            ChainId.RolluxBedrockTest, 
            ChainId.SkaleTest, 
            ChainId.GasZeroGoerliL2,
            ChainId.X1Test,
        ],
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 6,
            },
            [ChainId.RolluxBedrockTest]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 18,
            },
            [ChainId.OpsideRolluxTest]: {
                address: '0x6a7436775c0d0B70cfF4c5365404ec37c9d9aF4b',
                decimal: 18,
            },
            [ChainId.SkaleTest]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 18,
            },
            [ChainId.GasZeroGoerliL2]: {
                address: '0xb0453a1bAf6056393897e60dfd851C61A825ef67',
                decimal: 18,
            },
            [ChainId.X1Test]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 18,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDT,
        icon: baseURL + 'usdt.png',
        chains: [
            ChainId.OpsideRolluxTest,
            ChainId.ZetaTest,
            ChainId.BSCTestnet, 
            ChainId.ScrollTestnet, 
            ChainId.RolluxBedrockTest, 
            ChainId.MantaTest, ChainId.KromaTest, ChainId.ScrollSepoliaTest, ChainId.GasZeroGoerliL2,
            ChainId.X1Test, ChainId.TaikoTest, ChainId.BlastTest,
            ChainId.MorphTest,
            ChainId.BeraTest,
            ChainId.MantleTest2,
            ChainId.ZklinkNovaTest,
            ChainId.ModeTest,
            ChainId.TaikoHeklaTest,
        ],
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 6,
            },
            [ChainId.MantleTestnet]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 18,
            },
            [ChainId.ScrollTestnet]: {
                address: '0xe9805A0bA7A8E253fd93A3f9b360619c4819da50',
                decimal: 18,
            },
            [ChainId.RolluxBedrockTest]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 18,
            },
            [ChainId.OpsideRolluxTest]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 18,
            },
            [ChainId.MantaTest]: {
                address: '0x6a7436775c0d0B70cfF4c5365404ec37c9d9aF4b',
                decimal: 18,
            },
            [ChainId.KromaTest]: {
                address: '0x551197e6350936976DfFB66B2c3bb15DDB723250',
                decimal: 18,
            },
            [ChainId.ScrollSepoliaTest]: {
                address: '0x551197e6350936976DfFB66B2c3bb15DDB723250',
                decimal: 18,
            },
            [ChainId.GasZeroGoerliL2]: {
                address: '0x2A2E08ea99E63482BDad8Bf69c7b69752F07736F',
                decimal: 18,
            },
            [ChainId.ZetaTest]: {
                address: '0x6a7436775c0d0B70cfF4c5365404ec37c9d9aF4b',
                decimal: 18,
            },
            [ChainId.X1Test]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 18,
            },
            [ChainId.TaikoTest]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 18,
            },
            [ChainId.BlastTest]: {
                address: '0x2A2E08ea99E63482BDad8Bf69c7b69752F07736F',
                decimal: 18,
            },
            [ChainId.MorphTest]: {
                address: '0x551197e6350936976DfFB66B2c3bb15DDB723250',
                decimal: 18,
            },
            [ChainId.BeraTest]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 18,
            },
            [ChainId.MantleTest2]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 18,
            },
            [ChainId.ZklinkNovaTest]: {
                address: '0x9A0C674c7FC173d3680f7b889CBB9a8570C5Ce73',
                decimal: 18,
            },
            [ChainId.ModeTest]: {
                address: '0x551197e6350936976DfFB66B2c3bb15DDB723250',
                decimal: 18,
            },
            [ChainId.TaikoHeklaTest]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 18,
            },
        },
    },
    {
        name: 'Ether',
        symbol: TokenSymbol.ETH,
        chains: [
            ChainId.ScrollTestnet, 
            ChainId.ZkSyncAlphaTest, ChainId.LineaTest, ChainId.MantaTest, 
            ChainId.KromaTest, ChainId.ScrollSepoliaTest, ChainId.BlastTest,
            ChainId.TaikoTest, ChainId.MorphTest, ChainId.ZklinkNovaTest,
            ChainId.ModeTest,
        ],
        icon: baseURL + 'eth.png',
        contracts: {
            [ChainId.ScrollTestnet]: {
                address: '0xCE7fe0A153EF73759d253372b783E12a04849F35', //WETH
                decimal: 18,
            },
            [ChainId.ZkSyncAlphaTest]: {
                address: '0x8C3e3f2983DB650727F3e05B7a7773e4D641537B', //WETH
                decimal: 18,
            },
            [ChainId.LineaTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',  //WETH
                decimal: 18,
            },
            [ChainId.MantaTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', //WETH
                decimal: 18,
            },
            [ChainId.KromaTest]: {
                address: '0x4200000000000000000000000000000000000001', //WETH
                decimal: 18,
            },
            [ChainId.ScrollSepoliaTest]: {
                address: '0xfa6a407c4C49Ea1D46569c1A4Bcf71C3437bE54c', //WETH
                decimal: 18,
            },
            [ChainId.BlastTest]: {
                address: '0xa9754f0D9055d14EB0D2d196E4C51d8B2Ee6f4d3', //WETH
                decimal: 18,
            },
            [ChainId.TaikoTest]: {
                address: '0xC6C7c2edF70A3245ad6051E93809162B9758ce08', //WETH
                decimal: 18,
            },
            [ChainId.MorphTest]: {
                address: '0xC6C7c2edF70A3245ad6051E93809162B9758ce08', //WETH
                decimal: 18,
            },
            [ChainId.ZklinkNovaTest]: {
                address: '0xAec84500e96F90370C55657d08f375A8d05F4D8c', //WETH
                decimal: 18,
            },
            [ChainId.ModeTest]: {
                address: '0xeb72756ee12309Eae82a0deb9787e69f5b62949c', //WETH
                decimal: 18,
            },
        },
    },
    {
        name: 'Wrapped Ether',
        symbol: TokenSymbol.WETH,
        chains: [
            ChainId.ScrollTestnet, ChainId.ZkSyncAlphaTest, 
            ChainId.MantleTestnet, ChainId.LineaTest, ChainId.MantaTest, 
            ChainId.KromaTest, ChainId.ScrollSepoliaTest, ChainId.BlastTest,
            ChainId.TaikoTest, ChainId.MorphTest, ChainId.ZklinkNovaTest,
            ChainId.ModeTest,
        ],
        icon: baseURL + 'WETH.png',
        contracts: {
            [ChainId.ScrollTestnet]: {
                address: '0xCE7fe0A153EF73759d253372b783E12a04849F35',
                decimal: 18,
            },
            [ChainId.ZkSyncAlphaTest]: {
                address: '0x8C3e3f2983DB650727F3e05B7a7773e4D641537B',
                decimal: 18,
            },
            [ChainId.MantleTestnet]: {
                address: '0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111',
                decimal: 18,
            },
            [ChainId.LineaTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',
                decimal: 18,
            },
            [ChainId.MantaTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',
                decimal: 18,
            },
            [ChainId.KromaTest]: {
                address: '0x4200000000000000000000000000000000000001', 
                decimal: 18,
            },
            [ChainId.ScrollSepoliaTest]: {
                address: '0xfa6a407c4C49Ea1D46569c1A4Bcf71C3437bE54c', 
                decimal: 18,
            },
            [ChainId.BlastTest]: {
                address: '0xa9754f0D9055d14EB0D2d196E4C51d8B2Ee6f4d3',
                decimal: 18,
            },
            [ChainId.TaikoTest]: {
                address: '0xC6C7c2edF70A3245ad6051E93809162B9758ce08', 
                decimal: 18,
            },
            [ChainId.MorphTest]: {
                address: '0xC6C7c2edF70A3245ad6051E93809162B9758ce08',
                decimal: 18,
            },
            [ChainId.ZklinkNovaTest]: {
                address: '0xAec84500e96F90370C55657d08f375A8d05F4D8c', 
                decimal: 18,
            },
            [ChainId.ModeTest]: {
                address: '0xeb72756ee12309Eae82a0deb9787e69f5b62949c', 
                decimal: 18,
            },
        },
    },
    {
        name: 'BNB',
        symbol: TokenSymbol.BNB,
        chains: [ChainId.BSCTestnet],
        icon: baseURL + 'bnb.png',
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', //Wrapped BNB
                decimal: 18,
            },
        },
    },
    {
        name: 'Wrapped BNB',
        symbol: TokenSymbol.WBNB,
        chains: [ChainId.BSCTestnet],
        icon: baseURL + 'bnb.png',
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', //Wrapped BNB
                decimal: 18,
            },
        },
    },
    {
        name: "BIT Dao",
        symbol: TokenSymbol.BIT,
        chains: [ChainId.BSCTestnet, ChainId.MantleTestnet],
        icon: baseURL + 'bit.png',
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0xac360dc0F8EF1C94Ab4034220E0A01567acbFdE4',
                decimal: 18,
            },
            [ChainId.MantleTestnet]: {
                address: '0x69AC69b272f96F5f17DDD9da3832ad9Dc86D1d8A', //WBIT
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped BIT",
        symbol: TokenSymbol.WBIT,
        chains: [ChainId.MantleTestnet],
        icon: baseURL + 'bit.png',
        contracts: {
            [ChainId.MantleTestnet]: {
                address: '0x69AC69b272f96F5f17DDD9da3832ad9Dc86D1d8A',
                decimal: 18,
            },
        },
    },
]
