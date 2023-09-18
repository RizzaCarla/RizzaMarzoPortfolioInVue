<template>
  <v-app-bar
    app
    extended
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Rizza Marzo's Portfolio</v-toolbar-title>

    <v-btn><RouterLink to="/">Home</RouterLink></v-btn>
    <v-btn><RouterLink to="/about">My R&R</RouterLink></v-btn>
    <v-btn><RouterLink to="/artworks">Artwork</RouterLink></v-btn>
    <v-btn><RouterLink to="/travels">Travels</RouterLink></v-btn>
    <v-btn><RouterLink to="/recipes">Recipes</RouterLink></v-btn>
  </v-app-bar>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
</script>

<style>

</style>