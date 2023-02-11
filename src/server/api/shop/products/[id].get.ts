// Fetches a single product from Printify API

import { useLogger } from '@nuxt/kit'

// Use environment variables for Printify API
const config = useRuntimeConfig()

// Use Nuxt's built-in consola instance
const logger = useLogger()

export default defineEventHandler(async (event) => { 

  const { id:productId } = event.context.params

  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${config.PRINTIFY_API_KEY}`,
      'User-Agent': 'NodeJS',
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Request-Method': 'GET',
    }
  }

  return await fetch(config.PRINTIFY_BASE_URL + `shops/${config.PRINTIFY_SHOP_ID}/products/${productId}.json`, options)
    .then(res => res.json())
    .then(data => { 
      logger.info(`Fetched single product \`${productId}\` via \`printify/product/[id].json\``)
      return data
    })
    .catch(err => {
      logger.error(err)
      return { error: 'an error occurred' }
    })
})
