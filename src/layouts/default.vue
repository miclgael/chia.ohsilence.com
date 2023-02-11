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
    <div class="app-header">
      <app-logo />
      <app-menu-button />
    </div>
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
  <div id="menu-target"></div>
</template>

<style scoped>
.app-header {
  margin-top: calc(var(--typography-spacing-vertical) * 2);
  margin-bottom: calc(var(--typography-spacing-vertical) * 2);

  display: grid;
  grid-template-columns: 1fr 100px;
}
</style>
