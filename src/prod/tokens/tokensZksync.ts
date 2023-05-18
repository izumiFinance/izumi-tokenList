import { TokenSymbol } from "../symbols/tokenZksync";
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
        name: "Dogera Token",
        symbol: TokenSymbol.DOGERA,
        icon: baseURL + 'dogera.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0xA59af353E423F54D47F2Ce5F85e3e265d95282Cd', 
                decimal: 18,
            },
        },
    },
    {
        name: "Bolt Token",
        symbol: TokenSymbol.BOLT,
        icon: baseURL + 'bolt.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x61B41e0244133B9c9c47A57e51a5EF70be2c5DD4', 
                decimal: 18,
            },
        },
    },
    {
        name: "Cheems",
        symbol: TokenSymbol.CHEEMS,
        icon: baseURL + 'cheems.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0xd599dA85F8Fc4877e61f547dFAcffe1238A7149E', 
                decimal: 18,
            },
        },
    },
    {
        name: "Shared-liquidity USDT",
        symbol: TokenSymbol.SLUSDT,
        icon: baseURL + 'usdt.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x496d88D1EFc3E145b7c12d53B78Ce5E7eda7a42c', 
                decimal: 18,
            },
        },
    },
    {
        name: "Shared-liquidity stETH",
        symbol: TokenSymbol.SLSTETH,
        icon: baseURL + 'steth.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x32440D79446E25E90Ff4DEE5807B61D759c8d264', 
                decimal: 18,
            },
        },
    },
    {
        name: "Shared-liquidity BTC",
        symbol: TokenSymbol.SLBTC,
        icon: baseURL + 'btc.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0xbf6F47970276bcbB4E0Ec9dcFd27b16F68b78E74', 
                decimal: 18,
            },
        },
    },
    {
        name: "ZKSP token",
        symbol: TokenSymbol.ZKSP,
        icon: baseURL + 'zksp.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x7eCf006f7c45149B457e9116392279CC8A630F14', 
                decimal: 18,
            },
        },
    },
    {
        name: "DEXTF token",
        symbol: TokenSymbol.DEXTF,
        icon: baseURL + 'dextf.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x9929bCAC4417A21d7e6FC86F6Dae1Cc7f27A2e41', 
                decimal: 18,
            },
        },
    },
    {
        name: "ReactorFusion",
        symbol: TokenSymbol.RF,
        icon: baseURL + 'rf.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x5f7CBcb391d33988DAD74D6Fd683AadDA1123E4D', 
                decimal: 18,
            },
        },
    },
    {
        name: "zkApes token",
        symbol: TokenSymbol.ZAT,
        icon: baseURL + 'zat.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x47EF4A5641992A72CFd57b9406c9D9cefEE8e0C4', 
                decimal: 18,
            },
        },
    },
    {
        name: "GeJuToken token",
        symbol: TokenSymbol.GEJU,
        icon: baseURL + 'geju.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x98141754F0148A34F59f46744503eDB1A2b1e29D', 
                decimal: 18,
            },
        },
    },
    {
        name: "veSync token",
        symbol: TokenSymbol.VS,
        icon: baseURL + 'vs.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x5756A28E2aAe01F600FC2C01358395F5C1f8ad3A', 
                decimal: 18,
            },
        },
    },
    {
        name: "OT token",
        symbol: TokenSymbol.OT,
        icon: baseURL + 'ot.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0xD0eA21ba66B67bE636De1EC4bd9696EB8C61e9AA', 
                decimal: 18,
            },
        },
    },
    {
        name: "SpaceFi token",
        symbol: TokenSymbol.SPACE,
        icon: baseURL + 'space.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x47260090cE5e83454d5f05A0AbbB2C953835f777', 
                decimal: 18,
            },
        },
    },
]
