<template>
  <div class="comments-widget">
    <form class="comments-form" @submit.prevent="addComment">
      <input type="text" name="" id="" placeholder="Add a comment">
      <button type="submit">Post</button>
    </form>
    <div class="comments-list">
      <CommentItem 
        v-for="comment in comments"
        :comment=comment
        :key="comment.id"
      />
    </div>
  </div>
</template>

<script setup>
import CommentItem from './CommentItem.vue';

const comments = [
  {
    id: 1,
    level: 0,
    user: 'Ralph Edwards',
    userPhoto: null,
    date: 'Aug 19, 2024',
    content: 'In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristiqu',
    replyCount: 3,
    likeCount: 1
  },
  {
    id: 2,
    level: 1,
    user: 'Paul McCarty',
    userPhoto: null,
    date: 'Aug 19, 2024',
    content: 'Awesome!',
    replyCount: 12,
    likeCount: 1
  },
  {
    id: 3,
    level: 2,
    user: 'Eton Wally',
    userPhoto: null,
    date: 'Sept 19, 2024',
    content: 'Fusce porta imperdiet ante scelerisque ullamcorper. Pellentesque luctus ullamcorper lectus faucibus fringilla. Aenean tristique efficitur iaculis.',
    replyCount: 0,
    likeCount: 45
  },
  {
    id: 4,
    level: 0,
    user: 'Eton Wally',
    userPhoto: null,
    date: 'Sept 19, 2024',
    content: 'Fusce porta imperdiet ante scelerisque ullamcorper. Pellentesque luctus ullamcorper lectus faucibus fringilla. Aenean tristique efficitur iaculis.',
    replyCount: 3,
    likeCount: 7
  }
]

function addComment() {
  console.log('form submit');

}

</script>

<style scoped>
.comments-widget {
  max-width: 660px;
  margin: auto;
}


.comments-form {
  position: relative;
}

.comments-form input {
  appearance: none;
  width: 100%;
  height: 82px;
  padding-inline: 15px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #B4B7C9;
  background-color: #10132E;
  border-radius: 14px;
  color: var(--text);
}

.comments-form input:focus {
  outline: none;
  border-color: #fff;
}

.comments-form input::placeholder {
  color: #565973;
}

.comments-form button {
  --button-h: 52px;

  appearance: none;
  position: absolute;
  right: 15px;
  top: 50%;
  height: var(--button-h);
  padding: 0 25px;
  margin-top: calc(var(--button-h) / 2 * -1);
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  border: 1px solid rgba(39, 42, 69, 37);
  border-radius: 14px;
  background: linear-gradient(to right, #161A31, #06091F);
  cursor: pointer;
  transition: all 0.2s ease;
}

.comments-form button:hover {
  box-shadow: 1px 1px 6px rgba(255, 255, 255, 0.1)
}

.comments-list {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: 40px;
  margin-top: 40px;
}
</style>