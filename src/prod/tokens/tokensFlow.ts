import { TokenSymbol } from "../symbols/tokenFlow";
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
        name: "Flow Token",
        symbol: TokenSymbol.FLOWFlow,
        icon: baseURL + 'flow.png',
        chains: [ChainId.Flow],
        contracts: {
            [ChainId.Flow]: {
                address: '0xd3bF53DAC106A0290B0483EcBC89d40FcC961f3e',  //WFLOW
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped FLOW",
        symbol: TokenSymbol.WFLOWFlow,
        icon: baseURL + 'flow.png',
        chains: [ChainId.Flow],
        contracts: {
            [ChainId.Flow]: {
                address: '0xd3bF53DAC106A0290B0483EcBC89d40FcC961f3e', 
                decimal: 18,
            },
        },
    },
    {
        name: "Bridged USDC (Celer)",
        symbol: TokenSymbol.USDCEFlow,
        icon: baseURL + 'usdc.png',
        chains: [ChainId.Flow],
        contracts: {
            [ChainId.Flow]: {
                address: '0x7f27352D5F83Db87a5A3E00f4B07Cc2138D8ee52', 
                decimal: 6,
            },
        },
    },
    {
        name: "Bridged USDC (Stargate)",
        symbol: TokenSymbol.STGUSDCFlow,
        icon: baseURL + 'usdc.png',
        chains: [ChainId.Flow],
        contracts: {
            [ChainId.Flow]: {
                address: '0xF1815bd50389c46847f0Bda824eC8da914045D14', 
                decimal: 6,
            },
        },
    },
    {
        name: "USD Flow",
        symbol: TokenSymbol.USDFFlow,
        icon: baseURL + 'usdf.png',
        chains: [ChainId.Flow],
        contracts: {
            [ChainId.Flow]: {
                address: '0x2aaBea2058b5aC2D339b163C6Ab6f2b6d53aabED', 
                decimal: 6,
            },
        },
    },
    {
        name: "Increment Staked FLOW",
        symbol: TokenSymbol.STFLOWFlow,
        icon: baseURL + 'stflow.png',
        chains: [ChainId.Flow],
        contracts: {
            [ChainId.Flow]: {
                address: '0x5598c0652b899eb40f169dd5949bdbe0bf36ffde', 
                decimal: 18,
            },
        },
    },
    {
        name: "Ankr Staked FLOW EVM",
        symbol: TokenSymbol.ANKRFLOWFlow,
        icon: baseURL + 'ankrflow.png',
        chains: [ChainId.Flow],
        contracts: {
            [ChainId.Flow]: {
                address: '0x1b97100ea1d7126c4d60027e231ea4cb25314bdb', 
                decimal: 18,
            },
        },
    },
    {
        name: "Froth",
        symbol: TokenSymbol.FROTHFlow,
        icon: baseURL + 'froth.png',
        chains: [ChainId.Flow],
        contracts: {
            [ChainId.Flow]: {
                address: '0xB73BF8e6A4477a952E0338e6CC00cC0ce5AD04bA', 
                decimal: 18,
            },
        },
    },
    {
        name: "FVIX",
        symbol: TokenSymbol.FVIXFlow,
        icon: baseURL + 'fvix.png',
        chains: [ChainId.Flow],
        contracts: {
            [ChainId.Flow]: {
                address: '0x00f4CE400130C9383115f3858F9CA54677426583', 
                decimal: 18,
            },
        },
    },
]
