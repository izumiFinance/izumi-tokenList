import { TokenSymbol } from "../symbols/tokenBSC";
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
        name: 'Liquid Staking BNB',
        symbol: TokenSymbol.BNBX,
        icon: baseURL + 'bnbx.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x1bdd3Cf7F79cfB8EdbB955f20ad99211551BA275',
                decimal: 18,
            },
        },
    },
    {
        name: 'Stader Token',
        symbol: TokenSymbol.SD,
        icon: baseURL + 'sd.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x3BC5AC0dFdC871B365d159f728dd1B9A0B5481E8',
                decimal: 18,
            },
        },
    },
    {
        name: 'Ankr Token',
        symbol: TokenSymbol.ANKR,
        icon: baseURL + 'ankr.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xf307910A4c7bbc79691fD374889b36d8531B08e3',
                decimal: 18,
            },
        },
    },
    {
        name: 'Ankr Staked BNB',
        symbol: TokenSymbol.ANKRBNB,
        icon: baseURL + 'abnbc.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x52F24a5e03aee338Da5fd9Df68D2b6FAe1178827',
                decimal: 18,
            },
        },
    },
    {
        name: 'Great Resilient Incentive',
        symbol: TokenSymbol.GRI,
        icon: baseURL + 'gri.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xD767713e787Cb351e4daFb777DD93d54f5381D29',
                decimal: 8,
            },
        },
    },
    {
        name: 'ZEBEC token',
        symbol: TokenSymbol.ZBC,
        icon: baseURL + 'zbc.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x37a56cdcD83Dce2868f721De58cB3830C44C6303',
                decimal: 9,
            },
        },
    },
    {
        name: 'Wootrade Network',
        symbol: TokenSymbol.WOO,
        icon: baseURL + 'woo.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x4691937a7508860F876c9c0a2a617E7d9E945D4B',
                decimal: 18,
            },
        },
    },
    {
        name: 'MAP Protocol',
        symbol: TokenSymbol.MAP,
        icon: baseURL + 'map.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x8105ECe4ce08B6B6449539A5db23e23b973DfA8f',
                decimal: 18,
            },
        },
    },
    {
        name: 'CyberConnect token',
        symbol: TokenSymbol.CYBERBSC,
        icon: baseURL + 'cyber.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x14778860e937f509e651192a90589de711fb88a9',
                decimal: 18,
            },
        },
    },
]
