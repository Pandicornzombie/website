<template>
  <article>
    <h1 v-if="drawing.title">
      { drawing.title }}
    </h1>
    <img :src="drawing.img">
    <p>Post last updated: {{ drawing.updatedAt }}</p>
    <nuxt-content :document="drawing" />
  </article>
</template>

<script>
  export default {
    async asyncData ({ $content, params }) {
      const drawing = await $content('drawings', params.slug).fetch()

      return { drawing }
    }
  }
</script>
