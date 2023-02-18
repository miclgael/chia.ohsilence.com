<script setup lang="ts">
useHead({
  meta: [
    {
      name: 'description',
      content: 'Oh Silence Record Co is an independently owned label with resources for music production and distribution'
    }
  ]
})
</script>

<template>
  <c-section> 
    <div>
      <h2>Shop now open ✨</h2>

      <p>
        Launching with a long-awaited, limited run of t-shirts to support remastered EP's from I Am The Agent and brand new merch to support Whalebones' debut album release. 
      </p>

      <p>
        All products are ethicially sourced cotton materials, printed in Australia and shipped worldwide.
      </p>

      <div class="shop-cta">
        <atoms-c-button href="https://shop.ohsilence.com/">
          Visit the store &rarr;
        </atoms-c-button>
      </div>
    </div>
    <br>
    <br>

    <div>
      <h2>
        Latest content
      </h2>
      <ul role="list">
        <li role="listitem">
          <nuxt-link to="/interviews/musician">
            Read: Musician - Interview with Camryn Rothenbury
          </nuxt-link>
        </li>
        <li role="listitem">
          <nuxt-link to="/releases/OH-013">
            Listen: Whalebones - Every Alterations (LP)
          </nuxt-link>
        </li>
      </ul>
      <div>
        <atoms-c-button to="/releases">
          Discover new releases &rarr;
        </atoms-c-button>
      </div>
    </div>
    <br>
    <br>
    <molecules-list-artists show="current" />
    <div>
      <atoms-c-button to="/artists">
        View all artists &rarr;
      </atoms-c-button>
    </div>
    <br>
    <br>
  </c-section>
</template>

<style scoped>
.shop-cta {
  max-width: fit-content;
}
</style>
