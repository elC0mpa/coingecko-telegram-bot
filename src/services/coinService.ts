import { SearchResult } from '../types/search'
import { BaseService } from './baseService'

class CoinService extends BaseService {
  constructor() {
    super('coins/')
  }

  getCoinData = (id: string): Promise<SearchResult[]> => {
    const url = `${this.moduleURL}${id}?tickers=false&community_data=false&developer_data=false&sparkline=false`
    return this.client.get(url).then(({ data }) => data)
  }
}

const coinService = new CoinService()
export default coinService
