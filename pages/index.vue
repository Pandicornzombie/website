<template>
  <div class="container mx-auto">
    <h1>Drawings</h1>
    <div class="grid-flow-col">
      <div v-for="drawing of drawings" :key="drawing.slug" class="inline-block h-72">
        <NuxtLink :to="{ name: 'drawing-slug', params: { slug: drawing.slug } }">
          <h2 v-if="drawing.title">
            {{ drawing.title }}
          </h2>
          <img :src="drawing.img" class="h-full">
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    async asyncData ({ $content, params }) {
      const drawings = await $content('drawings', params.slug)
        .only(['title', 'img', 'slug'])
        .sortBy('img', 'desc')
        .fetch()

      return {
        drawings
      }
    }
  })
</script>
