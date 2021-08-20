import Vue from "vue";
import Router from "vue-router";

// Components
import Home from "../components/Home.vue";
import Post from "../components/Post/Post.vue";
import Page from "../components/Page/Page.vue";
import News from "../components/News.vue";
import Contact from "../components/Contact.vue";
import Music from "../components/Music.vue";
import Gallery from "../components/Gallery.vue";
import Shows from "../components/Shows.vue";
import Staging from "../components/Staging.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      // Assuming you're using the default permalink structure for posts
      path: "/:year/:month/:day/:postSlug",
      name: "Post",
      component: Post,
    },
    {
      path: "/news",
      name: "News",
      component: News,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/music",
      name: "Music",
      component: Music,
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: Gallery,
    },
    {
      path: "/shows",
      name: "Shows",
      component: Shows,
    },
    {
      path: "/testing",
      name: "Testing",
      component: Staging,
    },
    {
      path: "/:pageSlug",
      name: "Page",
      component: Page,
    },
  ],
  mode: "history",
  base: "",

  // Prevents window from scrolling back to top
  // when navigating between components/views
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.afterEach((to) => {
  // (to, from)
  // Add a body class specific to the route we're viewing
  let body = document.querySelector("body");

  const slug = !to.params.postSlug ? to.params.pageSlug : to.params.postSlug;
  body.classList.add("vue--page--" + slug);
});

export default router;
