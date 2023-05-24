import { TokenSymbol } from "../symbols/tokenScrollTest";
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
        name: "USDC (official bridge)",
        symbol: TokenSymbol.USDCSCROLL,
        chains: [ChainId.ScrollTestnet],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.ScrollTestnet]: {
                address: '0x67aE69Fd63b4fc8809ADc224A9b82Be976039509',
                decimal: 6,
            },
        },
    },
]
