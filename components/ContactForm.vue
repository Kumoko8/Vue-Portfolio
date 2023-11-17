<!-- HubSpotForm.vue -->
<template>
  <div id="formContainer" class="hs-form-container" ref="formContainer">

  </div>
</template>

<script>
export default {
  mounted() {
    this.loadFormScript();
  },
  methods: {
    loadFormScript() {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.onload = this.createForm;

      document.body.appendChild(script);
    },
    createForm() {
      if (typeof hbspt !== "undefined" && hbspt.forms) {
        hbspt.forms.create({
          region: "na1",
          portalId: "44406398",
          formId: "b8e767ed-bf30-47bc-b2e3-150d52611e2c"
        }, {
          target: '#formContainer'
        });
      }
    },
  },
};
</script>

<style>
/* Add your styles here if needed */
</style>
