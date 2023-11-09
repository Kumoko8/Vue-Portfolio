<template>

  <div>
    <p>Counter: {{ $store.state.counter }}</p>
    <button @click="$store.commit('increment')">Increment</button>
  </div>


    <NuxtLink> Home </NuxtLink>
    <NuxtLink> About </NuxtLink>
    <NuxtLink> Contact </NuxtLink>
    <NuxtLink> Fruit </NuxtLink>
    <NuxtLink> Seeds </NuxtLink>
    <NuxtLink> Cultivate </NuxtLink>
    <NuxtLink> Growing </NuxtLink>
    
</template>


<script>
export default {
  name: 'NavBar'
}
</script>

