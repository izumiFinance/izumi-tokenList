import { TokenSymbol } from "../symbols/x32_cfx";
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
        name: 'BSC Conflux',
        symbol: TokenSymbol.BCFX,
        icon: baseURL + 'cfx.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x045c4324039dA91c52C55DF5D785385Aab073DcF',
                decimal: 18,
            },
        },
    },
]
