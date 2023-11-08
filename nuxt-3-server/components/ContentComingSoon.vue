<template>
    <div class="center">
        <div class="content-coming-soon">
          <h4 class="transparent">Content Coming Soon!</h4>
        </div>

    </div>
  </template>
  
  <script>
  export default {
    name: 'ContentComingSoon'
  }
  </script>
  
  <style scoped>
  .content-coming-soon {
    text-align: center;
    padding: 10px;
    background-color: #f8ecb0;
    width: fit-content;
    height: auto;
    justify-content: center;
    border-radius: 12px;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .transparent {
    background-color: transparent;
  }
  </style>
  