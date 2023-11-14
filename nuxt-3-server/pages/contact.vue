<template>
    <NuxtLink to="/about">
        <button>
            About
        </button>

    </NuxtLink>
    <NuxtLink to="/cultivate">
        <button>
            Cultivate
        </button>

    </NuxtLink>
    <NuxtLink to="/fruit">
        <button>
            Fruit
        </button>
    </NuxtLink>

    <a href="https://share.hsforms.com/1uOdn7b8wR7yy4xUNUmEeLAqfs72"> <h1> Contact Me Here </h1> </a>

    <div id="formContainer">

    </div>
    <div>
        <p> Meet with Me </p>
<div>
    <Meeting/>
</div>
      

    </div>

    <div>
        <a href="/ResumeGeneral.pdf">
            <h4> View Resume </h4>
        </a>
    </div>
</template>
<script>
import ContactForm from '@/components/ContactForm.vue'; // Adjust the path based on your project structure

export default {
  components: {
    ContactForm,
  },
  // Other options for your page or component
};
</script>