<template>
  <div>

    <v-app-bar flat density="compact">
      <v-tabs  v-for="(tabLink, tabName) in tabs" :key="tabName">
        <v-tab :to="tabLink">{{ tabName }}</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer expand-on-hover :rail="rail" permanent>
  
        <v-avatar>
          <v-img src="https://storage.cloud.google.com/rizza-marzo-portfolio-bucket/assets/resume%20photo%20circle-cropped.png"></v-img>
        </v-avatar>
        <div><v-icon></v-icon><span>rizzacarla.12@gmail.com</span></div>

        <v-divider></v-divider>
<!--   
      <v-list-item link @click="changePageTitle('Home')">
          <RouterLink to="/">Home</RouterLink>
        </v-list-item>
      <v-list-item link @click="changePageTitle('R&R')">
          <RouterLink to="/about">My R&R</RouterLink>
        </v-list-item>
        <v-list-item link @click="changePageTitle('Artwork')">
          <RouterLink to="/artworks">Artwork</RouterLink>
        </v-list-item>
        <v-list-item link @click="changePageTitle('Travels')">
          <RouterLink to="/travels">Travels</RouterLink>
        </v-list-item>
        <v-list-item link @click="changePageTitle('Recipes')">
          <RouterLink to="/recipes">Recipes</RouterLink>
        </v-list-item> -->
    </v-navigation-drawer>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: "NavBar",
  component: {
    RouterLink
  },
  data() {
    return {
      drawer: true,
      rail: true,
      pageTitle: "Home",
      tabs: {
        "Home": "/",
        "R&R": "/about",
        "Gallery": "/artworks",
        "Map": "/travels",
        "Kitchen": "/recipes"
      }
    }
  },
  methods: {
    changePageTitle(title) {
      let page = window.location.pathname.replace('/', '')
      if (page === "r&r") {
        return "R&R";
      } else if (page === "artworks") {
        return "Gallery";
      } else if (page === "travels") {
        return "Map";
      } else if (page === "recipes") {
        return "Kitchen";
      } else {
        return "Home";
      }
    }
  },
  computed: {
    pageTitle() {
      this.changePageTitle();
      return this.pageTitle;
    }
  },
  watch: {
    pageTitle(oldVal, newVal) {
      return oldVal === newVal ? newVal : oldVal;
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 5vh;
}

.v-app-bar.v-toolbar,
.v-navigation-drawer {
  background: #fcfcfb;
  color: #ef98a7;
}

.v-navigation-drawer {
  display: flex;
  flex-direction: column;
}

.title-container {
  display: flex;
  justify-content: center;
}

.navbar-drawer,
.v-app-bar-title,
.title-container {
  flex: 1 1 auto;
}

.navbar-drawer {
  display: flex;
  justify-content: end;
}

.title {
  position: relative;
  width: 200px;
  /* for demo purposes */
  padding: 10px;
  display: flex;
  justify-content: center;
}

.top,
.bottom {
  position: absolute;
  width: 20px;
  height: 20px;
  pointer-events: none;
}

.top {
  top: 0;
  border-top: 1px solid;
}

.bottom {
  bottom: 0;
  border-bottom: 1px solid;
}

.left {
  left: 0;
  border-left: 1px solid;
}

.right {
  right: 0;
  border-right: 1px solid;
}</style>