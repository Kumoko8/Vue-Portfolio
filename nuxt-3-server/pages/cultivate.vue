<template>
    <NuxtLink to="/about">
        <button>
            About
        </button>

    </NuxtLink>
    <NuxtLink to="/contact">
        <button>
            Contact
        </button>
    </NuxtLink>
    <NuxtLink to="/plant-seeds">
        <button>
            Seeds
        </button>
    </NuxtLink>

    <h1> Grow </h1>
    <div>
        <div>
            <h2> What would you like to learn?</h2>
        </div>

        <div>
            <h3> Japanese </h3>

        </div>
        <div>
            <h3> JavaScript </h3>
            <VideoEl/>
        </div>
        <div>

        </div>
        <div>
            <h3> Math </h3>
            <ContentComingSoon/>
        </div>
        <div>
            <h3> Science </h3>
            <ContentComingSoon/>
        </div>
    </div>
</template>
<script>
import ContentComingSoon from '../components/ContentComingSoon.vue';
import VideoEl from '../components/VideoEl.vue';
export default {
  components: {
    ContentComingSoon, VideoEl
  }
}




</script>

<style lang="postcss" scoped>
.coming-soon {
    @apply bg-yellow-300 px-3 py-1 text-base font-semibold text-black rounded-xl w-36 max-h-fit;

    &:hover {
        @apply bg-gray-300 shadow-2xl;
    }
}
</style>
