import { useReleases } from '@/composables/useReleases'

const { getReleaseById } = useReleases()

export default defineEventHandler(async (event) => {
  // Filename param from path: src/server/api/release/many/[ids].get.ts
  const ids = event?.context?.params?.ids?.split(',') as OhSilenceReleaseId[]
  
  return ids?.map((releaseId:OhSilenceReleaseId) => {
    return getReleaseById(releaseId)
  })
})
