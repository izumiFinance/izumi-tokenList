import { TokenSymbol } from "../symbols/tokenFlowTest";
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
        chains: [ChainId.FlowTest],
        icon: baseURL + 'flow.png',
        contracts: {
            [ChainId.FlowTest]: {
                address: '0x1eE5eDC5Fe498a2dD82862746D674DB2a5e7fef6', // wflow
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped Flow",
        symbol: TokenSymbol.WFLOWFlow,
        chains: [ChainId.FlowTest],
        icon: baseURL + 'flow.png',
        contracts: {
            [ChainId.FlowTest]: {
                address: '0x1eE5eDC5Fe498a2dD82862746D674DB2a5e7fef6', 
                decimal: 18,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDTFlow,
        chains: [ChainId.FlowTest],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.FlowTest]: {
                address: '0x6a7436775c0d0B70cfF4c5365404ec37c9d9aF4b', 
                decimal: 18,
            },
        },
    },
]
