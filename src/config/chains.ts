// naming in line with subgraph config convention
const ARBITRUM_ONE = "arbitrum-one"
const ARBITRUM_SEPOLIA = "arbitrum-sepolia"

class ChainInfo {
  configName: string;
  factory: string;
  wrappedNative: string;
  wrappedNativeUSDCPool: string;
  whitelistTokens: Array<string>;
  stableCoin: string;
  startBlock: number;

  constructor(
    configName: string,
    factory: string,
    wrappedNative: string,
    wrappedNativeUSDCPool: string,
    whitelistTokens: Array<string>,
    stableCoin: string,
    startBlock: number
  ) {
    this.configName = configName
    this.factory = factory;
    this.wrappedNative = wrappedNative;
    this.wrappedNativeUSDCPool = wrappedNativeUSDCPool;
    this.whitelistTokens = whitelistTokens;
    this.stableCoin = stableCoin;
    this.startBlock = startBlock;
  }
}

class SupportedChains {
  arbitrumOne: ChainInfo;
  arbitrumSepolia: ChainInfo;

  constructor(arbitrumOne: ChainInfo, arbitrumSepolia: ChainInfo) {
    this.arbitrumOne = arbitrumOne;
    this.arbitrumSepolia = arbitrumSepolia;
  }
}

const arbitrumOne = new ChainInfo(
  ARBITRUM_ONE,
  "0x6EcCab422D763aC031210895C81787E87B43A652",
  '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
  '0x84652bb2539513baf36e225c930fdd8eaa63ce27',
  [
    '0x82af49447d8a07e3bd95bd0d56f35241523fbab1', // WETH
    '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8', // USDC.e
    '0xaf88d065e77c8cc2239327c5edb3a432268e5831', // USDC
    '0x912ce59144191c1204e64559fe8253a0e49e6548', // ARB
    '0xd74f5255d557944cf7dd0e45ff521520002d5748', // USDs
    '0x1622bf67e6e5747b81866fe0b85178a93c7f86e3', // UMAMI
    '0x6c2c06790b3e3e3c38e12ee22f8183b37a13ee55', // DPX
    '0x5979d7b546e38e414f7e9822514be443a4800529', // wstETH
    '0x6cda1d3d092811b2d48f7476adb59a6239ca9b95', // stafi-rETH
    '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9', // USDT
    '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1', // DAI
  ],
  "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
  35061163
)

const arbitrumSepolia = new ChainInfo(
  ARBITRUM_SEPOLIA,
  "0x18E621B64d7808c3C47bccbbD7485d23F257D26f",
  "0x980b62da83eff3d4576c647993b0c1d7faf17c73",
  "0x35142e6410a060546f89fe5dc865eb13fdff5514",
  [
    '0x980b62da83eff3d4576c647993b0c1d7faf17c73', // WETH
    '0xb893e3334d4bd6c5ba8277fd559e99ed683a9fc7', // USDC
  ],
  "0xb893e3334d4bd6c5ba8277fd559e99ed683a9fc7",
  8780258
)

const supportedChains = new SupportedChains(
  arbitrumOne,
  arbitrumSepolia
)

// Edit this for the given deployment
const TARGET_CHAIN: ChainInfo = supportedChains.arbitrumOne

export {
  TARGET_CHAIN,
  ARBITRUM_ONE
}