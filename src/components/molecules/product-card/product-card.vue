<script setup lang="ts">
interface Props {
  product: Product;
}

// Typed props
defineProps<Props>()

// Currency formatter
const $ = (cents: number) => (cents / 100).toLocaleString('en-AU', { style: 'currency', currency: 'AUD' })
</script>

<template>
  <article class="product-card">
    <header>
      <h3>{{ product.title }}</h3>
    </header>

    <molecules-image-carousel :images="product?.images" />

    <details>
      <summary>Product Details</summary>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="product.description" />
    </details>

    <footer>
      <atoms-c-button>
        Buy Now for {{ $(product.variants[0]?.price) }}
      </atoms-c-button>
    </footer>
  </article>
</template>


<style scoped>
.product-card {
  margin-top: 0;
  margin-bottom: 0;

  display: grid;
  grid-template-rows: 1fr auto auto auto;

  background-color: var(--color-white, #fff);
}

article>header h3,
article>header {
  margin-bottom: 0;
}
</style>
