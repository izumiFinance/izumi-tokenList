import { TokenSymbol } from "../symbols/tokenMAPProtocol";
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
        name: "MAP Protocol Token",
        symbol: TokenSymbol.MAPOMAP,
        icon: baseURL + 'mapo.png',
        chains: [ChainId.MAPProtocol],
        contracts: {
            [ChainId.MAPProtocol]: {
                address: '0x13cb04d4a5dfb6398fc5ab005a6c84337256ee23',  //WMAPO
                decimal: 18,
            },
        },
    },

    {
        name: "Wrapped MAPO",
        symbol: TokenSymbol.WMAPOMAP,
        icon: baseURL + 'mapo.png',
        chains: [ChainId.MAPProtocol],
        contracts: {
            [ChainId.MAPProtocol]: {
                address: '0x13cb04d4a5dfb6398fc5ab005a6c84337256ee23',  
                decimal: 18,
            },
        },
    },

    {
        name: "Mapped Tether USD",
        symbol: TokenSymbol.USDTMAP,
        icon: baseURL + 'usdt.png',
        chains: [ChainId.MAPProtocol],
        contracts: {
            [ChainId.MAPProtocol]: {
                address: '0x33daba9618a75a7aff103e53afe530fbacf4a3dd',  
                decimal: 18,
            },
        },
    },

    {
        name: "Mapped Wrapped Ether",
        symbol: TokenSymbol.ETHMAP,
        icon: baseURL + 'eth.png',
        chains: [ChainId.MAPProtocol],
        contracts: {
            [ChainId.MAPProtocol]: {
                address: '0x05ab928d446d8ce6761e368c8e7be03c3168a9ec',  
                decimal: 18,
            },
        },
    },
]