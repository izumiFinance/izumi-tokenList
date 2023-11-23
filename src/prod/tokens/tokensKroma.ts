import { TokenSymbol } from "../symbols/tokenKroma";
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
        symbol: TokenSymbol.ETHKroma,
        icon: baseURL + 'eth.png',
        chains: [ChainId.Kroma],
        contracts: {
            [ChainId.Kroma]: {
                address: '0x4200000000000000000000000000000000000001', //WETH
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped ETH",
        symbol: TokenSymbol.WETHKroma,
        icon: baseURL + 'WETH.png',
        chains: [ChainId.Kroma],
        contracts: {
            [ChainId.Kroma]: {
                address: '0x4200000000000000000000000000000000000001',
                decimal: 18,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDTKroma,
        icon: baseURL + 'usdt.png',
        chains: [ChainId.Kroma],
        contracts: {
            [ChainId.Kroma]: {
                address: '0x0Cf7c2A584988871b654Bd79f96899e4cd6C41C0',
                decimal: 6,
            },
        },
    },
    {
        name: "USD Coin",
        symbol: TokenSymbol.USDCKroma,
        icon: baseURL + 'usdc.png',
        chains: [ChainId.Kroma],
        contracts: {
            [ChainId.Kroma]: {
                //address: '0x49A5010110a358d9069282873F3e7eCf6B41DC10',
                address: '0x0257e4d92C00C9EfcCa1d641b224d7d09cfa4522',
                decimal: 6,
            },
        },
    },
    {
        name: "Dai Stablecoin",
        symbol: TokenSymbol.DAIKroma,
        icon: baseURL + 'dai.png',
        chains: [ChainId.Kroma],
        contracts: {
            [ChainId.Kroma]: {
                address: '0xc32A507d29903eAd6D74A1fC1b8dCB8df37B8D73',
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped Bitcoin",
        symbol: TokenSymbol.WBTCKroma,
        icon: baseURL + 'WBTC.png',
        chains: [ChainId.Kroma],
        contracts: {
            [ChainId.Kroma]: {
                address: '0x2104E3BD1cC8551EeC0c7ad10dE13da29136B19C',
                decimal: 8,
            },
        },
    },
]
