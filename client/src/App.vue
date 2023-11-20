<script setup>
import NavBar from '@/components/NavBar.vue';
import Sidebar from '@/components/Sidebar.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <v-layout>
    <NavBar/>
    <Sidebar />
    <v-main>
      <RouterView></RouterView>
    </v-main>
    </v-layout>
</template>

<style lang="scss" scoped>
.v-main {
  background: #f5f5f5;
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
