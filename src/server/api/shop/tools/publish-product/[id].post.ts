// Use this file to re-publish a product via the Printify API (second part of the process)
// Useful for when a product has stopped publishing due to a timeout
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
      title: true,
      description: true,
      images: true,
      variants: true,
      tags: true,
      keyFeatures: true,
      shipping_template: true
    })
  }

  return await fetch(config.PRINTIFY_BASE_URL + `shops/${config.PRINTIFY_SHOP_ID}/products/${productId}/publish.json`, options)
    .then(res => res.json())
    .then(data => { 
      logger.info(`Published \`${productId}\` via \`printify/publish.json\``)
      return data
    })
    .catch(err => {
      logger.error(err)
      return { error: 'an error occurred' }
    })
})
