import { TokenSymbol } from "../symbols/tokenEXPchainTest";
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
        name: "tZKJ",
        symbol: TokenSymbol.TZKJEXPchainTest,
        chains: [ChainId.EXPchainTest],
        icon: baseURL + 'tZKJ.png',
        contracts: {
            [ChainId.EXPchainTest]: {
                address: '0x1eE5eDC5Fe498a2dD82862746D674DB2a5e7fef6', // wtzkj
                decimal: 18,
            },
        },
    },
    {
        name: "wrapped tZKJ",
        symbol: TokenSymbol.WTZKJEXPchainTest,
        chains: [ChainId.EXPchainTest],
        icon: baseURL + 'tZKJ.png',
        contracts: {
            [ChainId.EXPchainTest]: {
                address: '0x1eE5eDC5Fe498a2dD82862746D674DB2a5e7fef6', 
                decimal: 18,
            },
        },
    },
    {
        name: "EXPchain: ETH",
        symbol: TokenSymbol.ETHEXPchainTest,
        chains: [ChainId.EXPchainTest],
        icon: baseURL + 'eth.png',
        contracts: {
            [ChainId.EXPchainTest]: {
                address: '0xa966BDF2e0088eb921A39d6ff684b60388Fc277e',
                decimal: 18,
            },
        },
    },
    {
        name: "EXPchain: USDT",
        symbol: TokenSymbol.USDTEXPchainTest,
        chains: [ChainId.EXPchainTest],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.EXPchainTest]: {
                address: '0xf4e77b64cFac6B5e4F5B958dBE2558F8b342aC8D',
                decimal: 6,
            },
        },
    },
    {
        name: "EXPchain: USDC",
        symbol: TokenSymbol.USDCEXPchainTest,
        chains: [ChainId.EXPchainTest],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.EXPchainTest]: {
                address: '0x09BE71c8Ff0594F051aa1953671420057634a83D',
                decimal: 6,
            },
        },
    },
    {
        name: "Pepeya Coin",
        symbol: TokenSymbol.PEYAEXPchainTest,
        chains: [ChainId.EXPchainTest],
        icon: baseURL + 'peya.png',
        contracts: {
            [ChainId.EXPchainTest]: {
                address: '0x314bC52eD0Fc732E8DE16B63419b567238AB4f0D',
                decimal: 18,
            },
        },
    },
    {
        name: "Dog Waffle Hat",
        symbol: TokenSymbol.WAFLEXPchainTest,
        chains: [ChainId.EXPchainTest],
        icon: baseURL + 'wafl.png',
        contracts: {
            [ChainId.EXPchainTest]: {
                address: '0x8eDebd099Fe58bf61E723677d43Cf7d07c6962e2',
                decimal: 18,
            },
        },
    },
    {
        name: "Not Stressed Guy",
        symbol: TokenSymbol.STRESSEXPchainTest,
        chains: [ChainId.EXPchainTest],
        icon: baseURL + 'stress.png',
        contracts: {
            [ChainId.EXPchainTest]: {
                address: '0x12B41687A5a0f0AD30fdB782dAb173f3152a8c1e',
                decimal: 18,
            },
        },
    },
    {
        name: "Robot Frog",
        symbol: TokenSymbol.RIBOTEXPchainTest,
        chains: [ChainId.EXPchainTest],
        icon: baseURL + 'ribot.png',
        contracts: {
            [ChainId.EXPchainTest]: {
                address: '0xB8a201547151068aA2298b71aB6f6a884FCec330',
                decimal: 18,
            },
        },
    },
    {
        name: "Cat Nap Coin",
        symbol: TokenSymbol.NAPSTEXPchainTest,
        chains: [ChainId.EXPchainTest],
        icon: baseURL + 'naps.png',
        contracts: {
            [ChainId.EXPchainTest]: {
                address: '0x99B106D8CdA4702dABAe0eCF6E289D70bE1e8cE1',
                decimal: 18,
            },
        },
    },
    {
        name: "Quantum Koala",
        symbol: TokenSymbol.QKOALATEXPchainTest,
        chains: [ChainId.EXPchainTest],
        icon: baseURL + 'qkoala.png',
        contracts: {
            [ChainId.EXPchainTest]: {
                address: '0xe04c48b6e47BA4723dABf3346ca7035C58Fa3fAF',
                decimal: 18,
            },
        },
    },
    {
        name: "Sky Potato",
        symbol: TokenSymbol.SKYPOTEXPchainTest,
        chains: [ChainId.EXPchainTest],
        icon: baseURL + 'skypot.png',
        contracts: {
            [ChainId.EXPchainTest]: {
                address: '0x9eAE81Edaf832cC7fd16956f4cBdacE83eb51aa3',
                decimal: 18,
            },
        },
    },
]
