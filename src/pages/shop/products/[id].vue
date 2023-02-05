<script setup lang="ts">
const route = useRoute()
const { data } = await useFetch('/api/shop/products/' + route.params.id)
const product = data.value as Product
</script>

<template>
  <c-section>
    <pre>{{ product }}</pre>
    <molecules-product-card :product="product" />
  </c-section>
</template>
