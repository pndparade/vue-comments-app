<template>
  <div class="auth-page">
    <div class="container">
      <form v-if="isUserUnknown" class="auth-form">
        <hgroup>
          <h1>Sign Up</h1>
          <p>Ready to become part of the exclusive club? Fill in the details below, and let the journey begin!</p>
        </hgroup>
        <div class="auth-form-fields">
          <div class="inputbox">
            <input type="text" placeholder="Full Name">
          </div>
          <div class="inputbox">
            <input type="email" placeholder="Email">
          </div>
          <div class="inputbox">
            <input type="password" placeholder="Password">
          </div>
          <div class="inputbox">
            <input type="password" placeholder="Confirm password">
          </div>
        </div>
        <button type="submit" class="auth-form-submit">Sign In</button>
      </form>

      <form v-else class="auth-form" >
        <hgroup>
          <h1>Sign In</h1>
          <p>Ready to become part of the exclusive club? Fill in the details below, and let the journey begin!</p>
        </hgroup>
        <div class="auth-form-fields">
          <div class="inputbox">
            <input type="email" placeholder="Email">
          </div>
          <div class="inputbox">
            <input type="password" placeholder="Password">
          </div>
        </div>
        <button type="submit" class="auth-form-submit">Sign In</button>
      </form>

      <div class="auth-page__toggle">
        {{ isUserUnknown ? 'Already have an account?' : 'Don’t have account?' }}
        <button @click="toggleView">{{ isUserUnknown ? 'Login' : 'Sign Up' }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isUserUnknown = ref(true)
function toggleView() {
  isUserUnknown.value = !isUserUnknown.value
}

</script>

<style scoped>
.auth-page {
  background: url('@/assets/images/bg.jpg') no-repeat center center;
  background-size: cover;
}

.container {
  display: grid;
  grid-template-rows: 1fr auto;
  max-width: 1570px;
  min-height: 100dvh;
  padding-inline: var(--page-gap);
}

.auth-form {
  max-width: 550px;
  padding-block: 40px;
  margin: auto;
}

hgroup {
  margin-bottom: 60px;
  text-align: center;
}

h1 {
  font-size: 40px;
  margin: 0 0 20px;
}

hgroup p {
  font-size: 20px;
  margin: 0;
}

.auth-form-fields {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: 24px;
  margin-bottom: 56px;
}

.inputbox input {
  width: 100%;
  height: 60px;
  padding-inline: 18px;
  font-family: inherit;
  font-size: 18px;
  border: 1px solid #4D4D4D;
  border-radius: 4px;
  background-color: transparent;
  color: var(--text);
  transition: border 0.25s ease;
}

.inputbox input:focus {
  outline: none;
  border-color: #fff;
}

.auth-form-submit {
  appearance: none;
  width: 100%;
  height: 60px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  border: none;
  border-radius: 4px;
  background-image: linear-gradient(-84deg, #ef77e3, #724FF0, #316AD7, #F6B8FD);
  background-size: 300% 100%;
  color: var(--text);
  cursor: pointer;
  transition: all .4s ease-in-out;
}

.auth-form-submit:hover {
  background-position: 100% 0;
}

.auth-form-submit:focus {
  outline: none;
}
</style>
