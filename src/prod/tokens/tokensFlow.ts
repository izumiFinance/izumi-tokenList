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
]
