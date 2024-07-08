import { CoinDataResponse } from '../types/coin'
import { BaseService } from './baseService'

class CoinService extends BaseService {
  constructor() {
    super('coins/')
  }

  getCoinData = (id: string): Promise<CoinDataResponse> => {
    const url = `${this.moduleURL}${id}?tickers=false&community_data=false&developer_data=false&sparkline=false&developer_data=false`
    return this.client.get(url).then(({ data }) => data)
  }
}

const coinService = new CoinService()
export default coinService
