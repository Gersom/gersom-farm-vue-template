<script setup>
import { ref } from 'vue'

const props = defineProps(['msg'])

const count = ref(0)
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Install
      <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Farm and Vue logos to learn more</p>
  </div>
</template>

<style lang="scss" scoped>
  .read-the-docs {
    color: #888
  }
</style>
