import { TokenSymbol } from "../symbols/tokenPlumeNew";
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
        name: "Plume Token",
        symbol: TokenSymbol.PLUMEPlumeNew,
        icon: baseURL + 'plume.png',
        chains: [ChainId.PlumeNew],
        contracts: {
            [ChainId.PlumeNew]: {
                address: '0xEa237441c92CAe6FC17Caaf9a7acB3f953be4bd1', //wplume
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped PLUME",
        symbol: TokenSymbol.WPLUMEPlumeNew,
        icon: baseURL + 'plume.png',
        chains: [ChainId.PlumeNew],
        contracts: {
            [ChainId.PlumeNew]: {
                address: '0xEa237441c92CAe6FC17Caaf9a7acB3f953be4bd1', 
                decimal: 18,
            },
        },
    },
    {
        name: "Plume USD",
        symbol: TokenSymbol.PUSDPlumeNew,
        icon: baseURL + 'plumeusd.png',
        chains: [ChainId.PlumeNew],
        contracts: {
            [ChainId.PlumeNew]: {
                address: '0xdddD73F5Df1F0DC31373357beAC77545dC5A6f3F',
                decimal: 6,
            },
        },
    },
    {
        name: "Plume ETH",
        symbol: TokenSymbol.PETHPlumeNew,
        icon: 'https://assets.plumenetwork.xyz/images/logos/pETH/pETH-token.svg',
        chains: [ChainId.PlumeNew],
        contracts: {
            [ChainId.PlumeNew]: {
                address: '0x39d1F90eF89C52dDA276194E9a832b484ee45574',
                decimal: 18,
            },
        },
    },
    {
        name: "Bridged USDC (Stargate)",
        symbol: TokenSymbol.USDCPlumeNew,
        icon: baseURL + 'usdc.png',
        chains: [ChainId.PlumeNew],
        contracts: {
            [ChainId.PlumeNew]: {
                address: '0x78adD880A697070c1e765Ac44D65323a0DcCE913',
                decimal: 6,
            },
        },
    },
    {
        name: "Bridged USDT (Stargate)",
        symbol: TokenSymbol.USDTPlumeNew,
        icon: baseURL + 'usdt.png',
        chains: [ChainId.PlumeNew],
        contracts: {
            [ChainId.PlumeNew]: {
                address: '0xda6087E69C51E7D31b6DBAD276a3c44703DFdCAd',
                decimal: 6,
            },
        },
    },
    // {
    //     name: "Nest RWA Vault",
    //     symbol: TokenSymbol.NRWAPlumeNew,
    //     icon: "https://assets.plumenetwork.xyz/images/logos/nest/nRWA/nRWA-token.svg",
    //     chains: [ChainId.PlumeNew],
    //     contracts: {
    //         [ChainId.PlumeNew]: {
    //             address: '0x593cCcA4c4bf58b7526a4C164cEEf4003C6388db',
    //             decimal: 6,
    //         },
    //     },
    // },
    {
        name: "Nest Treasuries Vault",
        symbol: TokenSymbol.NTBILLPlumeNew,
        icon: "https://assets.plumenetwork.xyz/images/logos/nest/nTBILL/nTBILL-token.svg",
        chains: [ChainId.PlumeNew],
        contracts: {
            [ChainId.PlumeNew]: {
                address: '0xe72fe64840f4ef80e3ec73a1c749491b5c938cb9',
                decimal: 6,
            },
        },
    },
    // {
    //     name: "Nest Institutional Core",
    //     symbol: TokenSymbol.NELIXIRPlumeNew,
    //     icon: "https://assets.plumenetwork.xyz/images/logos/nest/nELIXIR/nELIXIR-token.svg",
    //     chains: [ChainId.PlumeNew],
    //     contracts: {
    //         [ChainId.PlumeNew]: {
    //             address: '0x9fbC367B9Bb966a2A537989817A088AFCaFFDC4c',
    //             decimal: 6,
    //         },
    //     },
    // },
    {
        name: "Nest Basis",
        symbol: TokenSymbol.NBASISPlumeNew,
        icon: "https://assets.plumenetwork.xyz/images/logos/nest/nBASIS/nBASIS-token.svg",
        chains: [ChainId.PlumeNew],
        contracts: {
            [ChainId.PlumeNew]: {
                address: '0x11113Ff3a60C2450F4b22515cB760417259eE94B',
                decimal: 6,
            },
        },
    },
    {
        name: "Nest Credit Vault",
        symbol: TokenSymbol.NCREDITPlumeNew,
        icon: "https://assets.plume.org/images/logos/nest/nCREDIT/nCREDIT-token.svg",
        chains: [ChainId.PlumeNew],
        contracts: {
            [ChainId.PlumeNew]: {
                address: '0xa5f78b2a0ab85429d2dfbf8b60abc70f4cec066c',
                decimal: 6,
            },
        },
    },
    {
        name: "Nest ALPHA Vault",
        symbol: TokenSymbol.NALPHAPlumeNew,
        icon: "https://assets.plume.org/images/logos/nest/nALPHA/nALPHA-token.svg",
        chains: [ChainId.PlumeNew],
        contracts: {
            [ChainId.PlumeNew]: {
                address: '0x593cCcA4c4bf58b7526a4C164cEEf4003C6388db',
                decimal: 6,
            },
        },
    },
]
