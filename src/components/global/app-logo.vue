<template>
  <component is="hgroup" class="hgroup--branding">
    <h1 class="branding">
      <nuxt-link to="/">
        Oh<span class="mobile-hide"> Silence Record Co</span>.
      </nuxt-link>
    </h1>
    <h2 class="mobile-hide">
      <em>
        The tiny, independent record label
      </em>
    </h2>
  </component>
</template>

<style scoped>
hgroup { all: unset; }
@media screen and (max-width: 768px) {
  .branding {
    font-size: 3rem;
    z-index: 1000;
  }
}
</style>
