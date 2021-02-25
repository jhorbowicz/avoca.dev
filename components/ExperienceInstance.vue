<template>
  <div class="box mt-4">
    <div class="flex justify-between">
      <h3>{{ company }}</h3>
      <span class="text-lg">{{ period }}</span>
    </div>
    <hr class="my-2"/>
    <h3>{{ title }}</h3>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    company: String,
    period: String,
    title: String
  }
}
</script>