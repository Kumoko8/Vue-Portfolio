<script setup>

</script>

<template >
    <!-- I want this to display an array of nuxt links that change as each page goes -->
    <section class="font-body-800 font-extrabold bg-black grid grid-rows-1 grid-cols-3 text-white place-content-between">
        <img class="rounded-full h-12 m-2" src="/images/kiroLogo.png">
        <h1 class="text-center m-5 font-heading text-3xl font-thin text-yellow-300 ">
            Taylor Golden
        </h1>
        <div class="justify-self-end">
            <NuxtLink to="/">
                <button class="m-3 hover:text-yellow-300 " >
                    Home
                </button>
            </NuxtLink>
            <a href="/about/#projects">
                <button class="m-3 hover:text-yellow-300 ">
                    Projects
                </button>
            </a>
            <NuxtLink to="/contact">
                <button class="m-3 hover:text-yellow-300 ">
                    Contact
                </button>
            </NuxtLink>

        </div>

    </section>
</template>



