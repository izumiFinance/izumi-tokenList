import { TokenSymbol } from "../symbolList";
import { ChainId } from "../chainId";

export interface TokenInfo {
    chains: number[];
    name: string;
    symbol: TokenSymbol,
    icon: string;
    contracts: Partial<Record<ChainId, { address: string; decimal: number }>>;
}

export const tokens: TokenInfo[] = [
  {
    name: "Cardano Token",
    symbol: TokenSymbol.ADA,
    icon: "https://tokens.pancakeswap.finance/images/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x2942fDF40c191A477886B76070C4a66c59f067fe",
            decimal: 18
        }
    }
},
{
    name: "ALICE",
    symbol: TokenSymbol.ALICE,
    icon: "https://tokens.pancakeswap.finance/images/0xAC51066d7bEC65Dc4589368da368b212745d63E8.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x42c1F97D97BAFA855b660E8BA7f9A645cc956098",
            decimal: 18
        }
    }
},
{
    name: "AlinX",
    symbol: TokenSymbol.ALIX,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xaF6Bd11A6F8f9c44b9D18f5FA116E403db599f8E/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x650C3Fc7289008AAeF7e5fa00dBdf102c0374676",
            decimal: 18
        }
    }
},
{
    name: "AlphaToken",
    symbol: TokenSymbol.ALPHA,
    icon: "https://tokens.pancakeswap.finance/images/0xa1faa113cbE53436Df28FF0aEe54275c13B40975.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x84C05c19861B5Cb981940a90D6E3E0d4D882a01a",
            decimal: 18
        }
    }
},
{
    name: "Altura",
    symbol: TokenSymbol.ALU,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8263CD1601FE73C066bf49cc09841f35348e3be0/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x9537870c272fC4F321D405F23A6A8b2Bb12f73e0",
            decimal: 18
        }
    }
},
{
    name: "Automata",
    symbol: TokenSymbol.ATA,
    icon: "https://tokens.pancakeswap.finance/images/0xA2120b9e674d3fC3875f415A7DF52e382F141225.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x9B54C05ACc05B34E57df960dE201fB615040F13A",
            decimal: 18
        }
    }
},
{
    name: "Cosmos Token",
    symbol: TokenSymbol.ATOM,
    icon: "https://tokens.pancakeswap.finance/images/0x0Eb3a705fc54725037CC9e008bDede697f62F335.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xa087C7775c7CCb5fa6201227a27F4802c717A028",
            decimal: 18
        }
    }
},
{
    name: "Axie Infinity Shard",
    symbol: TokenSymbol.AXS,
    icon: "https://tokens.pancakeswap.finance/images/0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xa86F55fe56200d86dAdAef52E487303613549c69",
            decimal: 18
        }
    }
},
{
    name: "Baby Doge Coin",
    symbol: TokenSymbol.BABYDOGE,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xc748673057861a797275CD8A068AbB95A902e8de/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x183080C40464190E42ab5aA2C4655564bc922b8D",
            decimal: 18
        }
    }
},
{
    name: "Bear",
    symbol: TokenSymbol.BEAR,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xc3EAE9b061Aa0e1B9BD3436080Dc57D2d63FEdc1/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x870673689cC9a65e9D31EF17B23aCcD0212b4ae4",
            decimal: 18
        }
    }
},
{
    name: "Bella Protocol",
    symbol: TokenSymbol.BEL,
    icon: "https://tokens.pancakeswap.finance/images/0x8443f091997f06a61670B735ED92734F5628692F.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x76056a076589ed0dD443c38166503Db094fd27be",
            decimal: 18
        }
    }
},
{
    name: "BELT Token",
    symbol: TokenSymbol.BELT,
    icon: "https://tokens.pancakeswap.finance/images/0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x35A04F775015982e9A0bc818c68373e42A31272e",
            decimal: 18
        }
    }
},
{
    name: "Binemon",
    symbol: TokenSymbol.BIN,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xe56842Ed550Ff2794F010738554db45E60730371/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x3B65532750E4B1F4b57F1d5D33fA1cDC7532946E",
            decimal: 18
        }
    }
},
{
    name: "Binamon",
    symbol: TokenSymbol.BMON,
    icon: "https://tokens.pancakeswap.finance/images/0x08ba0619b1e7A582E0BCe5BBE9843322C954C340.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x620D789F68962f1a0511D0B14ed28582B3796E30",
            decimal: 18
        }
    }
},
{
    name: "BinaryX",
    symbol: TokenSymbol.BNX,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8C851d1a123Ff703BD1f9dabe631b69902Df5f97/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x91F654C973ef224Ba577d29338fB057Cd1689b67",
            decimal: 18
        }
    }
},
{
    name: "BunnyPark",
    symbol: TokenSymbol.BP,
    icon: "https://tokens.pancakeswap.finance/images/0xACB8f52DC63BB752a51186D1c55868ADbFfEe9C1.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x7d5249cc246f87f698b2C84C8068892c8B3c113F",
            decimal: 18
        }
    }
},
{
    name: "BSCPAD.com",
    symbol: TokenSymbol.BSCPAD,
    icon: "https://tokens.pancakeswap.finance/images/0x5A3010d4d8D3B5fB49f8B6E57FB9E48063f16700.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xdEa50bc7E46Fd17a9F59ADC045007E1A488B9aBC",
            decimal: 18
        }
    }
},
{
    name: "BitTorrent Old",
    symbol: TokenSymbol.BTTOLD,
    icon: "https://tokens.pancakeswap.finance/images/0x8595F9dA7b868b1822194fAEd312235E43007b49.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x9E39F0CAe45852c495F50449a908E1d215012304",
            decimal: 18
        }
    }
},
{
    name: "Coin98",
    symbol: TokenSymbol.C98,
    icon: "https://tokens.pancakeswap.finance/images/0xaEC945e04baF28b135Fa7c640f624f8D90F1C3a6.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x48aFbE896a02E2AD62A3e274fFf82C62C7CAD9EB",
            decimal: 18
        }
    }
},
{
    name: "Chess",
    symbol: TokenSymbol.CHESS,
    icon: "https://tokens.pancakeswap.finance/images/0x20de22029ab63cf9A7Cf5fEB2b737Ca1eE4c82A6.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x2498D720dEC447180E4f037DB903177121925C5E",
            decimal: 18
        }
    }
},
{
    name: "Chroma",
    symbol: TokenSymbol.CHR,
    icon: "https://tokens.pancakeswap.finance/images/0xf9CeC8d50f6c8ad3Fb6dcCEC577e05aA32B224FE.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xFb15A23f360358E83937FC2c6f07e1D97eAF4fDb",
            decimal: 18
        }
    }
},
{
    name: "CP",
    symbol: TokenSymbol.CP,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x82C19905B036bf4E329740989DCF6aE441AE26c1/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xB0Bb7C8d6ed6BF4Cc8C81bc0549070d3160fbAec",
            decimal: 18
        }
    }
},
{
    name: "DeRace Token",
    symbol: TokenSymbol.DERC,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x373E768f79c820aA441540d254dCA6d045c6d25b/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xc1A73cb99263811dfF3BCe7aE5e329531d2d038c",
            decimal: 18
        }
    }
},
{
    name: "DODO bird",
    symbol: TokenSymbol.DODO,
    icon: "https://tokens.pancakeswap.finance/images/0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xBe88E551f1e90C3B000F6A00e6c8F4663999b652",
            decimal: 18
        }
    }
},
{
    name: "Dogecoin",
    symbol: TokenSymbol.DOGE,
    icon: "https://tokens.pancakeswap.finance/images/0xbA2aE424d960c26247Dd6c32edC70B295c744C43.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x9bFbc2161E10923F0bBa071bd7B4d50fa99aF456",
            decimal: 18
        }
    }
},
{
    name: "My DeFi Pet Token",
    symbol: TokenSymbol.DPET,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xfb62AE373acA027177D1c18Ee0862817f9080d08/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xCf499E68eC8238e8564c326bCA9C54d38D70954D",
            decimal: 18
        }
    }
},
{
    name: "DeathRoad Token",
    symbol: TokenSymbol.DRACE,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xA6c897CaaCA3Db7fD6e2D2cE1a00744f40aB87Bb/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x3c25C9330E7BdAaE6877bA8647F07ccD2aAbEb18",
            decimal: 18
        }
    }
},
{
    name: "DragonSlayer",
    symbol: TokenSymbol.DRS,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xc8E8ecB2A5B5d1eCFf007BF74d15A86434aA0c5C/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x875b33Df16aF299130b2652e39c5119A27EB6431",
            decimal: 18
        }
    }
},
{
    name: "Dvision",
    symbol: TokenSymbol.DVI,
    icon: "https://tokens.pancakeswap.finance/images/0x758FB037A375F17c7e195CC634D77dA4F554255B.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xC12d1B323A15Bc4ca0f64f775Ea345468500a306",
            decimal: 18
        }
    }
},
{
    name: "Etherconnect Coin",
    symbol: TokenSymbol.ECC,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8D047F4F57A190C96c8b9704B39A1379E999D82B/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xDa6328D437A07439abd082D615557e34378a08bA",
            decimal: 18
        }
    }
},
{
    name: "Ellipsis",
    symbol: TokenSymbol.EPS,
    icon: "https://tokens.pancakeswap.finance/images/0xA7f552078dcC247C2684336020c03648500C6d9F.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x82d48DFE628A490202845cb62705106779DD0231",
            decimal: 18
        }
    }
},
{
    name: "FaraCrystal",
    symbol: TokenSymbol.FARA,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xF4Ed363144981D3A65f42e7D0DC54FF9EEf559A1/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x916503b6EF4e2c4A2439c4BE76266E27beB0EC6c",
            decimal: 18
        }
    }
},
{
    name: "FLOKI",
    symbol: TokenSymbol.FLOKI,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x2B3F34e9D4b127797CE6244Ea341a83733ddd6E4/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x023Ff2653F46844e0993B3c77FBBb14e6ac0D46B",
            decimal: 18
        }
    }
},
{
    name: "Formation Finance",
    symbol: TokenSymbol.FORM,
    icon: "https://tokens.pancakeswap.finance/images/0x25A528af62e56512A19ce8c3cAB427807c28CC19.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x5C6516a77E18ae9c971848e32a9d3ADc2f3A42FF",
            decimal: 18
        }
    }
},
{
    name: "Frontier Token",
    symbol: TokenSymbol.FRONT,
    icon: "https://tokens.pancakeswap.finance/images/0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x124B7C49EFf344Ded01c158C20a17bC004AC5a80",
            decimal: 18
        }
    }
},
{
    name: "CyberDragon Gold",
    symbol: TokenSymbol.GOLD,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xb3a6381070B1a15169DEA646166EC0699fDAeA79/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x17fD83E04CE1E98EC831Db6FBBEC2B579eD08BA3",
            decimal: 18
        }
    }
},
{
    name: "StepHero",
    symbol: TokenSymbol.HERO,
    icon: "https://tokens.pancakeswap.finance/images/0xE8176d414560cFE1Bf82Fd73B986823B89E4F545.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xd580980988022Cdc58649a4dd9FC847362034d11",
            decimal: 18
        }
    }
},
{
    name: "Metahero",
    symbol: TokenSymbol.HERO,
    icon: "https://tokens.pancakeswap.finance/images/0xD40bEDb44C081D2935eebA6eF5a3c8A31A1bBE13.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x648012A41BFd240cB73f9B9738198c2d97FA6483",
            decimal: 18
        }
    }
},
{
    name: "Honey token",
    symbol: TokenSymbol.HONEY,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xFa363022816aBf82f18a9C2809dCd2BB393F6AC5/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x6462Dc91780673BB415F0255f1a3319bd242621E",
            decimal: 18
        }
    }
},
{
    name: "Hunny Token",
    symbol: TokenSymbol.HUNNY,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x565b72163f17849832A692A3c5928cc502f46D69/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x1307B8F9326D5F1dFBa8A963f8827CaF9b76ffc5",
            decimal: 18
        }
    }
},
{
    name: "Injective Protocol",
    symbol: TokenSymbol.INJ,
    icon: "https://tokens.pancakeswap.finance/images/0xa2B726B1145A4773F68593CF171187d8EBe4d495.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x1b457C2b3dbb40967df35c5c256aD9a6B3a4c363",
            decimal: 18
        }
    }
},
{
    name: "IoTeX Network",
    symbol: TokenSymbol.IOTX,
    icon: "https://tokens.pancakeswap.finance/images/0x9678E42ceBEb63F23197D726B29b1CB20d0064E5.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xa4795445a9EDcD45d9f24430440F78Ab5324DB35",
            decimal: 18
        }
    }
},
{
    name: "Kaby Arena",
    symbol: TokenSymbol.KABY,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x02A40C048eE2607B5f5606e445CFc3633Fb20b58/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x25E8A99185e733CeBEA9b9d91b7D4bd20b3780e3",
            decimal: 18
        }
    }
},
{
    name: "KmonCoin",
    symbol: TokenSymbol.KMON,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xc732B6586A93b6B7CF5FeD3470808Bc74998224D/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xe11498615fe9a73fa3Bbc398ee6c42Bb3dD2e268",
            decimal: 18
        }
    }
},
{
    name: "Linear Token",
    symbol: TokenSymbol.LINA,
    icon: "https://tokens.pancakeswap.finance/images/0x762539b45A1dCcE3D36d080F74d1AED37844b878.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xa30Ccb650e880De0223297dbb9A84B290981f011",
            decimal: 18
        }
    }
},
{
    name: "ChainLink Token",
    symbol: TokenSymbol.LINK,
    icon: "https://tokens.pancakeswap.finance/images/0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x954c0Bfb78FBE4eEd6A5D3CDa4146fA2aC5499E6",
            decimal: 18
        }
    }
},
{
    name: "Mask Network",
    symbol: TokenSymbol.MASK,
    icon: "https://tokens.pancakeswap.finance/images/0x2eD9a5C8C13b93955103B9a7C167B67Ef4d568a3.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x2d0aD78463287eb0374929f7c153257814Fbf780",
            decimal: 18
        }
    }
},
{
    name: "Mobox",
    symbol: TokenSymbol.MBOX,
    icon: "https://tokens.pancakeswap.finance/images/0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x727dAf762EE39753D5990Ff0F606398656B18DBd",
            decimal: 18
        }
    }
},
{
    name: "MiniFootball",
    symbol: TokenSymbol.MINIFOOTBALL,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xD024Ac1195762F6F13f8CfDF3cdd2c97b33B248b/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x99237a9beA707896aB0a556B04129D7714a4E09C",
            decimal: 18
        }
    }
},
{
    name: "Mist",
    symbol: TokenSymbol.MIST,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x68E374F856bF25468D365E539b700b648Bf94B67/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x70Cf6f2321FaAE99Df132822DABB5580241c0e8A",
            decimal: 18
        }
    }
},
{
    name: "Mound Token",
    symbol: TokenSymbol.MND,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x4c97c901B5147F8C1C7Ce3c5cF3eB83B44F244fE/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xecb03cca7ce56dEAD62a6fFb8E139eA17C3A4A4d",
            decimal: 18
        }
    }
},
{
    name: "Monsta Infinite Token",
    symbol: TokenSymbol.MONI,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x9573c88aE3e37508f87649f87c4dd5373C9F31e0/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xb9077560EE145Dc125b4d8327808acf133Cf11C2",
            decimal: 18
        }
    }
},
{
    name: "Nafter",
    symbol: TokenSymbol.NAFT,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xD7730681B1DC8f6F969166B29D8A5EA8568616a3/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x2d21c46bb07F5EE2ec7bfeC49e58d413508424aa",
            decimal: 18
        }
    }
},
{
    name: "Nobility",
    symbol: TokenSymbol.NBL,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xA67a13c9283Da5AABB199Da54a9Cb4cD8B9b16bA/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xD69b95CD3B9Ad77C4F410bBa3ac9782674bE9aAE",
            decimal: 18
        }
    }
},
{
    name: "NFTB",
    symbol: TokenSymbol.NFTB,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xde3dbBE30cfa9F437b293294d1fD64B26045C71A/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xBb19c8F91bD202c23433305f759A943cEfd2fF9f",
            decimal: 18
        }
    }
},
{
    name: "Nerve",
    symbol: TokenSymbol.NRV,
    icon: "https://tokens.pancakeswap.finance/images/0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x7427Abfe36ed6685391993b5e0c8bA014836c7EE",
            decimal: 18
        }
    }
},
{
    name: "Harmony ONE",
    symbol: TokenSymbol.ONE,
    icon: "https://tokens.pancakeswap.finance/images/0x03fF0ff224f904be3118461335064bB48Df47938.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xB4ce129B84225F47e889e212d0Ef88491E30BcC1",
            decimal: 18
        }
    }
},
{
    name: "PAID Network",
    symbol: TokenSymbol.PAID,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xAD86d0E9764ba90DDD68747D64BFfBd79879a238/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xFeE7C57b21f943aABDB1eaE7d1e1D97Fc50Cd0AC",
            decimal: 18
        }
    }
},
{
    name: "PET GAMES",
    symbol: TokenSymbol.PETG,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x09607078980CbB0665ABa9c6D1B84b8eAD246aA0/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xD78A9eB8Fc689791A52014E166bc01AF58b57A68",
            decimal: 18
        }
    }
},
{
    name: "Pink Token",
    symbol: TokenSymbol.PINK,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x9133049Fb1FdDC110c92BF5b7Df635abB70C89DC/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x47c45c5065bdBba137504509c819442B306f8ef5",
            decimal: 18
        }
    }
},
{
    name: "Polkamon",
    symbol: TokenSymbol.PMON,
    icon: "https://tokens.pancakeswap.finance/images/0x1796ae0b0fa4862485106a0de9b654eFE301D0b2.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x5702948FeE20aaa6ecc60548FccE257F7dE1CBb5",
            decimal: 18
        }
    }
},
{
    name: "Poco Token",
    symbol: TokenSymbol.POCO,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x394bBA8F309f3462b31238B3fd04b83F71A98848/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x9aa6E21D31C0AC1b22D08682e59218AC2875636f",
            decimal: 18
        }
    }
},
{
    name: "Moonpot",
    symbol: TokenSymbol.POTS,
    icon: "https://tokens.pancakeswap.finance/images/0x3Fcca8648651E5b974DD6d3e50F61567779772A8.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xf53Ab70Bc3D0040EA11f0b0B5387551876942b57",
            decimal: 18
        }
    }
},
{
    name: "Plant vs Undead Token",
    symbol: TokenSymbol.PVU,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x31471E0791fCdbE82fbF4C44943255e923F1b794/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xDEF6a9cd2BB58dE07e4f04Fc6285Fafe7469C5d9",
            decimal: 18
        }
    }
},
{
    name: "PandaInu Wallet Token",
    symbol: TokenSymbol.PWT,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xf3eDD4f14a018df4b6f02Bf1b2cF17A8120519A2/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xf0C3B3ea94001286938Fd8020a608CFb4B38364e",
            decimal: 18
        }
    }
},
{
    name: "Qubit Token",
    symbol: TokenSymbol.QBT,
    icon: "https://tokens.pancakeswap.finance/images/0x17B7163cf1Dbd286E262ddc68b553D899B93f526.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xA44e69aABe0678cb460d8F5A7304dEd5377fB351",
            decimal: 18
        }
    }
},
{
    name: "Radio Caca V2",
    symbol: TokenSymbol.RACA,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x12BB890508c125661E03b09EC06E404bc9289040/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x29D9106218CD36eFE219Ff586903bAE4Be7a8242",
            decimal: 18
        }
    }
},
{
    name: "RAMP DEFI",
    symbol: TokenSymbol.RAMP,
    icon: "https://tokens.pancakeswap.finance/images/0x8519EA49c997f50cefFa444d240fB655e89248Aa.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x52Cb20cE2e3f68BCF0D8E206155Dc064d34a61A0",
            decimal: 18
        }
    }
},
{
    name: "Reef.finance",
    symbol: TokenSymbol.REEF,
    icon: "https://tokens.pancakeswap.finance/images/0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x9d8EF16C4c52d712aB4586E854e85ae657e561bc",
            decimal: 18
        }
    }
},
{
    name: "rUSD",
    symbol: TokenSymbol.RUSD,
    icon: "https://tokens.pancakeswap.finance/images/0x07663837218A003e66310a01596af4bf4e44623D.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xbc922C137281E3c5808ebBda1bCB7e078Cb8080B",
            decimal: 18
        }
    }
},
{
    name: "SafePal Token",
    symbol: TokenSymbol.SFP,
    icon: "https://tokens.pancakeswap.finance/images/0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xF238B30295c67183B127d354d8d7F9BC5622c800",
            decimal: 18
        }
    }
},
{
    name: "SeedifyFund",
    symbol: TokenSymbol.SFUND,
    icon: "https://tokens.pancakeswap.finance/images/0x477bC8d23c634C154061869478bce96BE6045D12.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x4a8ae1B809460563e66d2a0b71A0C8Fc488B199f",
            decimal: 18
        }
    }
},
{
    name: "Shirtum",
    symbol: TokenSymbol.SHI,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x7269d98Af4aA705e0B1A5D8512FadB4d45817d5a/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x492F8Ec52b4a779cAF7d80A94efa3d4c58eaE56f",
            decimal: 18
        }
    }
},
{
    name: "CryptoBlades Skill Token",
    symbol: TokenSymbol.SKILL,
    icon: "https://tokens.pancakeswap.finance/images/0x154A9F9cbd3449AD22FDaE23044319D6eF2a1Fab.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x7846E2559EA475B69d439e6B318CD180389a70AD",
            decimal: 18
        }
    }
},
{
    name: "StarMon",
    symbol: TokenSymbol.SMON,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xAB15B79880f11cFfb58dB25eC2bc39d28c4d80d2/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x66158165D78D162dE492E29e6d461d6A7013A987",
            decimal: 18
        }
    }
},
{
    name: "Splintershards",
    symbol: TokenSymbol.SPS,
    icon: "https://tokens.pancakeswap.finance/images/0x1633b7157e7638C4d6593436111Bf125Ee74703F.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x6Cb958AE03Fe35E251479C95BDe02E0540093076",
            decimal: 18
        }
    }
},
{
    name: "SushiToken",
    symbol: TokenSymbol.SUSHI,
    icon: "https://tokens.pancakeswap.finance/images/0x947950BcC74888a40Ffa2593C5798F11Fc9124C4.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x172a607Db1cE3Af3fe161D729389EAc601e5e043",
            decimal: 18
        }
    }
},
{
    name: "Swipe",
    symbol: TokenSymbol.SXP,
    icon: "https://tokens.pancakeswap.finance/images/0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xCF75f07d45B9880aCa089a812875f063a9F2c56E",
            decimal: 18
        }
    }
},
{
    name: "Tokocrypto Token",
    symbol: TokenSymbol.TKO,
    icon: "https://tokens.pancakeswap.finance/images/0x9f589e3eabe42ebC94A44727b3f3531C0c877809.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x4C0726C6F839b5c8b3239094763935a87fb01711",
            decimal: 18
        }
    }
},
{
    name: "Alien Worlds Trilium",
    symbol: TokenSymbol.TLM,
    icon: "https://tokens.pancakeswap.finance/images/0x2222227E22102Fe3322098e4CBfE18cFebD57c95.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xDDE663b9321F8C6b4E4F11695d4917d625A3d9a5",
            decimal: 18
        }
    }
},
{
    name: "TokenPocket Token",
    symbol: TokenSymbol.TPT,
    icon: "https://tokens.pancakeswap.finance/images/0xECa41281c24451168a37211F0bc2b8645AF45092.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xA40A1fed90BaC934cA1acC46CEcFF19f0adEde1C",
            decimal: 18
        }
    }
},
{
    name: "TRONPAD.network",
    symbol: TokenSymbol.TRONPAD,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x1Bf7AedeC439D6BFE38f8f9b20CF3dc99e3571C4/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x3B997B77cE4A81eea4D95a6dFaF9FfBf9b5785Aa",
            decimal: 18
        }
    }
},
{
    name: "TRON",
    symbol: TokenSymbol.TRX,
    icon: "https://tokens.pancakeswap.finance/images/0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x306323027268609D03b79E59D62601190a4e9d8B",
            decimal: 18
        }
    }
},
{
    name: "TrusterCoin",
    symbol: TokenSymbol.TSC,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xA2a26349448ddAfAe34949a6Cc2cEcF78c0497aC/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xE418034dbAfa1B60D4557a0B1C92934867207A06",
            decimal: 18
        }
    }
},
{
    name: "TrueUSD",
    symbol: TokenSymbol.TUSD,
    icon: "https://tokens.pancakeswap.finance/images/0x14016E85a25aeb13065688cAFB43044C2ef86784.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x80543D46812152ddf6251Be90826ad98D64bdeb0",
            decimal: 18
        }
    }
},
{
    name: "Trust Wallet",
    symbol: TokenSymbol.TWT,
    icon: "https://tokens.pancakeswap.finance/images/0x4B0F1812e5Df2A09796481Ff14017e6005508003.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x1F202D05479204072D12e9a78C3Bb8b961ae2d25",
            decimal: 18
        }
    }
},
{
    name: "UNCL on xDai on BSC",
    symbol: TokenSymbol.UNCL,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E8D5504bF54D9E44260f8d153EcD5412130CaBb/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xA309c0F07c70dc451b07a48b64889B8aff18Cde8",
            decimal: 18
        }
    }
},
{
    name: "UniCrypt on xDai on BSC",
    symbol: TokenSymbol.UNCX,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x09a6c44c3947B69E2B45F4D51b67E6a39ACfB506/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x9974292eAeC42179DE3068b424D8d1788721b171",
            decimal: 18
        }
    }
},
{
    name: "Uniswap",
    symbol: TokenSymbol.UNI,
    icon: "https://tokens.pancakeswap.finance/images/0xBf5140A22578168FD562DCcF235E5D43A02ce9B1.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x3761fA3a3602b946D7b8DCeef723F19F8B05cF83",
            decimal: 18
        }
    }
},
{
    name: "Wrapped UST Token",
    symbol: TokenSymbol.UST,
    icon: "https://tokens.pancakeswap.finance/images/0x23396cF899Ca06c4472205fC903bDB4de249D6fC.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x7CcB6fF038e1132cfC09f30c7740076C3206319C",
            decimal: 18
        }
    }
},
{
    name: "VAI Stablecoin",
    symbol: TokenSymbol.VAI,
    icon: "https://tokens.pancakeswap.finance/images/0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xc6Bd3d41addc04a95f65E158BB57132672cAaFFc",
            decimal: 18
        }
    }
},
{
    name: "Wanaka Farm",
    symbol: TokenSymbol.WANA,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x339C72829AB7DD45C3C52f965E7ABe358dd8761E/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x9277B890f72126C94323bbc0B80758d6029d1adA",
            decimal: 18
        }
    }
},
{
    name: "WEYU",
    symbol: TokenSymbol.WEYU,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xFAfD4CB703B25CB22f43D017e7e0d75FEBc26743/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x47e34edB068162a262937a8C78CC176Eb551A43d",
            decimal: 18
        }
    }
},
{
    name: "WINk",
    symbol: TokenSymbol.WIN,
    icon: "https://tokens.pancakeswap.finance/images/0xaeF0d72a118ce24feE3cD1d43d383897D05B4e99.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x8572a2152464cC4917F0595DB82B76eE3b89192A",
            decimal: 18
        }
    }
},
{
    name: "XRP Token",
    symbol: TokenSymbol.XRP,
    icon: "https://tokens.pancakeswap.finance/images/0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0xA9088ddBAc6bEa98E68Cb34216090e23d87DAB64",
            decimal: 18
        }
    }
},
{
    name: "XWG",
    symbol: TokenSymbol.XWG,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x6b23C89196DeB721e6Fd9726E6C76E4810a464bc/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x6866DFD2Fbc13FE63D99242Ec5b3E3734d414851",
            decimal: 18
        }
    }
},
{
    name: "YAY Games",
    symbol: TokenSymbol.YAY,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x524dF384BFFB18C0C8f3f43d012011F8F9795579/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x6F72a9383f84e7f58Af5e7FecC52638339b921d7",
            decimal: 18
        }
    }
},
{
    name: "ZomaInfinity",
    symbol: TokenSymbol.ZIN,
    icon: "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xFbe0b4aE6E5a200c36A341299604D5f71A5F0a48/logo.png",
    chains: [ChainId.Izumi],
    contracts: {
        [ChainId.Izumi]: {
            address: "0x8E0BB4D3446F0259854a2d4153C72eeF82b165b5",
            decimal: 18
        }
    }
}
]