<script setup lang="ts">
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
      <h2>
        Latest content
      </h2>
      <ul role="list">
        <li role="listitem">
          <nuxt-link to="/releases/OH-015">
            Listen: Whalebones - NO SOUL DRINK THE BLEACH (SINGLE)
          </nuxt-link>
        </li>
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
        <li role="listitem">
          <nuxt-link to="/releases/OH-013">
            Listen: Whalebones - Every Alterations (LP)
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
