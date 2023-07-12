import { TokenSymbol } from "../symbols/tokenLineaTest";
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
        symbol: TokenSymbol.ETHLinea,
        chains: [ChainId.LineaTest],
        icon: baseURL + 'eth.png',
        contracts: {
            [ChainId.LineaTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', //WETH
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped ETH",
        symbol: TokenSymbol.WETHLinea,
        chains: [ChainId.LineaTest],
        icon: baseURL + 'WETH.png',
        contracts: {
            [ChainId.LineaTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',
                decimal: 18,
            },
        },
    },
    {
        name: "USDC (official bridge)",
        symbol: TokenSymbol.USDCLinea,
        chains: [ChainId.LineaTest],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.LineaTest]: {
                address: '0xf56dc6695cF1f5c364eDEbC7Dc7077ac9B586068',
                decimal: 6,
            },
        },
    },
    // {
    //     name: "USDC (native token)",
    //     symbol: TokenSymbol.USDCNative,
    //     chains: [ChainId.LineaTest],
    //     icon: baseURL + 'usdc.png',
    //     contracts: {
    //         [ChainId.LineaTest]: {
    //             address: '0x6a7436775c0d0B70cfF4c5365404ec37c9d9aF4b',
    //             decimal: 18,
    //         },
    //     },
    // },
    {
        name: "USDT (official bridge)",
        symbol: TokenSymbol.USDTLinea,
        chains: [ChainId.LineaTest],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.LineaTest]: {
                address: '0x1990BC6dfe2ef605Bfc08f5A23564dB75642Ad73',
                decimal: 6,
            },
        },
    },
    // {
    //     name: "USDT (native token)",
    //     symbol: TokenSymbol.USDTNative,
    //     chains: [ChainId.LineaTest],
    //     icon: baseURL + 'usdt.png',
    //     contracts: {
    //         [ChainId.LineaTest]: {
    //             address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
    //             decimal: 18,
    //         },
    //     },
    // },
    {
        name: "DAI (official bridge)",
        symbol: TokenSymbol.DAILinea,
        chains: [ChainId.LineaTest],
        icon: baseURL + 'dai.png',
        contracts: {
            [ChainId.LineaTest]: {
                address: '0x8741Ba6225A6BF91f9D73531A98A89807857a2B3',
                decimal: 18,
            },
        },
    },
    {
        name: "UNI (official bridge)",
        symbol: TokenSymbol.UNILinea,
        chains: [ChainId.LineaTest],
        icon: baseURL + 'uni.png',
        contracts: {
            [ChainId.LineaTest]: {
                address: '0x7823E8DCC8bfc23EA3AC899EB86921f90e80F499',
                decimal: 18,
            },
        },
    },
    {
        name: "HOP (official bridge)",
        symbol: TokenSymbol.HOPLinea,
        chains: [ChainId.LineaTest],
        icon: baseURL + 'hop.png',
        contracts: {
            [ChainId.LineaTest]: {
                address: '0x6F03052743CD99ce1b29265E377e320CD24Eb632',
                decimal: 18,
            },
        },
    },
    {
        name: "BNB (official bridge)",
        symbol: TokenSymbol.BNBLinea,
        chains: [ChainId.LineaTest],
        icon: baseURL + 'bnb.png',
        contracts: {
            [ChainId.LineaTest]: {
                address: '0x5471ea8f739dd37E9B81Be9c5c77754D8AA953E4',
                decimal: 18,
            },
        },
    },
    {
        name: "BUSD (official bridge)",
        symbol: TokenSymbol.BUSDLinea,
        chains: [ChainId.LineaTest],
        icon: baseURL + 'busd.png',
        contracts: {
            [ChainId.LineaTest]: {
                address: '0x7d43AABC515C356145049227CeE54B608342c0ad',
                decimal: 18,
            },
        },
    },
    {
        name: "MATIC (official bridge)",
        symbol: TokenSymbol.MATICLinea,
        chains: [ChainId.LineaTest],
        icon: baseURL + 'matic.png',
        contracts: {
            [ChainId.LineaTest]: {
                address: '0xcAA61BCAe7D37Fe9C33c0D8671448254eef44D63',
                decimal: 18,
            },
        },
    },
]
