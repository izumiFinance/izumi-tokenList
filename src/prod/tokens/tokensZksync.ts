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
        name: 'Bridged USD Coin',
        symbol: TokenSymbol.USDCBRIDGE,
        icon: baseURL + 'usdc.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4',
                decimal: 6,
            },
        },
    },
    {
        name: 'USDC (Circle native)',
        symbol: TokenSymbol.USDCNATIVE,
        icon: baseURL + 'usdc.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4',
                decimal: 6,
            },
        },
    },
    {
        name: 'ZkSync Token',
        symbol: TokenSymbol.ZKZKsync,
        icon: baseURL + 'zk.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x5A7d6b2F92C77FAD6CCaBd7EE0624E64907Eaf3E',
                decimal: 18,
            },
        },
    },
    {
        name: 'USDLR by Stable',
        symbol: TokenSymbol.USDLR,
        icon: baseURL + 'usdlr.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0xb6841b40BAAFEdF4e37935270357FF89dF42e68E',
                decimal: 6,
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
        name: "Cheems (new)",
        symbol: TokenSymbol.CHEEMS2,
        icon: baseURL + 'cheems.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x9Db6BF8B0215A02BEA9beF28A92D829FD008D480',
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
    {
        name: "X SpaceFi token",
        symbol: TokenSymbol.XSPACE,
        icon: baseURL + 'space.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x6aF43486Cb84bE0e3EDdCef93d3C43Ef0C5F63b1',
                decimal: 18,
            },
        },
    },
    {
        name: "ERA token",
        symbol: TokenSymbol.ERA,
        icon: baseURL + 'zkera.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0xecd9f240ed3895c77db676004328dd1d246f33c9',
                decimal: 18,
            },
        },
    },
    {
        name: "Bladedao",
        symbol: TokenSymbol.BLADE,
        icon: baseURL + 'blade.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x591CAdFaF2F5dBBD09580C8b74A4770A9255bF28',
                decimal: 18,
            },
        },
    },
    {
        name: "ZNS token",
        symbol: TokenSymbol.ZNS,
        icon: baseURL + 'zns.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x5B1635b7E74e004166Ace90f4f70f983824FFe1a',
                decimal: 18,
            },
        },
    },
    {
        name: "esZKDX token",
        symbol: TokenSymbol.ESZKDX,
        icon: baseURL + 'eszkdx.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0xE9d81b108cF6062607BCD888C745fb67e9d5eFcd',
                decimal: 18,
            },
        },
    },
    {
        name: "LSD token",
        symbol: TokenSymbol.LSD,
        icon: baseURL + 'lsd.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x458A2E32eAbc7626187E6b75f29D7030a5202bD4',
                decimal: 18,
            },
        },
    },
    {
        name: "Good Games Guild",
        symbol: TokenSymbol.GGG,
        icon: baseURL + 'ggg.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x7E2A6456Bb3eCEcbdb38bC76Ad8dF9e448B15835',
                decimal: 18,
            },
        },
    },
    {
        name: "zkSwap Token",
        symbol: TokenSymbol.ZKS,
        icon: baseURL + 'zks.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0xAbdb137D013b8B328FA43Fc04a6fA340D1CeA733',
                decimal: 18,
            },
        },
    },
    {
        name: "zkSync Hydroxyl Token",
        symbol: TokenSymbol.ZKHYT,
        icon: baseURL + 'hyt.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x5199EfB3D001309cb6a86fad6764F2BFeE282f1c',
                decimal: 18,
            },
        },
    },
    {
        name: "zkSync Meta Interstellar Token",
        symbol: TokenSymbol.ZKMIT,
        icon: baseURL + 'mit.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0xB7183e52a6f2D97a675B0e9CBB08Eb01a700D6d3',
                decimal: 18,
            },
        },
    },
    {
        name: "Maverick Token",
        symbol: TokenSymbol.MAV,
        icon: baseURL + 'mav.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x787c09494Ec8Bcb24DcAf8659E7d5D69979eE508',
                decimal: 18,
            },
        },
    },
    {
        name: "zkUSD Dollar",
        symbol: TokenSymbol.ZKUSD,
        icon: baseURL + 'zkusd.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0xfC7E56298657B002b3e656400E746b7212912757',
                decimal: 6,
            },
        },
    },
    {
        name: 'SpiralFi Token',
        symbol: TokenSymbol.SPIRAL,
        icon: baseURL + 'spiral.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0xe161a60da0943dad69affe0249b7f623c518337b',
                decimal: 18,
            },
        },
    },
    {
        name: 'Rocket Pool ETh',
        symbol: TokenSymbol.RETH,
        icon: baseURL + 'reth.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0x32Fd44bB869620C0EF993754c8a00Be67C464806',
                decimal: 18,
            },
        },
    },
    {
        name: 'SolarCoin on Mainnet',
        symbol: TokenSymbol.SLR,
        icon: baseURL + 'slr.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0xE027D939f7dE6F521675907Cf086F59E4D75B876',
                decimal: 18,
            },
        },
    },
    {
        name: 'Bella Token',
        symbol: TokenSymbol.BEL,
        icon: baseURL + 'bel.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0xB83CFB285fc8D936E8647FA9b1cC641dBAae92D9',
                decimal: 18,
            },
        },
    },
    {
        name: 'Holdstation',
        symbol: TokenSymbol.HOLD,
        icon: baseURL + 'hold.png',
        chains: [ChainId.ZkSyncEra],
        contracts: {
            [ChainId.ZkSyncEra]: {
                address: '0xed4040fD47629e7c8FBB7DA76bb50B3e7695F0f2',
                decimal: 18,
            },
        },
    },
]
