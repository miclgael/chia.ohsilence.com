import products from '../mockData.json'

import { useLogger } from '@nuxt/kit'

// Use Nuxt's built-in consola instance
const logger = useLogger()

export default defineEventHandler(async () => { 
  logger.info('Using mocked data from `printify/products.json`')
  return products
})
