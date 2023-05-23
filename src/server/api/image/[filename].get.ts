export default defineEventHandler(async (event) => {
  const { github } = useRuntimeConfig()

  // Filename param from path: src/server/api/image/[filename].get.ts
  const filename = event?.context?.params?.filename

  // Fetch image from GitHub repo
  const image = await fetch(`https://api.github.com/repos/miclgael/images/contents/${filename}`, {
    headers: {
      Authorization: `Bearer ${github.token}`,
    },
  })
    .then(res => res.json())
    .then(data => {
      
      if (data.size > 1000000) {
        return data.download_url
      }

      return Buffer.from(data.content, 'base64')
    })
    .catch((err: any) => {
      console.error(err)
    })
    
  return image
})