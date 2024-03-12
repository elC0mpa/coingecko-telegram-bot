import dayjs from 'dayjs'
import { CoinDataResponse } from '../../../types/coin'

export const getCoinInfo = (coinData: CoinDataResponse): string => {
  const name = `<b> ${coinData.name.toUpperCase()} </b>`
  const currentPrice  = `💰 Precio: ${coinData.market_data.current_price.usd} USD`
  const ath = `🔝 Máximo: ${coinData.market_data.ath.usd} USD (${dayjs(coinData.market_data.ath_date.usd).fromNow()})`
  const change24Hours = `2️⃣4️⃣ H: ${coinData.market_data.price_change_percentage_24h}%`
  const change7Days = `0️⃣7️⃣ D: ${coinData.market_data.price_change_percentage_7d}%`
  const change30Days = `3️⃣0️⃣ D: ${coinData.market_data.price_change_percentage_30d}%`
  return [name, currentPrice, ath, change24Hours, change7Days, change30Days].join('\n')
}
