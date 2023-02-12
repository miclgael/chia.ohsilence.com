<script setup lang="ts">
useHead({
  meta: [
    {
      name: 'description',
      content: 'Oh Silence Record Co is an independently owned label with resources for music production and distribution',
    },
  ],
})
</script>

<template>
  <c-section> 
    <molecules-list-artists show="current" />
    <div>
      <nuxt-link to="/artists">View all artists &rarr;</nuxt-link>
    </div>
  </c-section>
</template>
