<template>
  <footer class="site-footer bg-black text-white flex items-center justify-between flex-col lg:flex-row px-6 py-10">
    <div class="site-header my-2 flex items-center flex-shrink-0">
      <router-link to="/">
        <h2 class="text-base font-amatic font-bold tracking-widest hover:text-purple-300 transition-colors duration-200 ease-out">BALANDRA</h2>
      </router-link>
    </div>
    <div class="menu-container my-2 w-full flex flex-grow items-center justify-center lg:w-auto">
          <a @click="comingSoon" class="cursor-default inline-block mt-0 mx-2 text-center font-medium text-sm tracking-wider uppercase hover:text-purple-300 transition-colors duration-200 ease-out">
            About
          </a>
          <span>-</span>
          <a @click="comingSoon" class="cursor-default inline-block mt-0 mx-2 text-center font-medium text-sm tracking-wider uppercase hover:text-purple-300 transition-colors duration-200 ease-out">
            Shows
          </a>
          <span>-</span>
          <a @click="comingSoon" class="cursor-default inline-block mt-0 mx-2 text-center font-medium text-sm tracking-wider uppercase hover:text-purple-300 transition-colors duration-200 ease-out">
            Music
          </a>
          <span>-</span>
          <a @click="comingSoon" class="cursor-default inline-block mt-0 mx-2 text-center font-medium text-sm tracking-wider uppercase hover:text-purple-300 transition-colors duration-200 ease-out">
            Gallery
          </a>
          <span>-</span>
          <a @click="comingSoon" class="cursor-default inline-block mt-0 mx-2 text-center font-medium text-sm tracking-wider uppercase hover:text-purple-300 transition-colors duration-200 ease-out">
            Press
          </a>
          <span>-</span>
          <a @click="comingSoon" class="cursor-default inline-block mt-0 mx-2 text-center font-medium text-sm tracking-wider uppercase hover:text-purple-300 transition-colors duration-200 ease-out">
            Contact
          </a>
    </div>
    <div class="social-media-container my-2 flex items-end md:items-center">
      <button @click="goToSocialMedia('https://www.facebook.com/balandramusica')" class="mx-5 hover:text-purple-300 transition-colors duration-200 ease-out focus:outline-none">
        <svg class="fill-current" width="26" height="27" viewBox="0 0 26 27" xmlns="http://www.w3.org/2000/svg">
          <title>Facebook</title>
          <path d="M0 5.4C0 3.96783 0.547856 2.59432 1.52304 1.58162C2.49823 0.568927 3.82087 0 5.2 0H20.8C22.1791 0 23.5018 0.568927 24.477 1.58162C25.4521 2.59432 26 3.96783 26 5.4V21.6C26 23.0322 25.4521 24.4057 24.477 25.4184C23.5018 26.4311 22.1791 27 20.8 27H5.2C3.82087 27 2.49823 26.4311 1.52304 25.4184C0.547856 24.4057 0 23.0322 0 21.6V5.4ZM5.2 2.7C4.51044 2.7 3.84912 2.98446 3.36152 3.49081C2.87393 3.99716 2.6 4.68392 2.6 5.4V21.6C2.6 22.3161 2.87393 23.0028 3.36152 23.5092C3.84912 24.0155 4.51044 24.3 5.2 24.3H13V14.85H11.7C11.3552 14.85 11.0246 14.7078 10.7808 14.4546C10.537 14.2014 10.4 13.858 10.4 13.5C10.4 13.142 10.537 12.7986 10.7808 12.5454C11.0246 12.2922 11.3552 12.15 11.7 12.15H13V10.125C13 8.87185 13.4794 7.67003 14.3327 6.78392C15.186 5.89781 16.3433 5.4 17.55 5.4H18.33C18.6748 5.4 19.0054 5.54223 19.2492 5.79541C19.493 6.04858 19.63 6.39196 19.63 6.75C19.63 7.10804 19.493 7.45142 19.2492 7.70459C19.0054 7.95777 18.6748 8.1 18.33 8.1H17.55C17.2939 8.1 17.0404 8.15238 16.8038 8.25414C16.5672 8.35591 16.3522 8.50507 16.1711 8.69311C15.9901 8.88115 15.8464 9.10438 15.7484 9.35007C15.6504 9.59575 15.6 9.85907 15.6 10.125V12.15H18.33C18.6748 12.15 19.0054 12.2922 19.2492 12.5454C19.493 12.7986 19.63 13.142 19.63 13.5C19.63 13.858 19.493 14.2014 19.2492 14.4546C19.0054 14.7078 18.6748 14.85 18.33 14.85H15.6V24.3H20.8C21.4896 24.3 22.1509 24.0155 22.6385 23.5092C23.1261 23.0028 23.4 22.3161 23.4 21.6V5.4C23.4 4.68392 23.1261 3.99716 22.6385 3.49081C22.1509 2.98446 21.4896 2.7 20.8 2.7H5.2Z"/>
        </svg>
    </button>
    <button @click="goToSocialMedia('https://www.instagram.com/balandramusica/')" class="mx-5 hover:text-purple-300 transition-colors duration-200 ease-out focus:outline-none">
      <svg class="fill-current" width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Instagram</title>
        <path  d="M0 5.4C0 3.96783 0.547856 2.59432 1.52304 1.58162C2.49823 0.568927 3.82087 0 5.2 0H20.8C22.1791 0 23.5018 0.568927 24.477 1.58162C25.4521 2.59432 26 3.96783 26 5.4V21.6C26 23.0322 25.4521 24.4057 24.477 25.4184C23.5018 26.4311 22.1791 27 20.8 27H5.2C3.82087 27 2.49823 26.4311 1.52304 25.4184C0.547856 24.4057 0 23.0322 0 21.6V5.4ZM5.2 2.7C4.51044 2.7 3.84912 2.98446 3.36152 3.49081C2.87393 3.99716 2.6 4.68392 2.6 5.4V21.6C2.6 22.3161 2.87393 23.0028 3.36152 23.5092C3.84912 24.0155 4.51044 24.3 5.2 24.3H20.8C21.4896 24.3 22.1509 24.0155 22.6385 23.5092C23.1261 23.0028 23.4 22.3161 23.4 21.6V5.4C23.4 4.68392 23.1261 3.99716 22.6385 3.49081C22.1509 2.98446 21.4896 2.7 20.8 2.7H5.2ZM13 9.45C11.9657 9.45 10.9737 9.87669 10.2423 10.6362C9.51089 11.3957 9.1 12.4259 9.1 13.5C9.1 14.5741 9.51089 15.6043 10.2423 16.3638C10.9737 17.1233 11.9657 17.55 13 17.55C14.0343 17.55 15.0263 17.1233 15.7577 16.3638C16.4891 15.6043 16.9 14.5741 16.9 13.5C16.9 12.4259 16.4891 11.3957 15.7577 10.6362C15.0263 9.87669 14.0343 9.45 13 9.45ZM6.5 13.5C6.5 11.7098 7.18482 9.9929 8.40381 8.72703C9.62279 7.46116 11.2761 6.75 13 6.75C14.7239 6.75 16.3772 7.46116 17.5962 8.72703C18.8152 9.9929 19.5 11.7098 19.5 13.5C19.5 15.2902 18.8152 17.0071 17.5962 18.273C16.3772 19.5388 14.7239 20.25 13 20.25C11.2761 20.25 9.62279 19.5388 8.40381 18.273C7.18482 17.0071 6.5 15.2902 6.5 13.5V13.5ZM20.15 8.1C20.6672 8.1 21.1632 7.88665 21.5289 7.50689C21.8946 7.12713 22.1 6.61206 22.1 6.075C22.1 5.53794 21.8946 5.02287 21.5289 4.64311C21.1632 4.26335 20.6672 4.05 20.15 4.05C19.6328 4.05 19.1368 4.26335 18.7711 4.64311C18.4054 5.02287 18.2 5.53794 18.2 6.075C18.2 6.61206 18.4054 7.12713 18.7711 7.50689C19.1368 7.88665 19.6328 8.1 20.15 8.1Z"/>
      </svg>
    </button>
    <button @click="goToSocialMedia('https://www.youtube.com/channel/UCQONyu2yieVM7N2pgAqJOYA')" class="mx-5 hover:text-purple-300 transitions-colors duration-200-ease-out focus:outline-none">
      <svg class="fill-current" width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Youtube</title>
        <path d="M9.33396 3.1129C12.8686 2.61067 17.1314 2.61067 20.666 3.1129C23.8775 3.56996 26.3662 5.83065 26.8407 8.26651C27.4176 11.2155 27.4176 14.7845 26.8407 17.7335C26.3648 20.1693 23.8775 22.43 20.666 22.8871C17.1314 23.3893 12.8672 23.3893 9.33396 22.8871C6.12253 22.43 3.6352 20.1693 3.15928 17.7335C2.58244 14.7845 2.58244 11.2155 3.15928 8.26651C3.6352 5.83065 6.12253 3.56996 9.33396 3.1129V3.1129ZM21.0479 0.403353C17.261 -0.134451 12.739 -0.134451 8.95214 0.403353C4.84068 0.987684 1.22696 3.93123 0.483761 7.74102C-0.161254 11.0376 -0.161254 14.9624 0.483761 18.259C1.22696 22.0688 4.84068 25.0123 8.95214 25.5966C12.739 26.1345 17.261 26.1345 21.0479 25.5966C25.1593 25.0123 28.773 22.0688 29.5162 18.259C30.1613 14.9624 30.1613 11.0376 29.5162 7.74102C28.773 3.93123 25.1593 0.987684 21.0479 0.403353V0.403353ZM13.0295 6.38762C12.8241 6.25012 12.5854 6.17114 12.3388 6.15912C12.0922 6.1471 11.847 6.20249 11.6293 6.31937C11.4117 6.43624 11.2297 6.61023 11.1028 6.82277C10.9759 7.03531 10.909 7.27842 10.909 7.52617V18.4738C10.909 18.7216 10.9759 18.9647 11.1028 19.1772C11.2297 19.3898 11.4117 19.5638 11.6293 19.6806C11.847 19.7975 12.0922 19.8529 12.3388 19.8409C12.5854 19.8289 12.8241 19.7499 13.0295 19.6124L21.2115 14.1386C21.3983 14.0136 21.5514 13.8443 21.6573 13.6457C21.7632 13.447 21.8186 13.2253 21.8186 13C21.8186 12.7747 21.7632 12.553 21.6573 12.3543C21.5514 12.1557 21.3983 11.9864 21.2115 11.8614L13.0295 6.38762ZM17.996 13L13.6363 15.9176V10.0838L17.996 13Z"/>
      </svg>
    </button>
  </div>

  <img class="culture-minstry" src="https://balandramusic.com/wp-content/uploads/2021/03/mincult.png" alt="Ministerio de Cultura">

  </footer>
</template>

<script>
import PrimaryButton from '../common/PrimaryButton.vue';
import SecondaryButton from '../common/SecondaryButton.vue';

export default {
  components: {
    PrimaryButton,
    SecondaryButton,
  },
  methods:{
    goToSocialMedia: (media) => {   
      window.open(media, "_blank");    
    },
    comingSoon: () => alert('Estamos construyendo esta página! Encuentra más contenido próximamente')
  }
};
</script>

<style type="postcss" scoped>
.culture-minstry {
  max-width: 220px;
  margin: 20px;
}
</style>
