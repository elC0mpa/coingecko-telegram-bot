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
}

const searchService = new SearchService()
export default searchService
