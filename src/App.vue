<template>
 <!-- <div id="my-app" class="flex flex-col md:min-h-screen">
    <app-header />

    <transition name="loader-animation" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <progress-bar :show-loader="showLoader" :loader-style="loaderStyle" />
    </transition>

    <transition name="page-transition" mode="out-in" appear>
      <div class="site-content mx-auto py-16 flex-1 px-10 md:px-0 max-w-2xl">
        <router-view></router-view>
      </div>
    </transition>

    <app-footer />
</div> -->

<div  id="balandra-app" class="flex flex-col min-h-screen">
  <!-- <iframe src="https://sotoyjuan.github.io/aviario-interactivo-test-1/" height="750" width="1300" frameborder="0"> </iframe> -->
  <div class="flex justify-center items-center">
    <img src="https://balandramusic.com/wp-content/uploads/2021/03/Proximamente.png" alt="" class="coming-soon-image">
    <div class="desktop-message bg-red-400 text-center p-6 m-1 rounded w-full">
      <h5 class="text-white font-bold">Lo sentimos! Para disfrutar del Aviario Interactivo debes visitarnos desde un computador o laptop!</h5>
    </div>
  </div>
  <app-header />
  <div class="m-auto">
    <router-view />
  </div>
  <app-footer />
</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import Header from './components/partials/Header.vue';
import Footer from './components/partials/Footer.vue';
import ProgressBar from './components/partials/ProgressBar.vue';

export default {
  data() {
    return {
      showLoader: true,
    };
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading',
      loadingProgress: 'loadingProgress',
    }),

    loaderStyle() {
      return `width: ${this.loadingProgress}%;`;
    },
  },

  components: {
    appHeader: Header,
    appFooter: Footer,
    ProgressBar,
  },

  watch: {
    // watch the value of isLoading and once it's false hide the loader
    isLoading(val) {
      if (val == false) {
        let self = this;
        setTimeout(function() {
          self.showLoader = false;
        }, 1000);
      }
    },
  },
};
</script>

<style>
iframe {
  margin: 0 auto;
}

.desktop-message {
  display: none;
}

@media only screen and (max-width: 1023px) {
  iframe, .coming-soon-image{
    display: none;
  }
  .desktop-message {
    display: block;
  }
}

.coming-soon-image {
  width: 1280px;
  height: 720px;
  margin: 12px;
}

</style>
