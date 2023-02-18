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
      <h2>Shop now open</h2>

      <p>
        Launching with a long-awaited, limited merch run from I Am The Agent and merch to support Whalebones debut album release. More to come soon!
      </p>

      <atoms-c-button href="https://shop.ohsilence.com/">
        Visit the store &rarr;
      </atoms-c-button>
    </div>

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
    </div>

    <molecules-list-artists show="current" />

    <div>
      <nuxt-link to="/artists">
        View all artists &rarr;
      </nuxt-link>
    </div>
  </c-section>
</template>
