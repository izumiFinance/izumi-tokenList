import { TokenSymbol } from "../symbols/tokenKlaytn";
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
        name: "Klaytn Token",
        symbol: TokenSymbol.KLAYKlaytn,
        icon: baseURL + 'klaytn.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0x19Aac5f612f524B754CA7e7c41cbFa2E981A4432',  //WKLAY
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped KLAY",
        symbol: TokenSymbol.WKLAYKlaytn,
        icon: baseURL + 'klaytn.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0x19Aac5f612f524B754CA7e7c41cbFa2E981A4432', 
                decimal: 18,
            },
        },
    },
    {
        name: "USD Coin",
        symbol: TokenSymbol.USDCKlaytn,
        icon: baseURL + 'usdcklaytn.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0x608792deb376cce1c9fa4d0e6b7b44f507cffa6a', 
                decimal: 6,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDTKlaytn,
        icon: baseURL + 'usdtklaytn.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0x5c13e303a62fc5dedf5b52d66873f2e59fedadc2', 
                decimal: 6,
            },
        },
    },
    {
        name: "KKUL THE PARROT",
        symbol: TokenSymbol.KKULPKlaytn,
        icon: baseURL + 'kkulp.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0x0f58d0abaae2f586b0d3b6d045305463e89ba603', 
                decimal: 18,
            },
        },
    },
    {
        name: "Bridged USDC (Stargate)",
        symbol: TokenSymbol.USDCSTARKlaytn,
        icon: baseURL + 'usdcstar.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0xe2053bcf56d2030d2470fb454574237cf9ee3d4b', 
                decimal: 6,
            },
        },
    },
    {
        name: "Tether USD (Stargate)",
        symbol: TokenSymbol.USDTSTARKlaytn,
        icon: baseURL + 'usdtstar.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0x9025095263d1e548dc890a7589a4c78038ac40ab', 
                decimal: 6,
            },
        },
    },
    {
        name: "Wrapped ETH (Stargate)",
        symbol: TokenSymbol.WETHSTARKlaytn,
        icon: baseURL + 'wethstar.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0x55acee547df909cf844e32dd66ee55a6f81dc71b', 
                decimal: 18,
            },
        },
    },
    {
        name: "Merlin BTC",
        symbol: TokenSymbol.MBTCKlaytn,
        icon: baseURL + 'mbtc.svg',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0x0f921c39efd98809fe6d20a88a4357454578987a',
                decimal: 18,
            },
        },
    },
    {
        name: "Kkakdugi",
        symbol: TokenSymbol.KKAKKlaytn,
        icon: baseURL + 'kkak.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0xe3f85b41a284ed965826adc98365e70e67a2f556', 
                decimal: 18,
            },
        },
    },
    {
        name: "KkakDog",
        symbol: TokenSymbol.KKAKKDOGlaytn,
        icon: baseURL + 'kkakdog.svg',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0x1afa932f90bf84cce04116d3370165acd7257cc5', 
                decimal: 18,
            },
        },
    },
    {
        name: "Birds Ping",
        symbol: TokenSymbol.PINGKlaytn,
        icon: baseURL + 'ping.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0x608e8512d31cae43cd8058d81e6b56203a112539', 
                decimal: 18,
            },
        },
    },
    {
        name: "Multa Ping",
        symbol: TokenSymbol.MPINGKlaytn,
        icon: baseURL + 'mping.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0x8882ec400e9348ff60ae85d3d90a93cf97ce8869', 
                decimal: 18,
            },
        },
    },
    {
        name: "Seryuk Ping",
        symbol: TokenSymbol.KPINGKlaytn,
        icon: baseURL + 'kping.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0x4cad05f5afdd4bfc072e356e88b05c33316bb1c5', 
                decimal: 18,
            },
        },
    },
    {
        name: "Drum Ping",
        symbol: TokenSymbol.DPINGKlaytn,
        icon: baseURL + 'dping.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0xb242cb981952c183421e4ac9b0d4861c27d9dc73', 
                decimal: 18,
            },
        },
    },
    {
        name: "PER Project",
        symbol: TokenSymbol.PERKlaytn,
        icon: baseURL + 'per.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0x7eee60a000986e9efe7f5c90340738558c24317b', 
                decimal: 18,
            },
        },
    },
]
