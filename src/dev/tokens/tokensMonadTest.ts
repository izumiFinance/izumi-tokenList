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
    {
        name: "Molandak",
        symbol: TokenSymbol.DAKMonad,
        chains: [ChainId.MonadTest],
        icon: "https://imagedelivery.net/tWwhAahBw7afBzFUrX5mYQ/27759359-9374-4995-341c-b2636a432800/public",
        contracts: {
            [ChainId.MonadTest]: {
                address: '0x0F0BDEbF0F83cD1EE3974779Bcb7315f9808c714',  
                decimal: 18,
            },
        },
    },
]
