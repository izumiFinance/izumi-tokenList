import { TokenSymbol } from "../symbols/tokenZKFair";
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
        name: "USD Coin",
        symbol: TokenSymbol.USDCZKFair,
        chains: [ChainId.ZKFair],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.ZKFair]: {
                address: '0xD33Db7EC50A98164cC865dfaa64666906d79319C',
                decimal: 18, //wUSDC
            },
        },
    },
    {
        name: "Wrapped USDC",
        symbol: TokenSymbol.WUSDCZKFair,
        chains: [ChainId.ZKFair],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.ZKFair]: {
                address: '0xD33Db7EC50A98164cC865dfaa64666906d79319C',
                decimal: 18, //wUSDC
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDTZKFair,
        chains: [ChainId.ZKFair],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.ZKFair]: {
                address: '0x3f97bf3Cd76B5cA9D4A4E9cD8a73C24E32d6C193',
                decimal: 6, 
            },
        },
    },
    {
        name: "Ethers",
        symbol: TokenSymbol.ETHZKFair,
        chains: [ChainId.ZKFair],
        icon: baseURL + 'eth.png',
        contracts: {
            [ChainId.ZKFair]: {
                address: '0x4b21b980d0Dc7D3C0C6175b0A412694F3A1c7c6b',
                decimal: 18, 
            },
        },
    },
    {
        name: "ZKFair token",
        symbol: TokenSymbol.ZKFZKFair,
        chains: [ChainId.ZKFair],
        icon: baseURL + 'zkf.png',
        contracts: {
            [ChainId.ZKFair]: {
                address: '0x1cd3e2a23c45a690a18ed93fd1412543f464158f',
                decimal: 18, 
            },
        },
    },
    {
        name: "Fair Inu",
        symbol: TokenSymbol.FAIRZKFair,
        chains: [ChainId.ZKFair],
        icon: baseURL + 'fair.png',
        contracts: {
            [ChainId.ZKFair]: {
                address: '0x450C29E6E799efECc6811954F47756af602D7930',
                decimal: 18, 
            },
        },
    },
    {
        name: "FLON token",
        symbol: TokenSymbol.FLONZKFair,
        chains: [ChainId.ZKFair],
        icon: baseURL + 'flon.png',
        contracts: {
            [ChainId.ZKFair]: {
                address: '0xA111328a3dc9650f07653944EE2e2a88c10C2ad8',
                decimal: 18, 
            },
        },
    },
]
