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
      <h2>Shop now open</h2>
      <atoms-c-button href="https://shop.ohsilence.com/">
        Shop &rarr;
      </atoms-c-button>
    </div>

    <div>
      <h2>
        Latest
      </h2>
      <nuxt-link to="/interviews/musician">
        Read Musician: Interview with Camryn Rothenbury &rarr;
      </nuxt-link>
    </div>

    <molecules-list-artists show="current" />

    <div>
      <nuxt-link to="/artists">
        View all artists &rarr;
      </nuxt-link>
    </div>
  </c-section>
</template>
