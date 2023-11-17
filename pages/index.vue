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

<template>
    <div>
        <h1> Taylor Golden </h1>
<NuxtImg src="/images/kiiro-lite.png"/>



        <h2 class="font-body">
            Software Developer, Educator, Illustrator, Dad
        </h2>

        <NuxtLink to="/about" >
            <button class="bg-yellow-300 px-3 py-1 text-base font-semibold text-black rounded-xl w-36 max-h-fit hover:bg-emerald-300">
                Enter

            </button>
        </NuxtLink>
        

    </div>
</template>
<style >
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600&family=Modak&display=swap');


</style>
