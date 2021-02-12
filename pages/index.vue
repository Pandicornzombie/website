<template>
  <div>
    <h1>Drawings</h1>
    <div class="col-count-1 sm:col-count-2 md:col-count-3 xl:col-count-4 gap-x-4 max-w-max mx-auto">
      <div v-for="drawing of drawings" :key="drawing.slug" class="max-w-max mb-4">
        <NuxtLink :to="{ name: 'drawing-slug', params: { slug: drawing.slug } }">
          <h2 v-if="drawing.title">
            {{ drawing.title }}
          </h2>
          <img :src="drawing.img" class="rounded-lg">
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
