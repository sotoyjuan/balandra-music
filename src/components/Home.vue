<template>
  <div class="page page--home">

    <recent-posts-widget limit="1" moreButton="false" class="mb-10">News</recent-posts-widget>

    <div class="my-10 flex flex-no-wrap flex-col items-center">
      <svg class="mx-auto my-2" width="83" height="83" viewBox="0 0 83 83" fill="#fc8181" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.5 0C18.6 0 0 18.6 0 41.5C0 64.4 18.6 83 41.5 83C64.4 83 83 64.4 83 41.5C83 18.6 64.4 0 41.5 0ZM41.5 78C21.4 78 5 61.6 5 41.5C5 21.4 21.4 5 41.5 5C61.6 5 78 21.4 78 41.5C78 61.6 61.6 78 41.5 78Z" fill="#fc8181"/>
        <path d="M55 41.5C55 34.1 48.9 28 41.5 28C34.1 28 28 34.1 28 41.5C28 48.9 34.1 55 41.5 55C48.9 55 55 48.9 55 41.5ZM33 41.5C33 36.8 36.8 33 41.5 33C46.2 33 50 36.8 50 41.5C50 46.2 46.2 50 41.5 50C36.8 50 33 46.2 33 41.5Z" fill="#fc8181"/>
        <path d="M41.5 14.5C42.9 14.5 44 13.4 44 12C44 10.6 42.9 9.5 41.5 9.5C23.9 9.5 9.5 23.9 9.5 41.5C9.5 42.9 10.6 44 12 44C13.4 44 14.5 42.9 14.5 41.5C14.5 26.6 26.6 14.5 41.5 14.5Z" fill="#fc8181"/>
        <path d="M41.5 68.5C40.1 68.5 39 69.6 39 71C39 72.4 40.1 73.5 41.5 73.5C59.1 73.5 73.5 59.1 73.5 41.5C73.5 40.1 72.4 39 71 39C69.6 39 68.5 40.1 68.5 41.5C68.5 56.4 56.4 68.5 41.5 68.5Z" fill="#fc8181"/>
        <path d="M41.5 23C42.9 23 44 21.9 44 20.5C44 19.1 42.9 18 41.5 18C28.5 18 18 28.5 18 41.5C18 42.9 19.1 44 20.5 44C21.9 44 23 42.9 23 41.5C23 31.3 31.3 23 41.5 23Z" fill="#fc8181"/>
        <path d="M41.5 60C40.1 60 39 61.1 39 62.5C39 63.9 40.1 65 41.5 65C54.5 65 65 54.5 65 41.5C65 40.1 63.9 39 62.5 39C61.1 39 60 40.1 60 41.5C60 51.7 51.7 60 41.5 60Z" fill="#fc8181"/>
        <path d="M44.5 41.5C44.5 39.8 43.2 38.5 41.5 38.5C39.8 38.5 38.5 39.8 38.5 41.5C38.5 43.2 39.8 44.5 41.5 44.5C43.2 44.5 44.5 43.2 44.5 41.5Z" fill="#fc8181"/>
      </svg>
      <p class="mini-widget-text text-center font-medium my-2">¡Haz click aquí para comprar nuestro último disco Aviario!</p>
      <div class="">
        
        <primary-button :onClick="buyAlbum">
          <svg class="inline" width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.15869 9.76109C3.15869 10.0807 3.41804 10.3398 3.73762 10.3398C4.05721 10.3398 4.31634 10.0807 4.31634 9.76109C4.31634 6.67588 6.82605 4.16595 9.91105 4.16595C10.2308 4.16595 10.49 3.90682 10.49 3.58723C10.49 3.26744 10.2308 3.0083 9.91105 3.0083C6.18775 3.00852 3.15869 6.03757 3.15869 9.76109Z" fill="white"/>
            <path d="M10.4891 5.58385C10.4891 5.26426 10.2299 5.00513 9.91014 5.00513C7.28811 5.00513 5.15479 7.13846 5.15479 9.76091C5.15479 10.0805 5.41392 10.3396 5.73372 10.3396C6.0533 10.3396 6.31244 10.0805 6.31244 9.76091C6.31244 7.77698 7.92642 6.16278 9.91014 6.16278C10.2299 6.16278 10.4891 5.90364 10.4891 5.58385Z" fill="white"/>
            <path d="M6.23838 17.8742C3.4078 16.3791 1.64935 13.4632 1.64935 10.2651C1.64935 5.52344 5.50705 1.66595 10.2487 1.66595C13.2885 1.66595 16.133 3.29687 17.6728 5.92211C17.8344 6.19796 18.1889 6.29013 18.4646 6.12852C18.7406 5.96691 18.833 5.61217 18.671 5.33632C16.9245 2.35827 13.6972 0.508301 10.2487 0.508301C4.86853 0.508301 0.491699 4.88534 0.491699 10.2653C0.491699 13.8941 2.48656 17.2018 5.6976 18.8981C5.78398 18.9437 5.87636 18.9651 5.96745 18.9651C6.17515 18.9651 6.37598 18.853 6.47994 18.6565C6.62912 18.374 6.52088 18.0238 6.23838 17.8742Z" fill="white"/>
            <path d="M10.4081 8.84564C10.5761 8.84564 10.7388 8.87843 10.8919 8.94338C11.1868 9.06834 11.5261 8.93009 11.6506 8.6358C11.7752 8.3413 11.6375 8.00178 11.3428 7.87725C11.0466 7.75165 10.732 7.68799 10.4081 7.68799C9.0839 7.68799 8.00684 8.76548 8.00684 10.0897C8.00684 10.7595 8.28955 11.4038 8.78232 11.8573C8.89378 11.96 9.03417 12.0104 9.17413 12.0104C9.33039 12.0104 9.48621 11.9476 9.60046 11.8237C9.81694 11.5883 9.80172 11.222 9.56638 11.0058C9.30724 10.7674 9.16449 10.4416 9.16449 10.0899C9.16427 9.40357 9.7222 8.84564 10.4081 8.84564Z" fill="white"/>
            <path d="M20.4212 9.88354H11.1173C10.7977 9.88354 10.5386 10.1427 10.5386 10.4623V19.7661C10.5386 20.0859 10.7977 20.3451 11.1173 20.3451H20.4209C20.741 20.3451 21.0001 20.0859 21.0001 19.7661V10.462C21.0003 10.1427 20.7412 9.88354 20.4212 9.88354ZM19.8422 19.1872H11.6962V11.0412H19.8424V19.1872H19.8422Z" fill="white"/>
            <path d="M15.9671 15.3867C17.4375 15.3867 18.6339 14.1904 18.6339 12.72C18.6339 12.4002 18.3748 12.1411 18.055 12.1411C17.7352 12.1411 17.4761 12.4002 17.4761 12.72C17.4761 13.5521 16.7992 14.229 15.9671 14.229C15.135 14.229 14.4579 13.5521 14.4579 12.72C14.4579 12.4002 14.1986 12.1411 13.879 12.1411C13.5594 12.1411 13.3003 12.4002 13.3003 12.72C13.3003 14.1904 14.4965 15.3867 15.9671 15.3867Z" fill="white"/>
          </svg>
          <span>buy album</span>
        </primary-button>
      </div>
    </div>

