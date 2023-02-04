<template>
  <div class="product-card-list">
    <h2>Products</h2>
    <!-- <molecules-select-filter /> -->
    <c-grid tag="ul" role="list" :minimum-column-width="24">
      <c-grid-cell tag="li" v-for="product in data.products" :key="product.id" role="listitem">
        <molecules-product-card :product="product" :data-product-id="product.id" />
      </c-grid-cell>
    </c-grid>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
ul {
  padding-left: 0;
}

li {
  list-style: none;
  margin-bottom: 0;
}
</style>
