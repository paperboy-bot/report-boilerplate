const fetch = require('isomorphic-fetch')
module.exports = async coin => {
  const response = await fetch(
    'https://api.coinmarketcap.com/v1/ticker/?limit=100'
  )
  const data = await response.json()

  return data.find(d => d.id === coin)
}
