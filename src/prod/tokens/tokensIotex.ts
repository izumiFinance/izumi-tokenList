import { TokenSymbol } from "../symbols/tokenIotex";
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
        name: "Iotex Token",
        symbol: TokenSymbol.IOTXIotex,
        icon: baseURL + 'iotex.png',
        chains: [ChainId.Iotex],
        contracts: {
            [ChainId.Iotex]: {
                address: '0xa00744882684c3e4747faefd68d283ea44099d03',  //WIOTX
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped IOTX",
        symbol: TokenSymbol.WIOTXIotex,
        icon: baseURL + 'iotex.png',
        chains: [ChainId.Iotex],
        contracts: {
            [ChainId.Iotex]: {
                address: '0xa00744882684c3e4747faefd68d283ea44099d03',  
                decimal: 18,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.IOUSDTIotex,
        icon: baseURL + 'usdt.png',
        chains: [ChainId.Iotex],
        contracts: {
            [ChainId.Iotex]: {
                address: '0x6fbCdc1169B5130C59E72E51Ed68A84841C98cd1',  
                decimal: 6,
            },
        },
    },
    {
        name: "USD Coin",
        symbol: TokenSymbol.IOUSDCIotex,
        icon: baseURL + 'usdc.png',
        chains: [ChainId.Iotex],
        contracts: {
            [ChainId.Iotex]: {
                address: '0x3B2bf2b523f54C4E454F08Aa286D03115aFF326c',  
                decimal: 6,
            },
        },
    },
    {
        name: "Wrapped Ether",
        symbol: TokenSymbol.IOETHIotex,
        icon: baseURL + 'eth.png',
        chains: [ChainId.Iotex],
        contracts: {
            [ChainId.Iotex]: {
                address: '0x0258866edAf84D6081df17660357aB20A07d0c80',  
                decimal: 18,
            },
        },
    },
]
