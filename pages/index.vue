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
const { data } = await useFetch('/api/weather')
</script>

<template>
    <div>
        <h1> Taylor Golden </h1>
        <pre>
            {{ data }}

        </pre>
        <!-- {{ scizor }} -->

        <img src="/kiroLogo.PNG"/>


        <h2 >
            Software Developer, Educator, Illustrator, Dad
        </h2>

        <NuxtLink to="/about" >
            <button class="enter">
                Enter

            </button>
        </NuxtLink>
        

    </div>
</template>
<style lang="postcss" scoped>
.enter {
  @apply bg-yellow-300 px-3 py-1 text-base font-semibold text-black rounded-xl w-36 max-h-fit;
  &:hover {
    @apply bg-gray-300 shadow-2xl;
  }
}
</style>
