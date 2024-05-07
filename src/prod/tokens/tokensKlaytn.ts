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
]
