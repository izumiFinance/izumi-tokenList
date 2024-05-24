import { TokenSymbol } from "../symbols/tokenKlaytn";
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
        name: "Klaytn Token",
        symbol: TokenSymbol.KLAYKlaytn,
        icon: baseURL + 'klaytn.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0x19Aac5f612f524B754CA7e7c41cbFa2E981A4432',  //WKLAY
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped KLAY",
        symbol: TokenSymbol.WKLAYKlaytn,
        icon: baseURL + 'klaytn.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0x19Aac5f612f524B754CA7e7c41cbFa2E981A4432', 
                decimal: 18,
            },
        },
    },
    {
        name: "USD Coin",
        symbol: TokenSymbol.USDCKlaytn,
        icon: baseURL + 'usdcklaytn.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0x608792deb376cce1c9fa4d0e6b7b44f507cffa6a', 
                decimal: 6,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDTKlaytn,
        icon: baseURL + 'usdtklaytn.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0x5c13e303a62fc5dedf5b52d66873f2e59fedadc2', 
                decimal: 6,
            },
        },
    },
    {
        name: "KKUL THE PARROT",
        symbol: TokenSymbol.KKULPKlaytn,
        icon: baseURL + 'kkulp.png',
        chains: [ChainId.Klaytn],
        contracts: {
            [ChainId.Klaytn]: {
                address: '0x0f58d0abaae2f586b0d3b6d045305463e89ba603', 
                decimal: 18,
            },
        },
    },
]
