module.exports = {
  chainID: 'carbon-1',
  lcd: 'https://api.carbon-network',
  gasAdjustment: 1.75,
  gasPrices: { swth: 100000000 },
  prefix: 'swth',
  coinType: '118',
  baseAsset: 'swth',
  name: 'Carbon',
  icon: 'https://drive.google.com/drive/folders/1I7PWM_IJPzddjV9tOkHwpVkEl0xMvXBE',
  ibc: {
    fromTerra: 'channel-36',
    toTerra: 'channel-12',
  }
}
