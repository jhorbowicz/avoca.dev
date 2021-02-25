<template>
  <div>
    <header class="flex items-baseline text-main">
      <span class="bg-xiketic text-cultured text-3xl p-4">
        <nuxt-link to="/">avoca.dev</nuxt-link>
      </span>
      <span class="header-link colors-transition">
        <nuxt-link to="/blog">blog</nuxt-link>
      </span>
      <span class="header-link colors-transition">
        <nuxt-link to="/about">about</nuxt-link>
      </span>
      <span class="header-link colors-transition">
        <nuxt-link to="/cv">CV</nuxt-link>
      </span>
    </header>
    <Nuxt class="page-content"/>
    <footer class="bg-xiketic p-4">
      <a href="https://nuxtjs.org/">
        <built-with-nuxt height="40" class="block mx-auto"></built-with-nuxt>
      </a>
    </footer>
  </div>
</template>

<script>
import BuiltWithNuxt from '../components/BuiltWithNuxt.vue';

export default {
  components: {
    'built-with-nuxt': BuiltWithNuxt,
  }
}
</script>

<style scoped>
  .header-link {
    @apply text-3xl text-xiketic hover:bg-xiketic p-4 hover:text-cultured;
  }
</style>
