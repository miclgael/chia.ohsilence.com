<script setup>
const year = (new Date).getFullYear()
const headerFooterTheme = {
  background: '#000',
  color: '#fff',
}

// Set up dynamic page titles
useHead({
  titleTemplate: (title) => {
    const template = `Oh Silence | The tiny, independent record label`
    return title
      ? `${title} | ${template}`
      : `${template}`
  }
})

</script>

<template>
  <c-section element="header" :theme="headerFooterTheme">
    <app-logo />
  </c-section>
  <c-section element="main" :is-container="false">
    <slot />
  </c-section>
  <c-section>
    <molecules-c-social-links />
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
