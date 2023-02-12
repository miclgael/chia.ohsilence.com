<script setup lang="ts">
// MG's admittedly quite average helper library
import { useHelpers } from "@miclgael/use-helpers"

// Use route slug to pluck artist info
const route = useRoute()
const slug = route.params.slug

// Pluck the artist info
const { getArtistBySlug } = useArtists()
const artist: Artist = getArtistBySlug(slug as string)

// Pluck helper functions
const { commaSeparator, prettyDate } = useHelpers()

// Set page title and meta description
useHead({
  title: artist.name,
  meta: [
    {
      name: `description`,
      content: `${artist.name}'s artist profile on Oh Silence Record Co`,
    },
  ],
});
</script>

<template>
    <c-section v-if="artist">
      <h3>{{ artist.name }}</h3>
      
      <figure v-if="artist.image">
        <atoms-c-img
          :src="artist.image.src"
          :alt="artist.image.alt"
          :width="artist.image.width"
          :height="artist.image.height"
        />
        <figcaption>
          <em>{{ artist.image.caption }}</em>
        </figcaption>
      </figure>

      <div class="blurb" v-html="artist.bio"></div>

      <div v-if="artist.releases.length >= 1">
        <h3>Releases</h3>
        <aside>
          <ul role="list" class="release-grid">
            <li role="listitem"
              v-for="release in artist.releases"
              :key="release.title.toLowerCase()"
            >
              <article class="grid card">
                <atoms-c-img 
                  v-if="release.artwork"
                  class="card-thumbnail"
                  :src="`${release.artwork}`"
                  :alt="`Cover art from ${release.title} by ${release.artistName}`"
                />

                <div class="card-info">
                  <h4>
                    <nuxt-link :to="`/releases/${release.id}`">
                      <span>{{ release.title }}</span>
                      <small> ({{ release.type }}) </small>
                    </nuxt-link>
                  </h4>

                  <p>Released {{ prettyDate(release.date) }}</p>

                  <p>
                    Listen on
                    <span
                      class="release-links"
                      v-for="(link, count) in release.links"
                      :key="`link--${count}`"
                    >
                      <a :href="link.url"> {{ link.text }} &nearr;</a
                      >
                      <span>{{ commaSeparator(release.links, count) }}</span>
                    </span>
                  </p>

                  <p>
                    <nuxt-link
                      :to="`/releases/${release.id}`"
                      role="button"
                      class="primary"
                      >Learn more &rarr;</nuxt-link
                    >
                  </p>
                </div>
              </article>
            </li>
          </ul>
        </aside>
      </div>

    <footer>
      <div>
        <nuxt-link to="/artists">&larr; Return to artists</nuxt-link>
      </div>
    </footer>
  </c-section>
</template>


<style scoped>
.blurb {
  max-width: 768px;
}

.release-links a {
  display: inline-block;
}

@media screen and (min-width: 992px) {
  .grid {
    grid-template-columns: fit-content(370px) 7fr;
  }
}

.card {
  padding: unset;
}

@media screen and (min-width: 1920px) {
  .card {
    height: 100%;
  }

  .release-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--block-spacing-vertical);
  }
}

:deep(.card-thumbnail .chia-image) {
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  height: 100%;
}

@media screen and (min-width: 992px) {
  :deep(.card-thumbnail .chia-image) {
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
    border-top-right-radius: unset;
  }
}

.card-info {
  padding: 2rem;
}

@media screen and (min-width: 992px) {
  .card-info {
    padding: calc(var(--block-spacing-vertical) * 0.5) var(--block-spacing-horizontal);
  }
}

.card-info p {
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
</style>
