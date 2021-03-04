<template>
  <div class="widget recent-posts mx-10">
    <h3 class="text-5xl uppercase font-light">
      <slot></slot>
    </h3>
    <div class="mx-5 my-8" v-if="recentPostsLoaded">
      <div v-for="post in recentPosts(limit)" :key="post.id">
        <router-link :to="post.slug" tag="div" class="last-post"> 
          <img src="http://vccw.balandra/wp-content/uploads/2021/03/image-6.jpg" alt="Pajarito">
          <h4 class="text-3xl uppercase font-normal">{{ post.title.rendered }}</h4>
          <p class="post-excerpt text-xl" v-html="post.excerpt.rendered"></p>
<!-- 
          <div class="text-sm">
            <p class="text-gray-600">{{ getAuthor(post) }}</p>
          </div> -->
        </router-link>
      </div>
    </div>
    <div v-else>Loading...</div>
    <!-- <secondary-button>more news</secondary-button> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SecondaryButton from '../common/SecondaryButton';

export default {
  components: {
    SecondaryButton
  },
  props: ['limit'],
  computed: {
    ...mapGetters({
      recentPosts: 'recentPosts',
      recentPostsLoaded: 'recentPostsLoaded',
    }),
  },

  methods: {
    getAuthor(post) {
      console.log(post);
    },
  },

  mounted() {
    this.$store.dispatch('getPosts', { limit: this.limit });
  },
};
</script>