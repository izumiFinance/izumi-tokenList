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
    {
        name: "tBTC V2",
        symbol: TokenSymbol.TBTCBOB,
        chains: [ChainId.BOB],
        icon: baseURL + 'tbtc.png',
        contracts: {
            [ChainId.BOB]: {
                address: '0xBBa2eF945D523C4e2608C9E1214C2Cc64D4fc2e2',
                decimal: 18,
            },
        },
    },
]
