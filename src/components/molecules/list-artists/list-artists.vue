<script setup lang="ts">
const { current, alumni } = useArtists()

type Show = 'current' | 'alumni' | undefined

interface Props {
  show?: Show
}

defineProps<Props>()
</script>

<template>
  <c-section :is-container="false">
    <div v-if="!show || show === 'current'">
      <h3>Current Artists</h3>
      <ul>
        <li
          v-for="artist in current"
          :key="artist.slug"
        >
          <nuxt-link :to="`/artists/${artist.slug}`">
            {{ artist.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div v-if="!show || show === 'alumni'">
      <h3>
        Alumni
      </h3>
      <ul>
        <li
          v-for="artist in alumni"
          :key="artist.slug"
        >
          <nuxt-link :to="`/artists/${artist.slug}`">
            {{ artist.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </c-section>
</template>
