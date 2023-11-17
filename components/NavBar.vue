<script setup>

</script>

<template >

<!-- I want this to display an array of nuxt links that change as each page goes -->
<section class="bg-black grid grid-rows-1 grid-cols-5 text-white">

<NuxtLink to="/growing">
    <button>
        Projects
    </button>
</NuxtLink>
<NuxtLink to="/contact">
    <button>
        Contact
    </button>
</NuxtLink>
<NuxtLink to="/">
    <button>
        Home
    </button>
</NuxtLink>
</section>
    
    
</template>



