<template>
    <div>        
      <h3 class="text-5xl uppercase font-light">
          Gallery
        </h3>
      <section class="gallery py-8 px-4" v-if="galleryLoaded">
        <div class="gallery-item flex flex-wrap -mx-4">
          <div v-for="item in allGallery" :key="item.id" @click="goToLink(item['Gallery Link'])" class="gallery image-container md:w-1/2 px-4 mb-8 md:mb-5">
            <img class="rounded shadow-md" :src="item._embedded['wp:featuredmedia']['0'].source_url" alt="">
            <div class="flex justify-center items-center overflow-hidden text-container bg-gradient-to-t from-gray-800 to-transparent">
              <p class="overflow-hidden" v-html="item.content.rendered"></p>
            </div>
          </div>
        
        </div>
      </section>
      <div v-else >loading...</div>
    </div>
</template>





<script>
  import { mapGetters } from 'vuex';
  
  export default {

    computed: {
      ...mapGetters({
        allGallery: 'allGallery',
        galleryLoaded: 'galleryLoaded',
      }),
    },
    
    mounted() {
      this.$store.dispatch('getAllGalleryItems');
    },

    methods: {
      goToLink: (link) => {   
       window.open(link, "_blank");    
      },
    }

}

</script>

<style>
.gallery {
  max-width: 1000px;
}

.gallery.image-container{
  cursor: pointer;
  position: relative;
}

.gallery.image-container img {
  margin: auto;
}

.gallery.image-container .text-container {
    opacity: 0;
    position: relative;
    padding: 20px;
    height: 100px;
    color: white;
    font-weight: 600;
    top: -100px;
  
}

.gallery.image-container:hover .text-container {
  transition: all 0.25s ease-out;
  opacity: 1;
}
</style>