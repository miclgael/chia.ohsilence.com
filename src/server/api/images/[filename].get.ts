// Fetches up to 100 images using Cloudflare Images API
import { useLogger } from '@nuxt/kit'

// Use Nuxt's built-in consola instance
const logger = useLogger()

export default defineEventHandler(async (event) => { 
  const filename = event.context.params.filename
  const images:Promise<any>|any = await $fetch('/api/images/list')

  try {
    // Filter images by filename only return one image object
    const filteredImages = images.filter((image:any) => image.filename.includes(filename))
    logger.info(`Fetched image by its file name \`/api/images/[${filename}]\``)
    
    // Return filtered images
    return filteredImages[0]
  } catch (error) {
    logger.error(error)
    return { error: 'An error occurred' } 
  }
})
