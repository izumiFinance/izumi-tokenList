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
        name: "Mapped Bitcoin",
        symbol: TokenSymbol.BTCMAP,
        icon: baseURL + 'btc.png',
        chains: [ChainId.MAPProtocol],
        contracts: {
            [ChainId.MAPProtocol]: {
                address: '0xb877e3562a660c7861117c2f1361a26abaf19beb',  
                decimal: 18,
            },
        },
    },
    {
        name: "Merlin's Seal BTC",
        symbol: TokenSymbol.MBTCMAP,
        icon: baseURL + 'mbtc.svg',
        chains: [ChainId.MAPProtocol],
        contracts: {
            [ChainId.MAPProtocol]: {
                address: '0x1d22c0ab633f393c84a98cf4f2fad10ba47bb7b3',  
                decimal: 18,
            },
        },
    },
    {
        name: "SolvBTC",
        symbol: TokenSymbol.SOLVBTCMAP,
        icon: baseURL + 'solvbtc.png',
        chains: [ChainId.MAPProtocol],
        contracts: {
            [ChainId.MAPProtocol]: {
                address: '0x7eb8b1fe3ee3287fd5864e50f32322ce3285b39d',  
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
    {
        name: "stMAPO Token",
        symbol: TokenSymbol.STMAPOMAP,
        icon: baseURL + 'stmapo.png',
        chains: [ChainId.MAPProtocol],
        contracts: {
            [ChainId.MAPProtocol]: {
                address: '0x9bd1e0a3a727d0d4f4e9a6d59022e071ddc79924',  
                decimal: 18,
            },
        },
    },
    {
        name: "EEAA Token",
        symbol: TokenSymbol.EEAAMAP,
        icon: baseURL + 'eeaa.png',
        chains: [ChainId.MAPProtocol],
        contracts: {
            [ChainId.MAPProtocol]: {
                address: '0x040a66ed7def1c037c5c9848bc5d44dcd3b0fc62',  
                decimal: 18,
            },
        },
    },

    {
        name: "LSGS Token",
        symbol: TokenSymbol.LSGSMAP,
        icon: baseURL + 'lsgs.png',
        chains: [ChainId.MAPProtocol],
        contracts: {
            [ChainId.MAPProtocol]: {
                address: '0x756af1d3810a01d3292fad62f295bbcc6c200aea',  
                decimal: 18,
            },
        },
    },

    {
        name: "RATS (brc-20) Token",
        symbol: TokenSymbol.RATSMAP,
        icon: baseURL + 'rats.png',
        chains: [ChainId.MAPProtocol],
        contracts: {
            [ChainId.MAPProtocol]: {
                address: '0x6369414f2b0e973c7e85a362141aa1430bc30056',  
                decimal: 18,
            },
        },
    },
    {
        name: "STST (brc-20) Token",
        symbol: TokenSymbol.STSTMAP,
        icon: baseURL + 'stst.png',
        chains: [ChainId.MAPProtocol],
        contracts: {
            [ChainId.MAPProtocol]: {
                address: '0xf5a59f961a8e86285dae2e45ac4ae50e4e47ba97',  
                decimal: 18,
            },
        },
    },
    {
        name: "ROUP (brc-20) Token",
        symbol: TokenSymbol.ROUPMAP,
        icon: baseURL + 'roup.png',
        chains: [ChainId.MAPProtocol],
        contracts: {
            [ChainId.MAPProtocol]: {
                address: '0x5a1c3f3aae616146c7b9bf9763e0aba9bafc5eae',  
                decimal: 18,
            },
        },
    }
]