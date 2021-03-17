<template>
  <div class="mx-5 lg:mx-10">
    <template v-if="allPagesLoaded">
      <h1 class="text-3xl mb-5"></h1>
       <h3 class="text-5xl uppercase font-light">
        {{ pageContent.title.rendered }}
      </h3>
      <div class="page mx-1 lg:mx-5 my-12">
        <img v-if="pageContent._embedded['wp:featuredmedia']" class="m-5 float-right" style="max-height:300px; width:auto;" :src="pageContent._embedded['wp:featuredmedia']['0'].source_url" alt="Pajarito">
        <p class="px-10 my-1 text-sm text-gray-800 font-light"> {{pageContent._embedded['author'][0].name}} - {{pageContent.date}} </p>
        <div class="page-content px-10" v-html="pageContent.content.rendered"></div>
      </div>
    
    </template>
    <Loader v-else />
  </div>
</template>

<script>
import Loader from '../partials/Loader.vue';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      page: 'page',
      allPagesLoaded: 'allPagesLoaded',
    }),

    pageContent() {
      console.log(this.page(this.$route.params.pageSlug));
      return this.page(this.$route.params.pageSlug);
    },
  },

  components: {
    Loader,
  },
};
</script>

<style type="postcss" scoped>
  .page {
    max-width: 1000px;
    min-width: 800px;
  }
</style>
