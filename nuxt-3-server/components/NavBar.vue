<script setup>
const navLinks = useNavLinks();
const navEndpoints = useEdpoints();
</script>

<template>

<!-- I want this to display an array of nuxt links that change as each page goes -->
<ul>
    <li v-for="links in navLinks" :key="links"><NuxtLink>{{ links }}</NuxtLink></li>
</ul>
    
    
</template>



