<script setup>
const route = useRoute()

const { data:product } = await useFetch('/api/shop/products/' + route.params.id)
</script>

<template>
  <c-section>
    <molecules-product-card :product="product" />
  </c-section>
</template>
