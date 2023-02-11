<script setup lang="ts">
const { current, alumni } = await useArtists()
</script>

<template>
  <div>
    <h3>Current Artists</h3>
    <ul>
      <li v-for="artist in current" :key="artist.slug">
        <nuxt-link :to="`/artist/${artist.slug}`">{{ artist.name }}</nuxt-link>
      </li>
    </ul>
    <h3 v-if="$route.name === 'artists'">
      Alumni
    </h3>
    <ul v-if="$route.name === 'artists'">
      <li v-for="artist in alumni" :key="artist.slug">
        <nuxt-link :to="`/artist/${artist.slug}`">{{ artist.name }}</nuxt-link>
      </li>
    </ul>
    <div v-if="$route.name !== 'artists'">
      <nuxt-link to="/artists">View all artists &rarr;</nuxt-link>
    </div>
  </div>
</template>
