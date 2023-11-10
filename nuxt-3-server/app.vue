<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
  <div>
    <NavBar/>
  </div>
  <div>
    <NuxtPage/>
  </div>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
  </div>
</template>



<!-- pages

home
about
projects
Grow
Contact
artwork
Seeds -->

<!-- tailwind  -->
