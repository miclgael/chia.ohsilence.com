<script setup lang="ts">
const { getReleaseById } = useReleases()
const featured = getReleaseById('OH-016')

useHead({
  meta: [
    {
      name: 'description',
      content: 'Oh Silence Record Co is an independently owned label with resources for music production and distribution'
    }
  ]
})
</script>

<template>
  <c-section> 
    <div>
      <h2>NEW RELEASE</h2>
      <h3>
        {{ featured.artistName }} - {{ featured.title }} ({{ featured.type }}) 
      </h3>
      <p>
        <nuxt-link :to="`/releases/${featured.id}`">
          <c-img
            v-if="featured.artwork"
            class="card-thumbnail"
            :src="`${featured.artwork}`"
            :alt="`Cover art from ${featured.title} by ${featured.artistName}`"
            aspect-ratio="1:1"
            style="max-width: 400px;"
          />
        </nuxt-link>
      </p>
      <p>
        <nuxt-link 
          :to="`/releases/${featured.id}`" 
          role="button"
        >
          Learn more ( ˘ ³˘)♥ &rarr;
        </nuxt-link>
      </p>
      <h2>
        Latest content
      </h2>
      <ul role="list">
        <li role="listitem">
          <nuxt-link to="/releases/OH-014">
            Listen: régresser - Trepanning (LIVE)
          </nuxt-link>
        </li>
        <li role="listitem">
          <nuxt-link 
            to="/interviews/musician" 
            :external="false"
          >
            Read: Musician - Interview with Camryn Rothenbury
          </nuxt-link>
        </li>
      </ul>
      <div>
        <nuxt-link 
          to="/releases"
          role="button"
        >
          Discover new releases &rarr;
        </nuxt-link>
      </div>
    </div>
    <br>
    <br>
    <molecules-list-artists show="current" />
    <div>
      <nuxt-link 
        to="/artists"
        role="button"
      >
        View all artists &rarr;
      </nuxt-link>
    </div>
    <br>
    <br>
  </c-section>
</template>

<style scoped>
.shop-cta {
  max-width: fit-content;
}
</style>
