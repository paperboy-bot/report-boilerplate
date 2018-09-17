const _ = require('lodash')
const numeral = require('numeral')
const { fbTemplate } = require('claudia-bot-builder')

module.exports = options => {
  const formattedVolume = numeral(options.data.volume).format('0.0a')

  return [
    new fbTemplate.Button(
      `${options.data.symbol} Volume: ${formattedVolume}/1day`
    )
      .addButton(`More ${_.startCase(options.args[0])} Info`, 'SUMMARY')
      .get(),
  ]
}
