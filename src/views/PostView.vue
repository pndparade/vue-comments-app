<script setup>
import CommentWidget from '@/components/CommentWidget.vue';
import PostContent from '@/components/PostContent.vue';
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <div class="container">
    <TheHeader/>
    <main>
      <PostContent/>
      <div class="post-comments">
        <CommentWidget/>
      </div>
    </main>
  </div>
</template>

<style>
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding-inline: var(--page-gap);
  padding-block: 40px;
}

.post-comments {
  margin-top: 30px;
}
</style>
