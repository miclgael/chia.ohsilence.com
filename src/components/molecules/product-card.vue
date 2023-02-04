<template>
  <article class="product-card">
    <header>
      <h3>{{ product.title }}</h3>
    </header>

    <div class="product-image">
      <nuxt-img
        class="product-image__default" 
        :src="defaultImage(product.images).src" 
        alt="Black / white t-shirt with a large logo on the front" 
        loading="lazy" 
        aria-labelledby="product-image-description"
        width="1200"
        height="1200"
      />
      <span class="product-image__position">
        Displaying product from the {{ defaultImage(product.images).position }}
      </span>
    </div>

    <details>
      <summary>Product Details</summary>
      <div v-html="product.description"></div>
    </details>

    <footer>
      <atoms-c-button>
        Buy Now for {{ $(product.variants.at(0).price) }}
      </atoms-c-button>
    </footer>
  </article>
</template>

<script setup>
const props = defineProps({
  product: {
    required: true,
    type: Object,
    validator (obj) {
      // All object keys must be present
      const keys = ['title', 'id', 'images', 'variants', 'description']

      // Check object keys are not undefined
      return keys.map(key => key in obj)
    }
  }
})

// Ensure default image is used for thumbnail
const defaultImage = (images) => {
  return images.find((image) => image.is_default === true)
}

// Currency formatter
const $ = (cents) => (cents / 100).toLocaleString("en-AU", { style: 'currency', currency: 'AUD' })
</script>

<style scoped>
.product-image {
  position: relative;
}

.product-image__position {
  position: absolute;
  top: 1rem;
  right: 1rem;

  background-color: var(--color-primary, rgba(57, 57, 57, 0.5));
  color: var(--color-white, #fff);
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: small;
}

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
