import { TokenSymbol } from "../symbols/tokenBOB";
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
        name: "USD Coin (BOB)",
        symbol: TokenSymbol.USDCEBOB,
        chains: [ChainId.BOB],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.BOB]: {
                address: '0xe75D0fB2C24A55cA1e3F96781a2bCC7bdba058F0',
                decimal: 6,
            },
        },
    },
]