<!-- Begin Mailchimp Signup Form -->
      <div id="mc_embed_signup" class="my-10 flex flex-no-wrap flex-col items-center">
      <form action="https://gmail.us17.list-manage.com/subscribe/post?u=76d10784d96e4f1f65a6b10d1&amp;id=fd5719d5b9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
      <p class="mini-widget-text text-center font-medium my-2">O únete a nuestro Aviario y recibe contenido único y noticias (prometemos no mandar SPAM)</p>
      <div class="mc-field-group">
        <label for="mce-EMAIL"> </label>
        <input type="email" value="" name="EMAIL" class="required email input" placeholder="soyunave@balandramusic.com..." id="mce-EMAIL">
      </div>
        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_76d10784d96e4f1f65a6b10d1_fd5719d5b9" tabindex="-1" value=""></div>
          <div class="clear text-center m-4"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button secondary-button py-1 px-3 text-white font-bold text-sm uppercase rounded bg-gradient-to-tr from-indigo-300 to-green-300 hover:bg-opacity-25 focus:outline-none"></div>
          </div>
      </form>
      </div>

<!--End mc_embed_signup-->


      <!-- <div class="buy-button">
        <primary-button>
          <svg class="inline" width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.15869 9.76109C3.15869 10.0807 3.41804 10.3398 3.73762 10.3398C4.05721 10.3398 4.31634 10.0807 4.31634 9.76109C4.31634 6.67588 6.82605 4.16595 9.91105 4.16595C10.2308 4.16595 10.49 3.90682 10.49 3.58723C10.49 3.26744 10.2308 3.0083 9.91105 3.0083C6.18775 3.00852 3.15869 6.03757 3.15869 9.76109Z" fill="white"/>
            <path d="M10.4891 5.58385C10.4891 5.26426 10.2299 5.00513 9.91014 5.00513C7.28811 5.00513 5.15479 7.13846 5.15479 9.76091C5.15479 10.0805 5.41392 10.3396 5.73372 10.3396C6.0533 10.3396 6.31244 10.0805 6.31244 9.76091C6.31244 7.77698 7.92642 6.16278 9.91014 6.16278C10.2299 6.16278 10.4891 5.90364 10.4891 5.58385Z" fill="white"/>
            <path d="M6.23838 17.8742C3.4078 16.3791 1.64935 13.4632 1.64935 10.2651C1.64935 5.52344 5.50705 1.66595 10.2487 1.66595C13.2885 1.66595 16.133 3.29687 17.6728 5.92211C17.8344 6.19796 18.1889 6.29013 18.4646 6.12852C18.7406 5.96691 18.833 5.61217 18.671 5.33632C16.9245 2.35827 13.6972 0.508301 10.2487 0.508301C4.86853 0.508301 0.491699 4.88534 0.491699 10.2653C0.491699 13.8941 2.48656 17.2018 5.6976 18.8981C5.78398 18.9437 5.87636 18.9651 5.96745 18.9651C6.17515 18.9651 6.37598 18.853 6.47994 18.6565C6.62912 18.374 6.52088 18.0238 6.23838 17.8742Z" fill="white"/>
            <path d="M10.4081 8.84564C10.5761 8.84564 10.7388 8.87843 10.8919 8.94338C11.1868 9.06834 11.5261 8.93009 11.6506 8.6358C11.7752 8.3413 11.6375 8.00178 11.3428 7.87725C11.0466 7.75165 10.732 7.68799 10.4081 7.68799C9.0839 7.68799 8.00684 8.76548 8.00684 10.0897C8.00684 10.7595 8.28955 11.4038 8.78232 11.8573C8.89378 11.96 9.03417 12.0104 9.17413 12.0104C9.33039 12.0104 9.48621 11.9476 9.60046 11.8237C9.81694 11.5883 9.80172 11.222 9.56638 11.0058C9.30724 10.7674 9.16449 10.4416 9.16449 10.0899C9.16427 9.40357 9.7222 8.84564 10.4081 8.84564Z" fill="white"/>
            <path d="M20.4212 9.88354H11.1173C10.7977 9.88354 10.5386 10.1427 10.5386 10.4623V19.7661C10.5386 20.0859 10.7977 20.3451 11.1173 20.3451H20.4209C20.741 20.3451 21.0001 20.0859 21.0001 19.7661V10.462C21.0003 10.1427 20.7412 9.88354 20.4212 9.88354ZM19.8422 19.1872H11.6962V11.0412H19.8424V19.1872H19.8422Z" fill="white"/>
            <path d="M15.9671 15.3867C17.4375 15.3867 18.6339 14.1904 18.6339 12.72C18.6339 12.4002 18.3748 12.1411 18.055 12.1411C17.7352 12.1411 17.4761 12.4002 17.4761 12.72C17.4761 13.5521 16.7992 14.229 15.9671 14.229C15.135 14.229 14.4579 13.5521 14.4579 12.72C14.4579 12.4002 14.1986 12.1411 13.879 12.1411C13.5594 12.1411 13.3003 12.4002 13.3003 12.72C13.3003 14.1904 14.4965 15.3867 15.9671 15.3867Z" fill="white"/>
          </svg>
          <span>buy album</span>
        </primary-button>
      </div> -->

  </div>
</template>

<script>
import RecentPostsWidget from './widgets/RecentPosts.vue';
import PagesWidget from './widgets/Pages.vue';
import PrimaryButton from './common/PrimaryButton.vue';
import SecondaryButton from './common/SecondaryButton.vue';

export default {
  components: {
    RecentPostsWidget,
    PagesWidget,
    PrimaryButton,
    SecondaryButton,
  },
  methods:{
    buyAlbum: function () {   
      window.open("https://balandra.bandcamp.com/album/aviario", "_blank");    
    }
  }
};
</script>

<style type="postcss">
.buy-button {
  position: sticky;
  position: -webkit-sticky;
  bottom: 185px;
  right: 25px;
}

@media only screen and (max-width: 1023px) {
  .buy-button {
    bottom: 315px;
  }
}

p.mini-widget-text {
  max-width: 250px;
}

</style>
