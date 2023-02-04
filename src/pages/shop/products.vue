<script setup>
const { data:products } = await useFetch('/api/shop/products-mock')
</script>

<template>
  <c-section>
    <organisms-product-card-list :data="products" />
  </c-section>
</template>
