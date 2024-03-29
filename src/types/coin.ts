export type CoinDataResponse = {
  id: string
  symbol: string
  name: string
  web_slug: string
  asset_platform_id: null
  block_time_in_minutes: number
  hashing_algorithm: string
  categories: string[]
  preview_listing: boolean
  public_notice: null
  additional_notices: any[]
  localization: Locale
  description: Locale
  links: Links
  image: CoinDataImage
  country_origin: string
  genesis_date: Date
  sentiment_votes_up_percentage: number
  sentiment_votes_down_percentage: number
  watchlist_portfolio_users: number
  market_cap_rank: number
  market_data: MarketData
  status_updates: any[]
  last_updated: Date
}

type Locale = {
  en: string
  de: string
  es: string
  fr: string
  it: string
  pl: string
  ro: string
  hu: string
  nl: string
  pt: string
  sv: string
  vi: string
  tr: string
  ru: string
  ja: string
  zh: string
  'zh-tw': string
  ko: string
  ar: string
  th: string
  id: string
  cs: string
  da: string
  el: string
  hi: string
  no: string
  sk: string
  uk: string
  he: string
  fi: string
  bg: string
  hr: string
  lt: string
  sl: string
}

type CoinDataImage = {
  thumb: string
  small: string
  large: string
}

type Links = {
  homepage: string[]
  whitepaper: string
  blockchain_site: string[]
  official_forum_url: string[]
  chat_url: string[]
  announcement_url: string[]
  twitter_screen_name: string
  facebook_username: string
  telegram_channel_identifier: string
  subreddit_url: string
  repos_url: ReposURL
}

type ReposURL = {
  github: string[]
  bitbucket: any[]
}

export type MarketData = {
  current_price: { [key: string]: number }
  total_value_locked: null
  mcap_to_tvl_ratio: null
  fdv_to_tvl_ratio: null
  roi: null
  ath: { [key: string]: number }
  ath_change_percentage: { [key: string]: number }
  ath_date: { [key: string]: Date }
  atl: { [key: string]: number }
  atl_change_percentage: { [key: string]: number }
  atl_date: { [key: string]: Date }
  market_cap: { [key: string]: number }
  market_cap_rank: number
  fully_diluted_valuation: { [key: string]: number }
  market_cap_fdv_ratio: number
  total_volume: { [key: string]: number }
  high_24h: { [key: string]: number }
  low_24h: { [key: string]: number }
  price_change_24h: number
  price_change_percentage_24h: number
  price_change_percentage_7d: number
  price_change_percentage_14d: number
  price_change_percentage_30d: number
  price_change_percentage_60d: number
  price_change_percentage_200d: number
  price_change_percentage_1y: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  price_change_24h_in_currency: { [key: string]: number }
  price_change_percentage_1h_in_currency: { [key: string]: number }
  price_change_percentage_24h_in_currency: { [key: string]: number }
  price_change_percentage_7d_in_currency: { [key: string]: number }
  price_change_percentage_14d_in_currency: { [key: string]: number }
  price_change_percentage_30d_in_currency: { [key: string]: number }
  price_change_percentage_60d_in_currency: { [key: string]: number }
  price_change_percentage_200d_in_currency: { [key: string]: number }
  price_change_percentage_1y_in_currency: { [key: string]: number }
  market_cap_change_24h_in_currency: { [key: string]: number }
  market_cap_change_percentage_24h_in_currency: { [key: string]: number }
  total_supply: number
  max_supply: number
  circulating_supply: number
  last_updated: Date
}
