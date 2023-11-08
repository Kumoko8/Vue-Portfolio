<script setup lang="ts">
import type { NuxtLink } from '#build/components';



</script>

<template>
    <div>
        <h1> Taylor Golden </h1>

        <img id="logo-image" src='/kiroLogo.PNG'>


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
