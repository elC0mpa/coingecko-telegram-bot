import axios, { AxiosInstance } from 'axios'

abstract class BaseService {
  client: AxiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
      'x-cg-demo-api-key': process.env.API_TOKEN,
    },
  })
  moduleURL = ''

  /**
   *
   */
  constructor(moduleURL: string) {
    this.moduleURL = moduleURL
  }
}

export { BaseService }
