<script setup lang="ts">
interface Props {
  images: ProductImage[],
  activeImage?: ProductImage
}
defineProps<Props>()
</script>

<template>
  <div class="product-images">
    <ul
      role="list"
      class="image-list"
      draggable="true"
    >
      <li
        v-for="image in images"
        :key="image.src"
        role="listitem"
        class="image-list__item"
      >
        <c-img
          :src="image.src"
          alt="Black and white t-shirt with a logo on the front"
          loading="lazy"
          :width="1200"
          :height="1200"
          class="image-carousel-grid--image"
        />
        <span
          v-if="image?.position !== 'other'"
          class="product-image__position"
        >
          Displaying product from the {{ image?.position }} position
        </span>
        <span
          v-else
          class="product-image__position"
        >
          Model is wearing product
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>

.product-images {
  position: relative;
  overflow: hidden;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

.image-list {
  padding-left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 600%;
  scroll-snap-type: x mandatory;
}

.image-list__item {
  list-style: none;
  margin-bottom: 0;
  /* grid-column: 1;
  grid-row: 1; */
  scroll-snap-align: center;
}

.product-image__position {
  /* position: absolute;
  top: 1rem;
  right: 1rem; */

  background-color: var(--color-primary, rgba(57, 57, 57, 0.5));
  color: var(--color-white, #fff);
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: small;
}
</style>
