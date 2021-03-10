<template>
  <div>
    <recent-posts-widget :moreButton="false" limit="10" class="mb-10">News</recent-posts-widget>
  </div>
</template>

<script>
import RecentPostsWidget from './widgets/RecentPosts.vue';

export default {
 components: {
   RecentPostsWidget,
 }
}
</script>

<style>

</style>