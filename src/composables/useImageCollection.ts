/**
 * Fetches a collection of images asynchronously
 *
 * @param   {string[]}  filenames  Array of filenames to fetch. Should be in the format: "filename.jpg|png|etc" 
 *
 * @return  {object[]}             Array of {image, filename} objects 
 */
export async function useImageCollection (filenames:string[]) {
  const images = await Promise.allSettled(filenames.map(async (filename) => {
    const image = await $fetch(`/api/images/${filename}`)
    
    // return url and filename, since result could be in any order
    return { filename, src: image.variants[0] }
  })) as { status: 'fulfilled' | 'rejected', value: any, reason: string}[]; 

  // if no value (or rejected) log the fail reason
  images.forEach((image) => {
    if (!image.value && image.reason) {
      console.error(image.reason)
    }
  })

  // Return image url and filename(s)
  return images.map((image) => image.value)
}
