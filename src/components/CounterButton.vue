<template>
  <button class="counter-btn" type="button">
    <slot></slot>
    {{ counter }}
  </button>
</template>

<script setup>
defineProps({
  counter: Number
})
</script>

<style scoped>
.counter-btn {
  appearance: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: transparent;
  border: none;
  color: #9397AD;
  cursor: pointer;
  transition: color 0.25s ease;
}

.counter-btn>>>svg {
  fill: currentColor;
}

.counter-btn:hover {
  color: var(--text);
}
</style>