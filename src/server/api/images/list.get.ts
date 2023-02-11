// Fetches up to 100 images using Cloudflare Images API
import { useLogger } from '@nuxt/kit'

// Use environment variables for Printify API
const config = useRuntimeConfig()

// Use Nuxt's built-in consola instance
const logger = useLogger()

// Set up Cloudflare API options
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${config.CF_API_TOKEN}`
  }
};

// Fetch images from Cloudflare API
export default defineEventHandler(async (event) => { 
  return await fetch(`https://api.cloudflare.com/client/v4/accounts/${config.CF_ACCOUNT_ID}/images/v1`, options)
    .then(res => res.json())
    .then(data => { 
      logger.info('Fetched image data from `cloudflare/images/v1`')
      return data.result.images
    })
    .catch(err => {
      logger.error(err)
      return { error: 'An error occurred when fetching from server' }
    })
})
