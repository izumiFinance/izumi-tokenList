import { TokenSymbol } from "../symbols/tokenMeter";
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
        name: "Meter Token",
        symbol: TokenSymbol.MTR,
        icon: baseURL + 'mtr.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0x160361ce13ec33C993b5cCA8f62B6864943eb083', //WMTR
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped Meter Token",
        symbol: TokenSymbol.WMTR,
        icon: baseURL + 'mtr.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0x160361ce13ec33C993b5cCA8f62B6864943eb083', 
                decimal: 18,
            },
        },
    },
    {
        name: "Meter Governance Token",
        symbol: TokenSymbol.MTRG,
        icon: baseURL + 'mtrg.png',
        chains: [ChainId.Meter, ChainId.BSC],
        contracts: {
            [ChainId.Meter]: {
                address: '0x228ebBeE999c6a7ad74A6130E81b12f9Fe237Ba3', 
                decimal: 18,
            },
            [ChainId.BSC]: {
                address: '0xBd2949F67DcdC549c6Ebe98696449Fa79D988A9F', 
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped USDT from Ethereum on Meter",
        symbol: TokenSymbol.USDTETH,
        icon: baseURL + 'usdt.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0x5fa41671c48e3c951afc30816947126ccc8c162e', 
                decimal: 6,
            },
        },
    },
    {
        name: "Wrapped BUSD from BSC",
        symbol: TokenSymbol.BUSDBSC,
        icon: baseURL + 'busd.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0x24aa189dfaa76c671c279262f94434770f557c35', 
                decimal: 18,
            },
        },
    },
    {
        name: "AmpleForth",
        symbol: TokenSymbol.AMPLMETER,
        icon: baseURL + 'ampl.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0x1cf09D1B5Da9d9d24365D87B932A7c4bD018A419', 
                decimal: 9,
            },
        },
    },
    {
        name: "BNB from BSC on Meter",
        symbol: TokenSymbol.BNBBSC,
        icon: baseURL + 'bnb.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0xF0E86246519Be0810C9FAfc8430C49799985aAA8', 
                decimal: 18,
            },
        },
    },
    {
        name: "Civilization from Ethereum on Meter",
        symbol: TokenSymbol.CIVMETER,
        icon: baseURL + 'civ.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0xdf3ff78702fac3885acac3b42a99fb37dfce912e', 
                decimal: 18,
            },
        },
    },
    {
        name: "ETH from Ethereum on Meter",
        symbol: TokenSymbol.ETHETH,
        icon: baseURL + 'eth.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0x983147FB73A45FC7F8B4DFA1cd61Bdc7b111e5b6', 
                decimal: 18,
            },
        },
    },
    {
        name: "Factory Builders Token",
        symbol: TokenSymbol.FTBMETER,
        icon: baseURL + 'ftb.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0x6CFe9AdaD5215195c1Aa9755DAed29360e6Ab986', 
                decimal: 18,
            },
        },
    },
    {
        name: "iZUMi Bond USD",
        symbol: TokenSymbol.IUSDMETER,
        icon: baseURL + 'iusd.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0x46b40202da16761633e757674661683fd733b845', 
                decimal: 18,
            },
        },
    },
    {
        name: "iZUMi Token",
        symbol: TokenSymbol.IZIMETER,
        icon: baseURL + 'izi.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0x55137322647150d4ff0de22967589690c57a24d3', 
                decimal: 18,
            },
        },
    },
    {
        name: "Meter MEN",
        symbol: TokenSymbol.MENMETER,
        icon: baseURL + 'men.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0x01d18666A27Cf91F32549f181F53e517BA6dc473', 
                decimal: 18,
            },
        },
    },
    {
        name: "MOVR from MoonRiver on Meter",
        symbol: TokenSymbol.MOVRMETER,
        icon: baseURL + 'movr.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0xb158870beB809Ad955Bf56065C5C10D7Fd957cC0', 
                decimal: 18,
            },
        },
    },
    {
        name: "SKILL by cryptoblades.io",
        symbol: TokenSymbol.SKILLMETER,
        icon: baseURL + 'skill.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0x45a7ca9511a49508B01d37F09f9F142bEa85Ce14', 
                decimal: 18,
            },
        },
    },
    {
        name: "Theta Drop",
        symbol: TokenSymbol.TDROPMETER,
        icon: baseURL + 'tdrop.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0xd5e615BB3c761AB4cD9251dEEd78Dac58BE9CcBF', 
                decimal: 18,
            },
        },
    },
    {
        name: "Theta Fuel",
        symbol: TokenSymbol.TFUELMETER,
        icon: baseURL + 'tfuel.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0x75Fd6F7EDCc5E7A8100eAd3D29CCD844153ef0F3', 
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped USDC from Ethereum on Meter",
        symbol: TokenSymbol.USDCETH,
        icon: baseURL + 'usdc.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0xd86e243fc0007e6226b07c9a50c9d70d78299eb5', 
                decimal: 6,
            },
        },
    },
    {
        name: "Volt",
        symbol: TokenSymbol.VOLTMETER,
        icon: baseURL + 'volt.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0x8Df95e66Cb0eF38F91D2776DA3c921768982fBa0', 
                decimal: 18,
            },
        },
    },
    {
        name: "WBTC from Ethereum on Meter",
        symbol: TokenSymbol.WBTCETH,
        icon: baseURL + 'wbtc.png',
        chains: [ChainId.Meter],
        contracts: {
            [ChainId.Meter]: {
                address: '0xc1f6C86ABEe8e2e0B6fd5BD80F0b51fef783635C', 
                decimal: 8,
            },
        },
    },
]
