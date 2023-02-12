<script setup lang="ts">
interface Props {
  src: string
  alt: string
  width?: number
  height?: number
  errorMessage?: string
}

// Define typed props
const props = defineProps<Props>()

// Use the image hook, which returns a public and low-res "blur" image.
const image = await useImageSingle(props.src)

// Error handling
const error = image.error
</script>

<template>
  <div v-if="src && !error">
    <nuxt-img 
      :src="image.public" 
      :placeholder="image.blur"
      :alt="props.alt" 
      :width="`${props.width}px`"
      :height="`${props.height}px`"
      loading="lazy" 
      class="chia-image" 
    />
  </div>
  <div
    v-else
    class="chia-image chia-image--error"
  >
    <p>{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
.chia-image {
  display: block;
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
}

.chia-image--error {
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
}
</style>
