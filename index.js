const facebookTemplate = require('./templates/facebook')
const telegramTemplate = require('./templates/telegram')
const coinmarketcapService = require('./services/coinmarketcap')

module.exports = {
  name: 'Coin Volume Report',
  run: async options => {
    const [coin] = options.args
    try {
      const data = await coinmarketcapService.getCoin(coin)

      const symbol = data.symbol
      const volume = +data['24HVolumeUsd']

      const template =
        options.platform === 'telegram' ? telegramTemplate : facebookTemplate

      return template({ ...options, data: { volume, symbol } })
    } catch (err) {
      throw err
    }
  },
}
