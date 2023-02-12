<script setup>
defineProps({
  error: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <c-section>
    <h1>Oops - An error occurred!</h1>
    <p>{{ error.statusCode }} - {{ error.message }}</p>
    <nuxt-link to="/">
      ← Return home
    </nuxt-link>
  </c-section>
</template>
