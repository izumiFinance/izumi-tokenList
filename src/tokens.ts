import { TokenSymbol } from "./tokenSymbol";
import { ChainId } from "./chainId";

export interface TokenInfo {
    chains: number[];
    name: string;
    symbol: TokenSymbol,
    icon: string;
    contracts: Partial<Record<ChainId, { address: string; decimal: number }>>;
}


export const tokens: TokenInfo[] = [
    {
        name: 'iZUMi Token',
        symbol: TokenSymbol.IZI,
        icon: '/assets/tokens/izumi.svg',
        chains: [ChainId.Izumi, ChainId.EthereumMainnet, ChainId.Matic, ChainId.Rinkeby, ChainId.Arbitrum],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0x9ad37205d608B8b219e6a2573f922094CEc5c200',
                decimal: 18,
            },
            [ChainId.Matic]: {
                address: '0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747',
                decimal: 18,
            },
            [ChainId.Izumi]: {
                address: '0xEe5e3852434eB67F8e9E97015e32845861ea15E8',
                decimal: 18,
            },
            [ChainId.Rinkeby]: {
                address: '0x40E2BA87F796FaBeEe98872F2085fC020DbAd47B',
                decimal: 18,
            },
            [ChainId.Arbitrum]: {
                address: '0x60D01EC2D5E98Ac51C8B4cF84DfCCE98D527c747',
                decimal: 18,
            },
        },
    },
]
