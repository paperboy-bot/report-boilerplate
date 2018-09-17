const _ = require('lodash')
const numeral = require('numeral')
const { telegramTemplate } = require('claudia-bot-builder')

module.exports = options => {
  const formattedVolume = numeral(options.data.volume).format('0.0a')

  return [
    new telegramTemplate.Text(
      `${options.data.symbol} Volume: ${formattedVolume}/1day`
    )
      .addInlineKeyboard([
        [
          {
            text: `More ${_.startCase(options.args[0])} Info`,
            callback_data: 'SUMMARY',
          },
        ],
      ])
      .get(),
  ]
}
