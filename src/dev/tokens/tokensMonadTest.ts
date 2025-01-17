import { TokenSymbol } from "../symbols/tokenMonadTest";
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
        name: "Monad Token",
        symbol: TokenSymbol.MONMonad,
        chains: [ChainId.MonadTest],
        icon: baseURL + 'mon.png',
        contracts: {
            [ChainId.MonadTest]: {
                address: '0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701',  //WMON
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped MON",
        symbol: TokenSymbol.WMONMonad,
        chains: [ChainId.MonadTest],
        icon: baseURL + 'mon.png',
        contracts: {
            [ChainId.MonadTest]: {
                address: '0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701',  
                decimal: 18,
            },
        },
    },
]
