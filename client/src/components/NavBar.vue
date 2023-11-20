<template>
    <v-app-bar flat density="compact">
        <v-tabs  v-for="(tabLink, tabName) in tabs" :key="tabName" align-tabs="center">
          <v-tab :to="tabLink">{{ tabName }}</v-tab>
        </v-tabs>
    </v-app-bar>
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
      pageTitle: "Home",
      tabs: {
        "Home": "/",
        "Gallery": "/artworks",
        "Map": "/travels",
      }
    }
  },
}
</script>

<style lang="scss" scoped>

.v-app-bar.v-toolbar {
  background: #fcfcfb;
  color: #ef98a7;
}

:deep(.v-toolbar__content) {
  display: flex;
  justify-content: center;
}
.title-container {
  display: flex;
  justify-content: center;
}

.v-app-bar-title,
.title-container {
  flex: 1 1 auto;
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