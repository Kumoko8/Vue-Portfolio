<template>
    <div class="meetings-iframe-container" :data-src="meetingSrc"></div>
  </template>
  
  <script >
  export default {
    data() {
      return {
        meetingSrc: "https://meetings.hubspot.com/taylor-golden?embed=true",
      };
    },
    mounted() {
      this.loadMeetingsEmbedCode();
    },
    methods: {
      loadMeetingsEmbedCode() {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
        document.body.appendChild(script);
      },
    },
  };
  </script>
  
  <style>
  /* Add your styles here if needed */
  </style>
  