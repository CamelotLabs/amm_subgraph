// naming in line with subgraph config convention
const ARBITRUM_ONE = "arbitrum-one"
const ARBITRUM_SEPOLIA = "arbitrum-sepolia"
const GRAVITY = "camelot-gravity"
const PROOF_OF_PLAY = "camelot-proofofplay-apex"
const RARI = "camelot-rari"
const REYA = "camelot-reya"
const SANKO = "camelot-sanko"
const XAI = "xai"

class ChainInfo {
  configName: string;
  factory: string;
  wrappedNative: string;
  wrappedNativeUSDCPool: string;
  whitelistTokens: Array<string>;
  stableCoin: string;
  startBlock: number;
  minimumUSDThresholdNewPairs: string;
  minimumLiquidityThresholdETH: string;
  minimumLiquidityETH: string;


  constructor(
    configName: string,
    factory: string,
    wrappedNative: string,
    wrappedNativeUSDCPool: string,
    whitelistTokens: Array<string>,
    stableCoin: string,
    startBlock: number,
    minimumUSDThresholdNewPairs: string,
    minimumLiquidityThresholdETH: string,
    minimumLiquidityETH: string
  ) {
    this.configName = configName.toLowerCase()
    this.factory = factory.toLowerCase()
    this.wrappedNative = wrappedNative.toLowerCase()
    this.wrappedNativeUSDCPool = wrappedNativeUSDCPool.toLowerCase()
    this.whitelistTokens = whitelistTokens
    this.stableCoin = stableCoin.toLowerCase()
    this.startBlock = startBlock
    this.minimumUSDThresholdNewPairs = minimumUSDThresholdNewPairs
    this.minimumLiquidityThresholdETH = minimumLiquidityThresholdETH
    this.minimumLiquidityETH = minimumLiquidityETH
  }
}

class SupportedChains {
  arbitrumOne: ChainInfo;
  arbitrumSepolia: ChainInfo;
  gravity: ChainInfo;
  proofOfPlay: ChainInfo;
  rari: ChainInfo;
  reya: ChainInfo;
  sanko: ChainInfo;
  xai: ChainInfo;

