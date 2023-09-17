<script setup>
import NavBar from '@/components/NavBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <v-app>
    <NavBar/>
    <RouterView></RouterView>
  </v-app>
</template>

<style scoped>
</style>
