// Set Printify API product its internal published status

import { useLogger } from '@nuxt/kit'

// Use environment variables for Printify API
const config = useRuntimeConfig()

// Use Nuxt's built-in consola instance
const logger = useLogger()

export default defineEventHandler(async (event) => { 

  const { id:productId } = event.context.params

  const options = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.PRINTIFY_API_KEY}`,
      'User-Agent': 'NodeJS',
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Request-Method': 'POST',
    },
    body: JSON.stringify({
      external: {
        id: productId,
        handle: `https://www.ohsilence.com/products/${productId}`
      }
    })
  }

  return await fetch(config.PRINTIFY_BASE_URL + `shops/${config.PRINTIFY_SHOP_ID}/products/${productId}/publishing_succeeded.json`, options)
    .then(res => res.json())
    .then(data => { 
      logger.info(`Stopped publishing \`${productId}\` via \`printify/publishing_succeeded.json\``)
      return data
    })
    .catch(err => {
      logger.error(err)
      return JSON.parse(err)
    })
})
