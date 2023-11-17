<script setup lang="ts">
import type { NuxtLink } from '#build/components';

// const {data: scizor} = await useAsyncData('scizor', () => {

//    return $fetch(api)
// })



//useFetch replaces lines 4-7


//fetch on client and server isometric $fetch
//$fetch gives you helpful info about the request like status response etc

//it already processes json for you, so you don't need .then
//need to return the data

</script>

<template >
    <div
        class="grid grid-cols-1 grid-rows-2 items-start justify-items-center align-items-center bg-[url('/images/kiiro-lite.png')] bg-cover bg-center min-h-screen ">
        <h2 class="font-body-800 font-extrabold text-xl text-center text-emerald-300 drop-shadow-xl mt-12  ">
            Software Developer, Educator, Illustrator, Dad
        </h2>

        <NuxtLink to="/about">
            <button
                class=" bg-yellow-300 px-3 py-1 text-base font-semibold text-black rounded-xl w-36 mb-52 max-h-fit hover:bg-emerald-300 text-center">
                Enter

            </button>
        </NuxtLink>
       

    </div>
    
</template>
<style ></style>
