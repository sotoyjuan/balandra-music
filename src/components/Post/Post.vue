<template>
  <div class="mx-5 lg:mx-10">
    <template v-if="post">
      <h3 class="text-5xl uppercase font-light">
        News
      </h3>
      <div class="post mx-1 lg:mx-5 my-12">
        <h4 class="text-3xl uppercase font-normal py-4">{{ post.title.rendered }}</h4>
        <img class="m-5 float-right" style="max-height:300px; width:auto;" :src="post._embedded['wp:featuredmedia']['0'].source_url" alt="Pajarito">
        <p class="px-10 my-1 text-sm text-gray-800 font-light"> {{post._embedded['author'][0].name}} - {{post.date}} </p>
        <div class="post-content px-10" v-html="post.content.rendered"></div>
      </div>
   
    </template>
    <Loader v-else/>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../partials/Loader.vue";
import { mapGetters } from "vuex";
import SETTINGS from "../../settings";

export default {
  data() {
    return {
      post: false
    };
  },

  computed: {},

  beforeMount() {
    this.getPost();
  },

  methods: {
    getPost: function() {
      axios
        .get(
          SETTINGS.API_BASE_PATH + "posts?slug=" + this.$route.params.postSlug + "&_embed"
        )
        .then(response => {
          this.post = response.data[0];
          console.log(this.post);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },

  components: {
    Loader
  }
};
</script>

<style>
  .post {
    max-width: 1000px;
    min-width: 800px;
  }
</style>