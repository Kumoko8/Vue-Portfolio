<template>
  
     <h1 class=" text-5xl font-heading text-black drop-shadow-xl"> Contact Me </h1>

    <p> Feel free to contact me at <a class="font-extrabold text-yellow-300" href="https://share.hsforms.com/1uOdn7b8wR7yy4xUNUmEeLAqfs72"> this </a> link or use the form below to set up a time!</p>
    <div id="formContainer">

    </div>
    <div>
<div>
    <Meeting/>
</div>
      

    </div>

    <div>
        <a href="/ResumeGeneral.pdf">
            <h4 class="text-3xl font-heading text-black drop-shadow-xl">  View Resume </h4>
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