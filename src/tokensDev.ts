import { TokenSymbol } from "./tokenSymbol";
import { ChainId } from "./chainId";

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
        chains: [ChainId.Izumi],
        contracts: {
            [ChainId.Izumi]: {
                address: '0xEe5e3852434eB67F8e9E97015e32845861ea15E8',
                decimal: 18,
            },
        },
    },
    {
        name: 'USD Coin',
        symbol: TokenSymbol.USDC,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/usdc.png',
        chains: [ChainId.Izumi],
        contracts: {
            [ChainId.Izumi]: {
                address: '0xe507AAC9eFb2A08F53C7BC73B3B1b8BCf883E41B',
                decimal: 6,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDT,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/usdt.png',
        chains: [ChainId.Izumi],
        contracts: {
            [ChainId.Izumi]: {
                address: '0x2d2bA91b026E08e0f23Eb01d7ecAb0e7E279a45f',
                decimal: 6,
            },
        },
    },
    {
        name: 'DAI',
        chains: [ChainId.Izumi],
        symbol: TokenSymbol.DAI,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/dai.png',
        contracts: {
            [ChainId.Izumi]: {
                address: '0xA97f8bc2b98a56f648340e05406cc7E34bB25D3A',
                decimal: 6,
            },
        },
    },
    {
        name: 'Wrapped Ether',
        symbol: TokenSymbol.WETH,
        chains: [ChainId.Izumi],
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/eth.png',
        contracts: {
            [ChainId.Izumi]: {
                address: '0x72328EB80d99147A48BA5d05B54D6d19dA655A01',
                decimal: 18,
            },
        },
    },
    {
        name: "BIT Dao",
        symbol: TokenSymbol.BIT,
        chains: [ChainId.Izumi],
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/bit.png',
        contracts: {
            [ChainId.Izumi]: {
                address: '0x41BC21bdcF0FA87ae6eeFcBE0e4dB29dB2b650C1',
                decimal: 18,
            },
        },
    },
    {
        name: "Decentralized Eternal Virtual Traveller",
        symbol: TokenSymbol.DEVT,
        chains: [ChainId.Izumi],
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/devt.png',
        contracts: {
            [ChainId.Izumi]: {
                address: '0xD93FfD9B4d5D643A175B7DcBf4Fb0dA0016D35C7',
                decimal: 18,
            },
        },
    },
    {
        name: "YIN Finance",
        symbol: TokenSymbol.YIN,
        chains: [ChainId.Izumi],
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/yin.png',
        contracts: {
            [ChainId.Izumi]: {
                address: '0x628571078add0031Ff6E9975AE6ddE1123fC423b',
                decimal: 18,
            },
        },
    }
]
