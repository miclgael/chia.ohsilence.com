<script setup lang="ts">
import { useHelpers } from '@miclgael/use-helpers'
const { commaSeparator } = useHelpers()

const route = useRoute()
const releaseId = route.params.id

const { getReleaseById } = useReleases()
const release = getReleaseById(releaseId as string)

useHead({
  title: `${release.title} ${release.type} by ${release.artistName}`,
  meta: [
    {
      name: 'description',
      content: `Listen to ${release.title} by ${release.artistName} on Oh Silence`
    }
  ]
});
</script>

<template>
  <c-section v-if="release">
    <div class="release">
      <figure v-if="release.artwork">
      <atoms-c-img
        :src="release.artwork"
        :alt="`the album artwork of ${release.title} by ${release.artistName}`"
        :width="700"
        :height="700"
      />
      <figcaption v-if="release.artworkCredit">
        <em>Artwork credit: {{ release.artworkCredit }}</em>
      </figcaption>
    </figure>
    <div v-else class="artwork-missing">(Artwork Missing)</div>
    <div>
      <div class="hgroup">
        <h3>
          {{ release.title }} <small>({{ release.id }})</small>
        </h3>
        <h4>
          <nuxt-link :to="`/artist/${release.artistSlug}`">{{
            release.artistName
          }}</nuxt-link>
        </h4>
      </div>

      <p>{{ release.id }}</p>

      <c-section v-if="release.links" :is-container="false">
        <h4>Listen on</h4>
        <span
          class="release-links"
          v-for="(link, count) in release.links"
          :key="`link--${count}`"
        >
          <a :href="link.url"> {{ link.text }} &nearr; </a>
          <span>{{ commaSeparator(release.links, count) }}</span>
        </span>
      </c-section>

      <c-section v-if="release.tracks" :is-container="false">
        <h4>Tracklist</h4>
        <ol role="list">
          <li
            v-for="track in release.tracks"
            :key="track.title"
            role="listitem"
          >
            <span class="space-between">
              <span>{{ track.title }}</span> <span>{{ track.length }}</span>
            </span>
          </li>
        </ol>
      </c-section>

      <div v-if="release.notes">
        <h4>Release Notes</h4>
        <div v-html="release.notes"></div>
      </div>
    </div>
    </div>
    
    <nuxt-link to="/releases">&larr; Return to Releases</nuxt-link>
  </c-section>
</template>

<style scoped>
@media screen and (min-width: 768px) {
  .release {
    display: grid;
    grid-template-columns: 2fr 4fr;
    grid-gap: 50px;
  }
}

figcaption em {
  font-size: smaller;
}

.artwork-missing {
  background-color: rgb(13, 170, 187);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  font-size: smaller;
}

.space-between {
  display: flex;
  justify-content: space-between;
}

.hgroup>* {
  margin: 0;
}

.hgroup>*:last-child {
  margin-bottom: var(--typography-spacing-vertical);
}

:deep(section) {
  margin-bottom: 50px;
}
</style>
