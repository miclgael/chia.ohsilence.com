// This file is used to fetch data from Printify's API
import { useLogger } from '@nuxt/kit'

// Use environment variables for Printify API
const config = useRuntimeConfig()

// Use Nuxt's built-in consola instance
const logger = useLogger()

export default defineEventHandler(async () => { 

  const options = {
    headers: {
      'Authorization': `Bearer ${config.PRINTIFY_API_KEY}`,
      'User-Agent': 'NodeJS',
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Request-Method': 'GET'
    }
  }

  const products = await fetch(config.PRINTIFY_BASE_URL + `shops/${config.PRINTIFY_SHOP_ID}/products.json`, options)
    .then(res => res.json())
    .then(products => { 
      logger.info('Refreshed data from `printify/products.json`')
      return products.data 
    })
    .catch(err => {
      logger.error(err)
      return { error: 'an error occurred' }
    })

  return products as Product[]
})
