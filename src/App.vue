<script setup>
import HelloWorld from '@components/HelloWorld.vue'
</script>

<template>
  <div class="wrapper">
    <div>
      <a href="https://farmfe.org/" target="_blank">
        <img src="@images/logo.png" class="logo" alt="Farm logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="@images/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Farm + Vue" />
  </div>
</template>

<style scoped>
  .wrapper {
    align-items: center;
    background: #F3F4F8;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #9F1A8Faa);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