  constructor(arbitrumOne: ChainInfo, arbitrumSepolia: ChainInfo, gravity: ChainInfo, proofOfPlay: ChainInfo, rari: ChainInfo, reya: ChainInfo, sanko: ChainInfo, xai: ChainInfo) {
    this.arbitrumOne = arbitrumOne;
    this.arbitrumSepolia = arbitrumSepolia;
    this.gravity = gravity;
    this.proofOfPlay = proofOfPlay;
    this.rari = rari;
    this.reya = reya;
    this.sanko = sanko;
    this.xai = xai;
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
  35061163,
  "500",
  "0.5",
  "50"
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
  8780258,
  "500",
  "0.5",
  "50"
)

const gravity = new ChainInfo(
  GRAVITY,
  "0x7d8c6B58BA2d40FC6E34C25f9A488067Fe0D2dB4", // factory
  "0xBB859E225ac8Fb6BE1C7e38D87b767e95Fef0EbD", // WG
  "0xA67C07b61dBB705441A1f09cA6D405317175c2b1", // WG-USDC
  [
    "0xBB859E225ac8Fb6BE1C7e38D87b767e95Fef0EbD", // WG
    "0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6", // USDC
    "0x816E810f9F787d669FB71932DeabF6c83781Cd48", // USDT
    "0xf6f832466Cd6C21967E0D954109403f36Bc8ceaA", // WETH
    "0x729ed87bbE7B7e4B7F09BCb9c668580818d98BB9", // WBTC
    "0xBFBBc4dA47508e85AC18DFC961fa182194E85f9a", // DAI
  ],
  "0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6", // USDC
  11985,
  "500",
  "100",
  "100000"
)

const proofOfPlay = new ChainInfo(
  PROOF_OF_PLAY,
  "0x7d8c6B58BA2d40FC6E34C25f9A488067Fe0D2dB4", // factory
  "0x77684A04145a5924eFCE0D92A7c4a2A2E8C359de", // WETH
  "0x8B58441D8787d95BD629a011176a4D6054805876", // WETH-USDC
  [
    "0x77684A04145a5924eFCE0D92A7c4a2A2E8C359de", // WETH
    "0xd7f991cF407C877dc91b2C6aCade45643925cf7a", // USDC
  ],
  "0xd7f991cF407C877dc91b2C6aCade45643925cf7a", // USDC
  26275551,
  "500",
  "0.1",
  "50"
)

const rari = new ChainInfo(
  RARI,
  "0x7d8c6B58BA2d40FC6E34C25f9A488067Fe0D2dB4", // factory
  "0xf037540e51d71b2d2b1120e8432ba49f29edfbd0", // WETH
  "0xa984428c00c878367b12cd49895bf6318734831e", // WETH-USDC
  [
    "0xf037540e51d71b2d2b1120e8432ba49f29edfbd0", // WETH
    "0xfbda5f676cb37624f28265a144a48b0d6e87d3b6", // USDC
    "0x362fae9a75b27bbc550aac28a7c1f96c8d483120", // USDT
  ],
  "0xfbda5f676cb37624f28265a144a48b0d6e87d3b6",
  340544,
  "500",
  "0.1",
  "50"
)

const reya = new ChainInfo(
  REYA,
  "0x7d8c6B58BA2d40FC6E34C25f9A488067Fe0D2dB4", // factory
  "0x6b48c2e6a32077ec17e8ba0d98ffc676dfab1a30", // WETH
  "0x4f37922db35bbf0d89c3f699c24a3152d6a5d9c0", // WETH-RUSD
  [
    "0x6b48c2e6a32077ec17e8ba0d98ffc676dfab1a30", // WETH
    "0xa9f32a851b1800742e47725da54a09a7ef2556a3", // RUSD
  ],
  "0xa9f32a851b1800742e47725da54a09a7ef2556a3", // RUSD
  2932158,
  "500",
  "0.1",
  "50"
)

const sanko = new ChainInfo(
  SANKO,
  "0x7d8c6B58BA2d40FC6E34C25f9A488067Fe0D2dB4", // factory
  "0x754cdad6f5821077d6915004be2ce05f93d176f8", // WDMT
  "0x1ae55ce2c2ff85ea257786ed992873f4d387b2bb", // WDMT-USDC
  [
    "0x754cdad6f5821077d6915004be2ce05f93d176f8", // WDMT
    "0x13d675bc5e659b11cfa331594cf35a20815dcf02", // USDC
    "0xe01e3b20c5819cf919f7f1a2b4c18bbfd222f376" // WETH
  ], // WL tokens[]
  "0x13d675bc5e659b11cfa331594cf35a20815dcf02", // main stable
  45, // start block
  "500", // minUSDThresholdPair
  "1", // minLiqThresholdETH
  "5000", // minLiqETH
)

const xai = new ChainInfo(
  XAI,
  "0x18E621B64d7808c3C47bccbbD7485d23F257D26f", // factory
  "0x3fB787101DC6Be47cfe18aeEe15404dcC842e6AF", // wnative
  "0xcffa8a7e0a2f1256e4c3ed17a153272f7ba6d7c5", // wnative-stable
  [
    "0x3fb787101dc6be47cfe18aeee15404dcc842e6af", // WXAI
    "0x1e3769bd5fb2e9e9e7d4ed8667c947661f9a82e3", // USDC
    "0xbee82cfdaff4a6aa4e4793cb81eb1c2e79ac463c" // WETH
  ], // WL tokens[]
  "0x1e3769bd5fb2e9e9e7d4ed8667c947661f9a82e3", // main stable
  2436883, // start block
  "500", // minUSDThresholdPair
  "50", // minLiqThresholdETH
  "5000", // minLiqETH
)

const supportedChains = new SupportedChains(
  arbitrumOne,
  arbitrumSepolia,
  gravity,
  proofOfPlay,
  rari,
  reya,
  sanko,
  xai
)

// Edit this for the given deployment
const TARGET_CHAIN: ChainInfo = supportedChains.gravity

export {
  TARGET_CHAIN
}