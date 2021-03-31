<template>
  <div>
    <div class="widget albums mx-5 lg:mx-10">
      <h3 class="text-5xl uppercase font-light">
        <slot>Albums</slot>
      </h3>
      <div class="mx-1 lg:mx-5 my-8" v-if="albumsLoaded">
        <div v-for="album in allAlbums" :key="album.id">
    
            <div class="album flex items-center flex-col lg:flex-row my-12 lg:my-4">
              <div class="image-container flex justify-center items-center">
                <img :src="album._embedded['wp:featuredmedia']['0'].source_url" alt="Pajarito">
              </div>
              <div>
                <h4 class="text-3xl uppercase font-normal p-4">{{ album.title.rendered }}</h4>
                <p class="text-xl p-4" v-html="album.content.rendered"></p>
              </div>
              <div class="button-container flex flex-col items-center justify-center">
                <primary-button class="my-1" :onClick="buyAlbum(album.Buy)">
                  <svg class="inline" width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.15869 9.76109C3.15869 10.0807 3.41804 10.3398 3.73762 10.3398C4.05721 10.3398 4.31634 10.0807 4.31634 9.76109C4.31634 6.67588 6.82605 4.16595 9.91105 4.16595C10.2308 4.16595 10.49 3.90682 10.49 3.58723C10.49 3.26744 10.2308 3.0083 9.91105 3.0083C6.18775 3.00852 3.15869 6.03757 3.15869 9.76109Z" fill="white"/>
                    <path d="M10.4891 5.58385C10.4891 5.26426 10.2299 5.00513 9.91014 5.00513C7.28811 5.00513 5.15479 7.13846 5.15479 9.76091C5.15479 10.0805 5.41392 10.3396 5.73372 10.3396C6.0533 10.3396 6.31244 10.0805 6.31244 9.76091C6.31244 7.77698 7.92642 6.16278 9.91014 6.16278C10.2299 6.16278 10.4891 5.90364 10.4891 5.58385Z" fill="white"/>
                    <path d="M6.23838 17.8742C3.4078 16.3791 1.64935 13.4632 1.64935 10.2651C1.64935 5.52344 5.50705 1.66595 10.2487 1.66595C13.2885 1.66595 16.133 3.29687 17.6728 5.92211C17.8344 6.19796 18.1889 6.29013 18.4646 6.12852C18.7406 5.96691 18.833 5.61217 18.671 5.33632C16.9245 2.35827 13.6972 0.508301 10.2487 0.508301C4.86853 0.508301 0.491699 4.88534 0.491699 10.2653C0.491699 13.8941 2.48656 17.2018 5.6976 18.8981C5.78398 18.9437 5.87636 18.9651 5.96745 18.9651C6.17515 18.9651 6.37598 18.853 6.47994 18.6565C6.62912 18.374 6.52088 18.0238 6.23838 17.8742Z" fill="white"/>
                    <path d="M10.4081 8.84564C10.5761 8.84564 10.7388 8.87843 10.8919 8.94338C11.1868 9.06834 11.5261 8.93009 11.6506 8.6358C11.7752 8.3413 11.6375 8.00178 11.3428 7.87725C11.0466 7.75165 10.732 7.68799 10.4081 7.68799C9.0839 7.68799 8.00684 8.76548 8.00684 10.0897C8.00684 10.7595 8.28955 11.4038 8.78232 11.8573C8.89378 11.96 9.03417 12.0104 9.17413 12.0104C9.33039 12.0104 9.48621 11.9476 9.60046 11.8237C9.81694 11.5883 9.80172 11.222 9.56638 11.0058C9.30724 10.7674 9.16449 10.4416 9.16449 10.0899C9.16427 9.40357 9.7222 8.84564 10.4081 8.84564Z" fill="white"/>
                    <path d="M20.4212 9.88354H11.1173C10.7977 9.88354 10.5386 10.1427 10.5386 10.4623V19.7661C10.5386 20.0859 10.7977 20.3451 11.1173 20.3451H20.4209C20.741 20.3451 21.0001 20.0859 21.0001 19.7661V10.462C21.0003 10.1427 20.7412 9.88354 20.4212 9.88354ZM19.8422 19.1872H11.6962V11.0412H19.8424V19.1872H19.8422Z" fill="white"/>
                    <path d="M15.9671 15.3867C17.4375 15.3867 18.6339 14.1904 18.6339 12.72C18.6339 12.4002 18.3748 12.1411 18.055 12.1411C17.7352 12.1411 17.4761 12.4002 17.4761 12.72C17.4761 13.5521 16.7992 14.229 15.9671 14.229C15.135 14.229 14.4579 13.5521 14.4579 12.72C14.4579 12.4002 14.1986 12.1411 13.879 12.1411C13.5594 12.1411 13.3003 12.4002 13.3003 12.72C13.3003 14.1904 14.4965 15.3867 15.9671 15.3867Z" fill="white"/>
                  </svg>
                  <span>buy</span>
                </primary-button>
                <secondary-button class="my-1" :onClick="listenAlbum(album.Listen)">
                  <svg class="inline" width="15" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8H6C5.73478 8 5.48043 8.10536 5.29289 8.29289C5.10536 8.48043 5 8.73478 5 9V15.3008C4.52446 15.1035 4.01485 15.0013 3.5 15C2.63946 14.9399 1.78985 15.221 1.13488 15.7824C0.479922 16.3438 0.0722422 17.1404 0 18C0.0722422 18.8596 0.479922 19.6562 1.13488 20.2176C1.78985 20.779 2.63946 21.0601 3.5 21C4.36054 21.0601 5.21015 20.779 5.86512 20.2176C6.52008 19.6562 6.92776 18.8596 7 18V10H8C8.26522 10 8.51957 9.89464 8.70711 9.70711C8.89464 9.51957 9 9.26522 9 9C9 8.73478 8.89464 8.48043 8.70711 8.29289C8.51957 8.10536 8.26522 8 8 8ZM3.5 19C2.7012 19 2 18.5322 2 18C2 17.4678 2.7012 17 3.5 17C4.2988 17 5 17.4678 5 18C5 18.5322 4.2988 19 3.5 19Z" fill="white"/>
                    <path d="M8 4C7.73478 4 7.48043 4.10536 7.29289 4.29289C7.10536 4.48043 7 4.73478 7 5C7 5.26522 7.10536 5.51957 7.29289 5.70711C7.48043 5.89464 7.73478 6 8 6C8.79538 6.00087 9.55794 6.31722 10.1204 6.87964C10.6828 7.44206 10.9991 8.20462 11 9C11 9.26522 11.1054 9.51957 11.2929 9.70711C11.4804 9.89464 11.7348 10 12 10C12.2652 10 12.5196 9.89464 12.7071 9.70711C12.8946 9.51957 13 9.26522 13 9C12.9984 7.6744 12.4712 6.40353 11.5338 5.46619C10.5965 4.52885 9.3256 4.00156 8 4Z" fill="white"/>
                    <path d="M8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1C7 1.26522 7.10536 1.51957 7.29289 1.70711C7.48043 1.89464 7.73478 2 8 2C9.85586 2.00214 11.6351 2.74033 12.9474 4.05262C14.2597 5.36491 14.9979 7.14414 15 9C15 9.26522 15.1054 9.51957 15.2929 9.70711C15.4804 9.89464 15.7348 10 16 10C16.2652 10 16.5196 9.89464 16.7071 9.70711C16.8946 9.51957 17 9.26522 17 9C16.9974 6.61386 16.0483 4.32622 14.361 2.63896C12.6738 0.951709 10.3861 0.00264685 8 0Z" fill="white"/>
                  </svg>
                  <span>listen</span>
                </secondary-button>
              </div>
            </div>
        </div>
      </div>
      <div v-else>Loading...</div>
    </div>
    <div class="widget sheets mx-5 lg:mx-10">
      <h3 class="text-5xl uppercase font-light">
        <slot>Music Sheets</slot>
      </h3>
      <div class="mx-1 lg:mx-5 my-8" v-if="albumsLoaded">
        <div v-for="sheet in allMusicSheets" :key="sheet.id">
    
            <div class="sheet flex items-center flex-col lg:flex-row my-12 lg:my-4">
              <div class="image-container flex justify-center items-center">
                <img :src="sheet._embedded['wp:featuredmedia']['0'].source_url" alt="Pajarito">
              </div>
              <div>
                <h4 class="text-3xl uppercase font-normal p-4">{{ sheet.title.rendered }}</h4>
                <p class="text-xl p-4" v-html="sheet.content.rendered"></p>
              </div>
              <div class="button-container flex flex-col items-center justify-center">
                <primary-button class="my-1" :onClick="downloadSheetPdf(sheet['PDF URL'])">
                  <svg class="inline" width="15" height="20" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.6821 9.93975C6.39082 9.93975 6.92235 9.78789 7.2514 9.48415C7.60576 9.18042 7.75763 8.6995 7.75763 8.06672C7.75763 7.40863 7.58045 6.92772 7.2514 6.62398C6.92235 6.32025 6.39082 6.14307 5.65679 6.14307H3.96094V11.4078H5.02401V9.93975H5.6821V9.93975ZM5.02401 7.15552H5.63148C5.98584 7.15552 6.23895 7.23145 6.41613 7.35801C6.59331 7.48456 6.66924 7.71236 6.66924 8.0161C6.66924 8.31983 6.59331 8.54764 6.46675 8.6995C6.3402 8.85137 6.08708 8.9273 5.73273 8.9273H5.02401V7.15552V7.15552Z" fill="white"/>
                    <path d="M11.934 10.6739C12.3896 10.193 12.5921 9.56025 12.5921 8.72498C12.5921 7.91502 12.3643 7.25693 11.9087 6.80132C11.4531 6.34572 10.795 6.11792 9.93438 6.11792H8.23853V11.3827H9.88376C10.795 11.408 11.4784 11.1549 11.934 10.6739ZM11.124 9.96523C10.8709 10.2437 10.4912 10.3702 10.0103 10.3702H9.32691V7.15568H9.93438C10.4659 7.15568 10.8709 7.30755 11.1493 7.58597C11.4024 7.8644 11.5543 8.26938 11.5543 8.7756C11.529 9.28183 11.3771 9.68681 11.124 9.96523Z" fill="white"/>
                    <path d="M16.4645 7.18083V6.14307H13.1741V11.4078H14.2371V9.33228H16.338V8.31983H14.2371V7.18083H16.4645Z" fill="white"/>
                    <path d="M17.8567 0.600098H2.56873C1.68284 0.600098 0.974121 1.30881 0.974121 2.19471V20.8744C0.974121 21.7603 1.68284 22.469 2.56873 22.469H6.087L5.60608 21.9881L5.12517 21.5072H2.59404C2.23968 21.5072 1.96126 21.2288 1.96126 20.8744V2.19471C1.96126 1.84035 2.23968 1.56193 2.59404 1.56193H17.9074C18.2617 1.56193 18.5401 1.84035 18.5401 2.19471V20.8744C18.5401 21.2288 18.2617 21.5072 17.9074 21.5072H15.7306L15.2497 21.9881L14.7688 22.469H17.9074C18.7932 22.469 19.502 21.7603 19.502 20.8744V2.19471C19.4767 1.30881 18.7426 0.600098 17.8567 0.600098Z" fill="white"/>
                    <path d="M15.8065 19.4823L12.4907 19.457V13.9897H7.93467V19.381L4.6189 19.3304L10.2886 25.0001L15.8065 19.4823Z" fill="white"/>
                  </svg>
                  <span>pdf</span>
                </primary-button>
              </div>
            </div>
        </div>
      </div>
      <div v-else>Loading...</div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import PrimaryButton from './common/PrimaryButton.vue';
  import SecondaryButton from './common/SecondaryButton.vue';

  export default {
    components: {
      PrimaryButton,
      SecondaryButton,
    },

    computed: {
      ...mapGetters({
        allAlbums: 'allAlbums',
        albumsLoaded: 'albumsLoaded',
        musicSheetsLoaded: 'musicSheetsLoaded',
        allMusicSheets: 'allMusicSheets',
      }),
    },
    
    mounted() {
      this.$store.dispatch('getAllAlbums');
      this.$store.dispatch('getAllMusicSheets');
      //console.log(allAlbums());
    },
    methods: {
      getAlbum (album) {
        console.log(album);
      },
      buyAlbum (buyLink) {
        return function buy() {
          window.open(buyLink, "_blank");
        }
      },
      downloadSheetPdf(pdfLink) {
        return function download() {
          window.open(pdfLink, "_blank")
        };
      },
      listenAlbum (listenLink) {
        return function listen() {
          window.open(listenLink, "_blank");
        }
      },

    }
  }
</script>

<style>
  .albums, .sheets {
    max-width: 1000px;
  }

  .album {
    position: relative;
    min-height: 300px;
  }

  .album img {
    max-height: 300px;
    width: auto;
  }

  .album .image-container {
    flex: 1 0 300px;
  }

  .album .button-container {
    flex: 1 0 100px;
  }

  .sheet {
    position: relative;
    min-height: 300px;
  }

  .sheet img {
    max-height: 300px;
    width: auto;
  }

  .sheet .image-container {
    flex: 1 0 300px;
  }

  .sheet .button-container {
    flex: 1 0 100px;
  }
</style>