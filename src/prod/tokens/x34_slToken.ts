import { TokenSymbol } from "../symbols/x34_slToken";
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
        name: 'Shared-liquidity USDT',
        symbol: TokenSymbol.SLUSDT,
        icon: baseURL + 'slusdt.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x65CD2E7d7BAcDaC3AA9dAe68fb5d548dfE1fEFB5',
                decimal: 18,
            },
        },
    },
    {
        name: 'Shared-liquidity USDC',
        symbol: TokenSymbol.SLUSDC,
        icon: baseURL + 'slusdc.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x55a26773A8ba7FA9a8242B43e14a69488e6D2B05',
                decimal: 18,
            },
        },
    },
    {
        name: 'Shared-liquidity BTC',
        symbol: TokenSymbol.SLBTC,
        icon: baseURL + 'slbtc.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xe04B30F233E3Bc96Da2401EE146a94f1C7C54917',
                decimal: 18,
            },
        },
    },
    {
        name: 'Shared-liquidity ETH',
        symbol: TokenSymbol.SLETH,
        icon: baseURL + 'sleth.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xdF6964C7ccfaBaACe7C3f918B795fA4a894589C8',
                decimal: 18,
            },
        },
    },
]
