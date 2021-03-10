<template>
  <nav class="site-header flex items-center justify-between flex-wrap p-6">
    <div class="site-header__interior flex items-center flex-shrink-0">
      <router-link to="/">
        <h2 class="text-3xl font-amatic font-bold tracking-widest hover:text-purple-300 transition-colors duration-200 ease-out">BALANDRA</h2>
      </router-link>
    </div>
    <div class="block lg:hidden">
      <button
        v-on:click="toggleMenu"
        class="flex items-center px-3 py-2 rounded hover:text-purple-300 transition-colors duration-200 ease-out focus:outline-none"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full hidden lg:flex flex-grow lg:items-center lg:justify-center lg:w-auto">
      <a @click="comingSoon" class="cursor-pointer inline-block mt-0 mx-2 text-center font-medium text-base tracking-wider uppercase text-coolGray-700 hover:text-purple-300 transition-colors duration-200 ease-out">
        About
      </a>
      <span class="hidden lg:inline-block">-</span>
      <a @click="comingSoon" class="cursor-pointer inline-block mt-0 mx-2 text-center font-medium text-base tracking-wider uppercase text-coolGray-700 hover:text-purple-300 transition-colors duration-200 ease-out">
        Shows
      </a>
      <span class="hidden lg:inline-block">-</span>
      <a @click="comingSoon" class="cursor-pointer inline-block mt-0 mx-2 text-center font-medium text-base tracking-wider uppercase text-coolGray-700 hover:text-purple-300 transition-colors duration-200 ease-out">
        Music
      </a>
      <span class="hidden lg:inline-block">-</span>
      <a @click="comingSoon" class="cursor-pointer inline-block mt-0 mx-2 text-center font-medium text-base tracking-wider uppercase text-coolGray-700 hover:text-purple-300 transition-colors duration-200 ease-out">
        Gallery
      </a>
      <span class="hidden lg:inline-block">-</span>
      <a @click="comingSoon" class="cursor-pointer inline-block mt-0 mx-2 text-center font-medium text-base tracking-wider uppercase text-coolGray-700 hover:text-purple-300 transition-colors duration-200 ease-out">
        Press
      </a>
      <span class="hidden lg:inline-block">-</span>
      <a @click="comingSoon" class="cursor-pointer inline-block mt-0 mx-2 text-center font-medium text-base tracking-wider uppercase text-coolGray-700 hover:text-purple-300 transition-colors duration-200 ease-out">
        Contact
      </a>
    </div>

    <div v-if="showMenu" class="w-full block lg:hidden flex-grow">
      <a @click="comingSoon" class="cursor-pointer block mt-4 text-center font-medium text-1xl tracking-wider uppercase text-coolGray-700 hover:text-purple-300 transition-colors duration-200 ease-out">
        About
      </a>  
      <a @click="comingSoon" class="cursor-pointer block mt-4 text-center font-medium text-1xl tracking-wider uppercase text-coolGray-700 hover:text-purple-300 transition-colors duration-200 ease-out">
        Shows
      </a>
      <a @click="comingSoon" class="cursor-pointer block mt-4 text-center font-medium text-1xl tracking-wider uppercase text-coolGray-700 hover:text-purple-300 transition-colors duration-200 ease-out">
        Music
      </a>
      <a @click="comingSoon" class="cursor-pointer block mt-4 text-center font-medium text-1xl tracking-wider uppercase text-coolGray-700 hover:text-purple-300 transition-colors duration-200 ease-out">
        Gallery
      </a>
      <a @click="comingSoon" class="cursor-pointer block mt-4 text-center font-medium text-1xl tracking-wider uppercase text-coolGray-700 hover:text-purple-300 transition-colors duration-200 ease-out">
        Press
      </a>
      <a @click="comingSoon" class="cursor-pointer block mt-4 text-center font-medium text-1xl tracking-wider uppercase text-coolGray-700 hover:text-purple-300 transition-colors duration-200 ease-out">
        Contact
      </a>
    </div>
    
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        showMenu: false,
      }
    },
    methods: {
      toggleMenu: function() {
        this.showMenu = !this.showMenu;
      },
      comingSoon: () => alert('Estamos construyendo esta página! Encuentra más contenido próximamente'),
    }
  }
</script>