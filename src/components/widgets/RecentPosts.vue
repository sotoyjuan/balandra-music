<template>
  <div class="widget recent-posts mx-5 lg:mx-10">
    <h3 class="text-5xl uppercase font-light">
      <slot></slot>
    </h3>
    <div class="mx-1 lg:mx-5 my-8" v-if="recentPostsLoaded">
      <div v-for="post in recentPosts(limit)" :key="post.id">
         <router-link :to="post.slug" tag="div" class="last-post">
          <div class="last-post flex items-center flex-col lg:flex-row">
            <div class="title-desc">
              <h4 class="text-3xl uppercase font-normal p-4">{{ post.title.rendered }}</h4>
              <p class="post-excerpt text-xl p-4" v-html="post.excerpt.rendered"></p>
            </div>
            <div class="image-container flex justify-center items-center">
              <img :src="post._embedded['wp:featuredmedia']['0'].source_url" alt="Pajarito">
            </div>
          </div>

          <!-- <div class="text-sm">
            <p class="text-gray-600">{{ getAuthor(post) }}</p>
          </div>  -->
        </router-link>
      </div>
    </div>
    <div v-else>Loading...</div>
    <div v-if="moreButton">
      <secondary-button :onClick="goToNews" >more news</secondary-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SecondaryButton from '../common/SecondaryButton';

export default {
  components: {
    SecondaryButton
  },
  props: {
    limit: {
      type: String
    }, 
    moreButton: {
      default: true,
    }
  },
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
    getFeaturedImage(post) {
      console.log(post);
    },
    goToNews() {
      this.$router.push('news');
    }
  },

  mounted() {
    this.$store.dispatch('getPosts', { limit: this.limit });
  },
};
</script>

<style>
  .recent-posts {
    max-width: 800px;
  }

  .last-post {
    cursor: pointer;
    position: relative;
    min-height: 300px;
  }

  .last-post img {
    max-height: 300px;
    width: auto;
  }

  .last-post:hover .title-desc {
    text-decoration: underline;
  }

  .last-post .image-container {
    flex: 1 0 300px;
  }
</style>