<script setup>
const year = (new Date).getFullYear()
const headerFooterTheme = {
  background: '#000',
  color: '#fff',
}
</script>

<template>
  <c-section element="header" :theme="headerFooterTheme">
    <h1>Oh Silence Records</h1>
  </c-section>
  <c-section element="main" :is-container="false">
    <slot />
  </c-section>
  <c-section element="footer" :theme="headerFooterTheme">
    <p>Michael Gale &copy; 1987 - {{ year }}</p>
  </c-section>
</template>

<style>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
