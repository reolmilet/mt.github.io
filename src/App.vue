<script setup>
import { RouterView } from 'vue-router'
import TypeBar from './components/TypeBar.vue'
</script>

<template>
  <header>
    <TypeBar />
  </header>

  <RouterView />
</template>

<style scoped></style>
