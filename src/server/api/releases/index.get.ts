import { useReleases } from '@/composables/useReleases'

const { completeReleaseList } = useReleases()

export default defineEventHandler(async () => {
  return completeReleaseList()
})
