import { SearchResponse } from '../types/search'
import { BaseService } from './baseService'

class SearchService extends BaseService {
  constructor() {
    super('search/')
  }

  searchCriptos = (query: string): Promise<SearchResponse[]> => {
    const url = `${this.moduleURL}?query=${query}`
    return this.client.get(url).then(({ data }) => data.coins)
  }

  trendingData = (): Promise<Partial<SearchResponse[]>> => {
    const url = `${this.moduleURL}/trending`
    return this.client.get(url).then(({ data }) =>
      data.coins.map(coin => {
        return {
          id: coin.item.id,
        }
      })
    )
  }
}

const searchService = new SearchService()
export default searchService
