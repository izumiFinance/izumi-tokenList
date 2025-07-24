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
    {
        name: "Chog",
        symbol: TokenSymbol.CHOGMonad,
        chains: [ChainId.MonadTest],
        icon: "https://imagedelivery.net/tWwhAahBw7afBzFUrX5mYQ/5d1206c2-042c-4edc-9f8b-dcef2e9e8f00/public",
        contracts: {
            [ChainId.MonadTest]: {
                address: '0xE0590015A873bF326bd645c3E1266d4db41C4E6B',  
                decimal: 18,
            },
        },
    },
    {
        name: "Moyaki",
        symbol: TokenSymbol.YAKIMonad,
        chains: [ChainId.MonadTest],
        icon: "https://imagedelivery.net/tWwhAahBw7afBzFUrX5mYQ/6679b698-a845-412b-504b-23463a3e1900/public",
        contracts: {
            [ChainId.MonadTest]: {
                address: '0xfe140e1dCe99Be9F4F15d657CD9b7BF622270C50',  
                decimal: 18,
            },
        },
    },
    {
        name: "USD Coin",
        symbol: TokenSymbol.USDCMonad,
        chains: [ChainId.MonadTest],
        icon: "https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/usdc.png/public",
        contracts: {
            [ChainId.MonadTest]: {
                address: '0xf817257fed379853cDe0fa4F97AB987181B1E5Ea',  
                decimal: 6,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDTMonad,
        chains: [ChainId.MonadTest],
        icon: "https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/images.png/public",
        contracts: {
            [ChainId.MonadTest]: {
                address: '0x88b8E2161DEDC77EF4ab7585569D2415a1C1055D',  
                decimal: 6,
            },
        },
    },
    {
        name: "Anago French BullDOG",
        symbol: TokenSymbol.ANAGOMonad,
        chains: [ChainId.MonadTest],
        icon: baseURL + "anago.png",
        contracts: {
            [ChainId.MonadTest]: {
                address: '0xE60c974ed6d3B19b97cA3097aD85181a814c888c',  
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped BTC",
        symbol: TokenSymbol.WBTCMonad,
        chains: [ChainId.MonadTest],
        icon: "https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/wbtc.png/public",
        contracts: {
            [ChainId.MonadTest]: {
                address: '0xcf5a6076cfa32686c0Df13aBaDa2b40dec133F1d',  
                decimal: 8,
            },
        },
    },
    {
        name: "Wrapped ETH",
        symbol: TokenSymbol.WETHMonad,
        chains: [ChainId.MonadTest],
        icon: "https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/weth.jpg/public",
        contracts: {
            [ChainId.MonadTest]: {
                address: '0xB5a30b0FDc5EA94A52fDc42e3E9760Cb8449Fb37',  
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped SOL",
        symbol: TokenSymbol.WSOLMonad,
        chains: [ChainId.MonadTest],
        icon: "https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/sol.png/public",
        contracts: {
            [ChainId.MonadTest]: {
                address: '0x5387C85A4965769f6B0Df430638a1388493486F1',  
                decimal: 9,
            },
        },
    },
    {
        name: "NAP",
        symbol: TokenSymbol.NAPMonad,
        chains: [ChainId.MonadTest],
        icon: baseURL + 'napmonad.png',
        contracts: {
            [ChainId.MonadTest]: {
                address: '0x93E9CaE50424C7a4E3c5eCEb7855B6dab74Bc803',
                decimal: 18,
            },
        }
    },
    {
        name: "ShMonad Token",
        symbol: TokenSymbol.SHMONMonad,
        chains: [ChainId.MonadTest],
        icon: baseURL + 'shmon.png',
        contracts: {
            [ChainId.MonadTest]: {
                address: '0x3a98250f98dd388c211206983453837c8365bdc1',
                decimal: 18,
            },
        }
    },
    {
        name: "aPriori Monad LST",
        symbol: TokenSymbol.APRMONMonad,
        chains: [ChainId.MonadTest],
        icon: baseURL + 'aprmon.png',
        contracts: {
            [ChainId.MonadTest]: {
                address: '0xb2f82D0f38dc453D596Ad40A37799446Cc89274A',
                decimal: 18,
            },
        }
    },
    {
        name: "Mist Token",
        symbol: TokenSymbol.MISTMonad,
        chains: [ChainId.MonadTest],
        icon: baseURL + 'mistmonad.png',
        contracts: {
            [ChainId.MonadTest]: {
                address: '0xb38bb873cca844b20A9eE448a87Af3626a6e1EF5',
                decimal: 18,
            },
        }
    },
    {
        name: "Tether USD (by iZUMi)",
        symbol: TokenSymbol.USDTOMonad,
        chains: [ChainId.MonadTest],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.MonadTest]: {
                address: '0x6a7436775c0d0B70cfF4c5365404ec37c9d9aF4b',
                decimal: 18,
            },
        }
    },
    {
        name: "Kintsu Staked Monad",
        symbol: TokenSymbol.SMONMonad,
        chains: [ChainId.MonadTest],
        icon: baseURL + 'smon.png',
        contracts: {
            [ChainId.MonadTest]: {
                address: '0xe1d2439b75fb9746E7Bc6cB777Ae10AA7f7ef9c5',
                decimal: 18,
            },
        }
    },
    {
        name: "Relend Network USDC",
        symbol: TokenSymbol.RUSDCMonad,
        chains: [ChainId.MonadTest],
        icon: baseURL + 'rusdc.png',
        contracts: {
            [ChainId.MonadTest]: {
                address: '0x400a417fedeef43fc5b8be0d8cd6df687847ee8d',
                decimal: 6,
            },
        }
    },
    {
        name: "gMON Token",
        symbol: TokenSymbol.GMONMonad,
        chains: [ChainId.MonadTest],
        icon: baseURL + 'gmon.png',
        contracts: {
            [ChainId.MonadTest]: {
                address: '0xaEef2f6B429Cb59C9B2D7bB2141ADa993E8571c3',
                decimal: 18,
            },
        }
    },
]
