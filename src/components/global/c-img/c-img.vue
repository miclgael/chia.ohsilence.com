<script setup lang="ts">
interface Props {
  src: string
  alt: string
  width?: number|string
  height?: number|string
  large?: boolean
}

// Define typed props
const props = defineProps<Props>()

// Fetch the large image (string is the src)
const largeSrc = async (src:string) => {
  return await $fetch(`/api/image/${src}`)
}

// Determine if we need to use the large image
const safeSrc = props.large === true
  ? await largeSrc(props.src) 
  : `/api/image/${props.src}`

</script>

<template>
  <div v-if="src">
    <img
      :src="safeSrc"
      :alt="props.alt" 
      loading="lazy" 
      class="chia-image" 
    />
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
</style>
