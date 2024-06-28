import { TokenSymbol } from "../symbols/tokenCore";
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
        name: "CORE Token",
        symbol: TokenSymbol.CORECore,
        chains: [ChainId.Core],
        icon: baseURL + 'core.png',
        contracts: {
            [ChainId.Core]: {
                address: '0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f', //WCORE
                decimal: 18, 
            },
        },
    },

    {
        name: "Wrapped CORE",
        symbol: TokenSymbol.WCORECore,
        chains: [ChainId.Core],
        icon: baseURL + 'core.png',
        contracts: {
            [ChainId.Core]: {
                address: '0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f', 
                decimal: 18, 
            },
        },
    },
    {
        name: "Core Wrapped BTC Token",
        symbol: TokenSymbol.COREBTCCore,
        chains: [ChainId.Core],
        icon: baseURL + 'corebtc.svg',
        contracts: {
            [ChainId.Core]: {
                address: '0x8034ab88c3512246bf7894f57c834dddbd1de01f', 
                decimal: 8, 
            },
        },
    },
    {
        name: "Free Bridged SolvBTC.b",
        symbol: TokenSymbol.SOLVEBTCBCore,
        chains: [ChainId.Core],
        icon: baseURL + 'solvbtcb.svg',
        contracts: {
            [ChainId.Core]: {
                address: '0x5b1fb849f1f76217246b8aaac053b5c7b15b7dc3', 
                decimal: 18, 
            },
        },
    },
    {
        name: "Free Bridged SolvBTC.m",
        symbol: TokenSymbol.SOLVEBTCMCore,
        chains: [ChainId.Core],
        icon: baseURL + 'solvbtcm.png',
        contracts: {
            [ChainId.Core]: {
                address: '0xe04d21d999faedf1e72ade6629e20a11a1ed14fa', 
                decimal: 18, 
            },
        },
    },
]
