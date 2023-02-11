/**
 * Returns a single image from the API in two variants: public and blur
 *
 * @param   {string}  filename  Should be in the format: "filename.jpg|png|etc" 
 *
 * @return  {string}            Image src
 */
export async function useImageSingle (filename:string) : Promise<ImageWithVariants> {
  try {
    const image = await $fetch(`/api/images/${filename}`)

    return {
      public: image.variants.find((variant:ImageVariant) => variant.includes('public')),
      blur: image.variants.find((variant:ImageVariant) => variant.includes('blur'))
    }
  } catch (e) {
    return { error: `An error ocurred fetching the image from \`/api/images/${filename}\`` }
  }
}

export type ImageVariant = 'public' | 'blur'

export type ImageWithVariants = {
  public?: string,
  blur?: string
  error?: string
}
