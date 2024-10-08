<template>
  <div :class="['comment-block', `--level-${comment.level}`]">
    <article class="comment">
      <div class="comment__img"><img src="@/assets/images/user-photo.jpg" alt="Ralph Edwards"></div>
      <div class="comment__body">
        <header class="comment__header">
          <div class="comment__author">{{ comment.user }}</div>
          <div class="comment__date">{{ comment.date }}</div>
        </header>
        <div class="comment__text">{{ comment.content }}</div>
        <footer class="comment__action">
          <CounterButton 
            :counter="likeCount"
            @click="toggleLike">
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 6H10.791L11.6332 3.47475C11.7847 3.01875 11.7083 2.51325 11.427 2.12325C11.1458 1.73325 10.6898 1.5 10.209 1.5H9C8.77725 1.5 8.5665 1.599 8.42325 1.77L4.89825 6H3C2.17275 6 1.5 6.67275 1.5 7.5V14.25C1.5 15.0773 2.17275 15.75 3 15.75H5.25H12.9802C13.602 15.75 14.166 15.3592 14.385 14.7765L16.4528 9.26325C16.4843 9.17925 16.5 9.09 16.5 9V7.5C16.5 6.67275 15.8273 6 15 6ZM3 7.5H4.5V14.25H3V7.5ZM15 8.86425L12.9802 14.25H6V7.0215L9.351 3H10.2105L9.039 6.51225C8.96175 6.741 9.00075 6.99225 9.14175 7.188C9.28275 7.3845 9.50925 7.5 9.75 7.5H15V8.86425Z"/>
            </svg>
          </CounterButton>
          <CounterButton 
            :counter="comment.replyCount"
            @click="showReplyForm">
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 1.5H3C2.17275 1.5 1.5 2.17275 1.5 3V16.5L5.49975 13.5H15C15.8273 13.5 16.5 12.8273 16.5 12V3C16.5 2.17275 15.8273 1.5 15 1.5ZM15 12H5.00025L3 13.5V3H15V12Z"/>
            </svg>
          </CounterButton>
        </footer>
      </div>
    </article>
    <form class="comment-reply-form" v-if="isReplyOpen" @submit.prevent="addCommentReply">
      <input type="text" placeholder="Add a comment">
    </form>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import CounterButton from './CounterButton.vue';

const { comment } = defineProps({
  comment: Object
})

const isReplyOpen = ref(false)
const hasLike = ref(false)
const likeCount = ref(comment.likeCount)

function showReplyForm() {
  isReplyOpen.value = !isReplyOpen.value
}

function toggleLike() {
  if (hasLike.value) {
    likeCount.value--
  } else {
    likeCount.value++
  }

  hasLike.value = !hasLike.value
}

function addCommentReply() {
  console.log('form reply submit')
}

</script>

<style scoped>
.comment-block {
  --userpicSize: 48px;
  --gap: 20px;
}

.comment-block.--level-1 {
  margin-left: calc(var(--userpicSize) + var(--gap))
}

.comment-block.--level-2 {
  margin-left: calc((var(--userpicSize) + var(--gap)) * 2)
}

.comment {
  display: grid;
  grid-template-columns: var(--userpicSize) 1fr;
  column-gap: var(--gap);
}

.comment__img img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 50%;
}

.comment__body {
  padding: 15px;
  background-color: #10132E;
  border: 1px solid #B4B7C9;
  border-radius: 14px;
}

.comment__header {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.comment__author {
  font-weight: 700;
}

.comment__date {
  font-size: 14px;
  color: #9397AD;
}

.comment__text {
  margin: 20px 0 10px;
}

.comment__action {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
}

.comment-reply-form {
  margin-left: calc(var(--userpicSize) + var(--gap));
  margin-top: calc(var(--gap) * 2);
}

.comment-reply-form input {
  appearance: none;
  width: 100%;
  height: 36px;
  padding-inline: 10px;
  font-family: inherit;
  font-weight: 600;
  color: var(--text);
  background-color: #10132E;
  border: 1px solid #B4B7C9;
  border-radius: 14px;
  transition: border 0.25s ease;
}

.comment-reply-form input::placeholder {
  color: #565973;
}

.comment-reply-form input:focus {
  outline: none;
  border-color: #fff;
}
</style>