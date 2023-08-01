import { TokenSymbol } from "../symbols/tokenLoot";
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
        name: "Loot token",
        symbol: TokenSymbol.AGLDloot,
        icon: baseURL + 'agld.png',
        chains: [ChainId.Loot],
        contracts: {
            [ChainId.Loot]: {
                address: '0x7a524c7e82874226F0b51aade60A1BE4D430Cf0F', //WAGLD
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped AGLD",
        symbol: TokenSymbol.WAGLDloot,
        icon: baseURL + 'agld.png',
        chains: [ChainId.Loot],
        contracts: {
            [ChainId.Loot]: {
                address: '0x7a524c7e82874226F0b51aade60A1BE4D430Cf0F', 
                decimal: 18,
            },
        },
    },
    {
        name: "(Pos) Dai Stablecoin",
        symbol: TokenSymbol.DAILoot,
        icon: baseURL + 'dai.png',
        chains: [ChainId.Loot],
        contracts: {
            [ChainId.Loot]: {
                address: '0x7E25eb56a8A7c0fa8514dF2d39faf3aF783Ff807', 
                decimal: 18,
            },
        },
    },
]
