<script setup>
import NavBar from '@/components/NavBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <v-layout>
    <NavBar/>
      <RouterView></RouterView>
    </v-layout>
</template>

<style lang="scss" scoped>
.v-main {
  background: #f5f5f5;
  position: relative;
  width: 100%;
}
</style>
