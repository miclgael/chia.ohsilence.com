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
    <h1>uh <span>Oh.</span></h1>
    <h2>An error occurred!</h2>
    <p>{{ error.statusCode }} - {{ error.message }}</p>
    <nuxt-link to="/">
      ← Return home
    </nuxt-link>
  </c-section>
</template>

<style scoped>
h1.span {
  font-size: larger;
}
</style>
