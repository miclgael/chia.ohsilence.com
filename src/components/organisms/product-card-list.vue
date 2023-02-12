<script setup lang="ts">
interface Props {
  products: Product[]
}
defineProps<Props>()
</script>

<template>
  <div class="product-card-list">
    <h2>Products</h2>
    <!-- <molecules-select-filter /> -->
    <c-grid
      tag="ul"
      role="list"
      :minimum-column-width="24"
      class="product-list"
    >
      <c-grid-cell
        v-for="product in products"
        :key="product.id"
        tag="li"
        role="listitem"
        class="product-list__item"
      >
        <molecules-product-card
          :product="product"
          :data-product-id="product.id"
          class="product-list__card"
        />
      </c-grid-cell>
    </c-grid>
  </div>
</template>

<style scoped>
.product-list {
  padding-left: 0;
}

.product-list__item {
  list-style: none;
  margin-bottom: 0;
  width: 100%;
}
</style>
