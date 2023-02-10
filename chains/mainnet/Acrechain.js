module.exports = {
  chainID: 'acre_9052-1',
  lcd: 'https://lcd-acre.synergynodes.com/',
  gasAdjustment: 1.75,
  gasPrices: { aacre: 10000000000 },
  prefix: 'acre',
  coinType: '60',
  baseAsset: 'aacre',
  name: 'Acrechain',
  icon: 'https://station-assets.terra.money/img/chains/Acre.svg',
  ibc: {
    fromTerra: 'channel-77',
    toTerra: 'channel-9',
  }
}
