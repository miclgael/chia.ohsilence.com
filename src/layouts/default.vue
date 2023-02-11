<script setup>
import { useStorage, usePreferredDark } from '@vueuse/core'

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

// Theming
const { menuActive, container, containerWide } = useSimpleState()

// Get User's preference from browser/OS
const prefersDark = usePreferredDark()

// Store the users preference or fallback to false
const storedTheme = useStorage('use-dark-theme', prefersDark || false)

// Either remember, or set false and let global preference decide
const isDarkMode = ref(storedTheme.value)

// Set `data-theme` attribute on the `html` element
const toggleTheme = () => {
  const update = (!isDarkMode.value) ? 'light' : 'dark'

  storedTheme.value = isDarkMode.value

  const html = document.querySelector('html')
  html?.setAttribute('data-theme', update)
}

// Set correct theme on toggle
onMounted(() => {
  toggleTheme()
})

// Watch reactive property for change and toggle
watch(() => isDarkMode.value, () => {
  toggleTheme()
});

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
    <span class="dark-mode-switch">
      <label for="switch">
        <input type="checkbox" id="switch" name="switch" role="switch" v-model="isDarkMode">
        <span class="sr-only">Toggle Dark Mode</span>
        <span class="switch-emoji">
          <span>☾</span>
        </span>
      </label>
    </span>
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
