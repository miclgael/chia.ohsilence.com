<script setup>
import { useStorage, usePreferredDark } from '@vueuse/core'

// Set up dynamic page titles
useHead({
  titleTemplate: (title) => {
    const template = 'Oh Silence | The tiny, independent record label'
    return title
      ? `${title} | ${template}`
      : `${template}`
  }
})

// // Get User's preference from browser/OS
// const prefersDark = usePreferredDark()

// // Store the users preference or fallback to false
// const storedTheme = useStorage('use-dark-theme', prefersDark || false)

// // Either remember, or set false and let global preference decide
// const isDarkMode = ref(storedTheme.value)

// // Set `data-theme` attribute on the `html` element
// const toggleTheme = () => {
//   const update = (!isDarkMode.value) ? 'light' : 'dark'

//   storedTheme.value = isDarkMode.value

//   const html = document.querySelector('html')
//   html?.setAttribute('data-theme', update)
// }

// // Set correct theme on toggle
// onMounted(() => {
//   toggleTheme()
// })

// // Watch reactive property for change and toggle
// watch(() => isDarkMode.value, () => {
//   toggleTheme()
// });

// Copyright year
const year = (new Date).getFullYear()
</script>

<template>
  <div>
    <nuxt-loading-indicator 
      :height="4" 
      color="#390098" 
    />
    <c-section element="header">
      <div class="app-header">
        <app-logo />
        <app-menu-button />
      </div>
    </c-section>
    <c-section
      element="main"
      :is-container="false"
    >
      <slot />
    </c-section>
    <c-section>
      <molecules-c-social-links />
    </c-section>
    <c-section element="footer">
      <p><a href="https://www.michaelgale.dev">Michael Gale</a> &copy; 1987 - {{ year }}</p>
      <!-- <span class="dark-mode-switch">
        <label for="switch">
          <input
            id="switch"
            v-model="isDarkMode"
            type="checkbox"
            name="switch"
            role="switch"
          >
          <span class="sr-only">Toggle Dark Mode</span>
          <span class="switch-emoji">
            <span>☾</span>
          </span>
        </label>
      </span> -->
    </c-section>
  </div>
</template>

<style scoped>
.app-header {
  display: grid;
  grid-template-columns: 1fr 100px;
}
</style>
