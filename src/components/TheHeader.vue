import { RouterLink } from 'vue-router'

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/auth">Auth</RouterLink>
      <a href="#!">Testimonials</a>
      <a href="#!">Contacts</a>
    </nav>
  </header>
</template>

<script setup>

</script>

<style scoped>
header {
  margin-bottom: 95px;
  text-align: center;
}

nav {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 24px 50px;
  border-radius: 13px;
  background-image: linear-gradient(-75deg, #04071D, #0C0E23);
  border: 1px solid rgba(39, 42, 69, 37);
}

nav a {
  position: relative;
  font-size: 1em;
  font-weight: 500;
  color: #C1C2D3;
  text-decoration: none;
  transition: color 0.25s ease;
}

nav a:hover,
nav a.is-current {
  color: #fff;
}

nav a.is-current {
  pointer-events: none;
}

nav a.is-current::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -7px;
  margin-left: -3px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
}

@media screen and (width > 600px) {
  nav {
    flex-direction: row;
    gap: 32px;
  }
}
</style>