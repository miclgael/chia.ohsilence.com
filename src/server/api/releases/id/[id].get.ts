import { useReleases } from '@/composables/useReleases'

const { getReleaseById } = useReleases()

export default defineEventHandler(async (event) => {
  // Filename param from path: src/server/api/release/id/[id].get.ts
  const releaseId = event?.context?.params?.id
  return getReleaseById(releaseId)
})
