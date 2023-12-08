import { TokenSymbol } from "../symbols/tokenBSC";
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
        name: 'Tiny Coin',
        symbol: TokenSymbol.TINC,
        icon: baseURL + 'TINC.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x05aD6E30A855BE07AfA57e08a4f30d00810a402e',
                decimal: 18,
            },
        },
    },
    {
        name: "ChiChaCoin",
        symbol: TokenSymbol.CCC,
        icon: baseURL + 'ccc.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x383268691ee31c68489b19b8f2d7003ec504d534', 
                decimal: 18,
            },
        },
    },
    {
        name: "Arbipad",
        symbol: TokenSymbol.ARBIBSC,
        icon: baseURL + 'arbi.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xa7bD657C5838472dDF85FF0797A2e6fce8fd4833', 
                decimal: 18,
            },
        },
    },
    {
        name: 'TokenPocket Token',
        symbol: TokenSymbol.TPT,
        icon: baseURL + 'TPT.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xECa41281c24451168a37211F0bc2b8645AF45092',
                decimal: 4,
            },
        },
    },
    {
        name: 'BurgerCities',
        symbol: TokenSymbol.BURGER,
        icon: baseURL + 'burger.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f',
                decimal: 18,
            },
        },
    },
    {
        name: 'Metazodiac Token',
        symbol: TokenSymbol.MW,
        icon: baseURL + 'MW.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x154d746794449B6CF534FA11A2Cf7FfF5C968977',
                decimal: 18,
            },
        },
    },
    {
        name: 'Shield',
        symbol: TokenSymbol.SLD,
        icon: baseURL + 'sld.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x1ef6A7e2c966fb7C5403EFEFdE38338b1a95a084',
                decimal: 18,
            },
        },
    },
    {
        name: 'KillSwitch Token',
        symbol: TokenSymbol.KSW,
        icon: baseURL + 'KSW.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x270178366a592bA598C2e9d2971DA65f7bAa7C86',
                decimal: 18,
            },
        },
    },
    {
        name: 'Froyo Token',
        symbol: TokenSymbol.FROYO,
        icon: baseURL + 'froyo.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xe369fec23380f9F14ffD07a1DC4b7c1a9fdD81c9',
                decimal: 18,
            },
        },
    },
    {
        name: 'Nebulas Token',
        symbol: TokenSymbol.NAS,
        icon: baseURL + 'nas.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x2E1F3D4cB35980F6339C006e64AC3a555dB6676d',
                decimal: 18,
            },
        },
    },
    {
        name: 'Jupyter',
        symbol: TokenSymbol.IOM,
        icon: baseURL + 'iom.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xD6ea4ec77fB7e0d5c331F9109f00CcEdE255b9C8',
                decimal: 18,
            },
        },
    },
    {
        name: 'Zero Verse Coin',
        symbol: TokenSymbol.ZVC,
        icon: baseURL + 'ZVC.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x8f76907B173FBf65ddd84A86519C8767a90b8B90',
                decimal: 9,
            },
        },
    },
    {
        name: 'Liquid Staking BNB',
        symbol: TokenSymbol.BNBX,
        icon: baseURL + 'bnbx.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x1bdd3Cf7F79cfB8EdbB955f20ad99211551BA275',
                decimal: 18,
            },
        },
    },
    {
        name: 'Stader Token',
        symbol: TokenSymbol.SD,
        icon: baseURL + 'sd.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x3BC5AC0dFdC871B365d159f728dd1B9A0B5481E8',
                decimal: 18,
            },
        },
    },
    {
        name: 'Ankr Token',
        symbol: TokenSymbol.ANKR,
        icon: baseURL + 'ankr.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xf307910A4c7bbc79691fD374889b36d8531B08e3',
                decimal: 18,
            },
        },
    },
    {
        name: 'Ankr Staked BNB',
        symbol: TokenSymbol.ANKRBNB,
        icon: baseURL + 'abnbc.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x52F24a5e03aee338Da5fd9Df68D2b6FAe1178827',
                decimal: 18,
            },
        },
    },
    {
        name: 'INFIBLUE WORLD',
        symbol: TokenSymbol.MONIE,
        icon: baseURL + 'monie.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x7E60C74b9096f8FA6fb5a9FD88405dED8B7D44f3',
                decimal: 18,
            },
        },
    },
    {
        name: 'Great Resilient Incentive',
        symbol: TokenSymbol.GRI,
        icon: baseURL + 'gri.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xD767713e787Cb351e4daFb777DD93d54f5381D29',
                decimal: 8,
            },
        },
    },
    {
        name: 'Volt Inu',
        symbol: TokenSymbol.VOLT,
        icon: baseURL + 'volt.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x7db5af2B9624e1b3B4Bb69D6DeBd9aD1016A58Ac',
                decimal: 9,
            },
        },
    },
    {
        name: 'ZEBEC token',
        symbol: TokenSymbol.ZBC,
        icon: baseURL + 'zbc.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x37a56cdcD83Dce2868f721De58cB3830C44C6303',
                decimal: 9,
            },
        },
    },
    {
        name: 'Wootrade Network',
        symbol: TokenSymbol.WOO,
        icon: baseURL + 'woo.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x4691937a7508860F876c9c0a2a617E7d9E945D4B',
                decimal: 18,
            },
        },
    },
    {
        name: 'Lingose Token',
        symbol: TokenSymbol.LING,
        icon: baseURL + 'ling.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x68c0E798b749183c97239114BB76fd1e5e3DB98C',
                decimal: 18,
            },
        },
    },
    {
        name: 'MAP Protocol',
        symbol: TokenSymbol.MAP,
        icon: baseURL + 'map.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x8105ECe4ce08B6B6449539A5db23e23b973DfA8f',
                decimal: 18,
            },
        },
    },
    {
        name: 'Gameta Diamond',
        symbol: TokenSymbol.GDO,
        icon: baseURL + 'gdo.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x1c37948Cb9fC4a802f91e946CA15df4504c91D03',
                decimal: 18,
            },
        },
    },
    {
        name: 'Meta Interstellar Token',
        symbol: TokenSymbol.MIT,
        icon: baseURL + 'mit.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xe6906717f129427eebade5406de68cadd57aa0c0',
                decimal: 18,
            },
        },
    },
    {
        name: 'Hydroxyl Token',
        symbol: TokenSymbol.HYT,
        icon: baseURL + 'HYT.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xe28c51f4fa57dc44af3691c6f73d1ca578b586be',
                decimal: 18,
            },
        },
    },
    {
        name: 'DegenReborn Token',
        symbol: TokenSymbol.DEGEN,
        icon: baseURL + 'degen.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x1a131F7B106D58f33eAf0fE5B47DB2f2045E5732',
                decimal: 18,
            },
        },
    },
    {
        name: 'HALO token',
        symbol: TokenSymbol.HALO,
        icon: baseURL + 'halo.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xB6b8CCD230Bb4235C7b87986274E7aB550b72261',
                decimal: 18,
            },
        },
    },
    {
        name: 'CyberConnect token',
        symbol: TokenSymbol.CYBERBSC,
        icon: baseURL + 'cyber.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x14778860e937f509e651192a90589de711fb88a9',
                decimal: 18,
            },
        },
    },
    {
        name: 'WOD.AI-BSC',
        symbol: TokenSymbol.WOD,
        icon: baseURL + 'wod.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x7133ced95c468b76175168600590c6260164f74b',
                decimal: 18,
            },
        },
    },
]
