<script setup>
import { RouterView } from 'vue-router'
import TypeBar from './components/TypeBar.vue'
</script>

<template>
  <header>
    <TypeBar />
  </header>

  <RouterView v-slot="{ Component, route }">
    <component :is="Component" v-if="!route.meta.keepAlive" />
    <keep-alive>
      <component :is="Component" v-if="route.meta.keepAlive" />
    </keep-alive>
  </RouterView>
</template>

<style scoped></style>
