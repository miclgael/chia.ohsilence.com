<script setup lang="ts">
// const { data } = await useFetch('/api/shop/products')
const { data } = await useFetch('/api/shop/products-mock')
const products = data.value as Product[]

useHead({
  title: 'Products'
})

</script>

<template>
  <c-section>
    <organisms-product-card-list :products="products" />
  </c-section>
</template>
