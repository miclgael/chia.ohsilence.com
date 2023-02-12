<script setup lang="ts">
const { newReleases, completeReleaseList } = useReleases()

const newest = newReleases()

// Chronological list of all releases
const sortedReleases = completeReleaseList().sort((a, b) => {
  return a.date.getMilliseconds() - b.date.getMilliseconds()
})

useHead({
  title: 'Releases',
  meta: [
    {
      name: 'description',
      content: 'Discover new releases from all artists and bands on the Oh Silence label'
    }
  ]
})
</script>

<template>
  <div>
    <c-section v-if="newest">
      <h3>New releases</h3>
      <ul role="list">
        <li
          v-for="(release, count) in newReleases()"
          :key="`release--${count}`"
          role="listitem"
        >
          <nuxt-link :to="`/releases/${release.id}`">
            {{ release.title }} by {{ release.artistName }}
          </nuxt-link>
        </li>
      </ul>
    </c-section>

    <c-section>
      <h3>Complete Release List</h3>
      <ul role="list">
        <li
          v-for="(release, count) in sortedReleases"
          :key="`release--${count}`"
          role="listitem"
        >
          <nuxt-link :to="`/releases/${release.id}`">
            {{ release.title }} by {{ release.artistName }}
          </nuxt-link>
        </li>
      </ul>
    </c-section>
  </div>
</template>
