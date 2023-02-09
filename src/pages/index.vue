<script setup lang="ts">
const files = [
  "banner-iamtheagent.jpg",
  "banner-bats-and-battleships.jpg",
  "banner-regresser.jpg",
  "banner-whalebones.jpg",
  "banner-hells.jpg"
]

const banners = await useImageCollection(files)

</script>

<template>
  <c-section> 
    <figure  v-for="(banner, count) in banners" :key="`banner-${count}`" >
      <nuxt-img :src="banner.src" alt="" loading="lazy" />
    </figure>
  </c-section>
</template>
