<template>
  <v-navigation-drawer @click="rail = false" :rail="rail" permanent width="100%">
    <v-list>
      <v-list-item prepend-avatar="https://storage.cloud.google.com/rizza-marzo-portfolio-bucket/assets/resume%20photo%20circle-cropped.png" title="Rizza Carla Modina Marzo" nav>
        <template v-slot:append>
            <v-icon variant="text" icon="chevron_right" @click.stop="closeSidebar"></v-icon>
        </template>
      </v-list-item>
      <v-list-item :class="{ 'center-download .': rail === false }">
        <template v-slot:prepend v-if="rail === true">
          <v-icon icon="download"></v-icon>
        </template>
        <v-btn rounded="xs">Download Resume</v-btn>
      </v-list-item>
    </v-list>
      
    <v-divider></v-divider>
    
    <v-list>
      <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="account_circle"
              title="Personal Info"
            ></v-list-item>
          </template>
          <v-list-item prepend-icon="phone" value="Number"><span>(909) 904-9029</span></v-list-item>
          <v-list-item prepend-icon="email" value="Email"><span>rizzacarla.12@gmail.com</span></v-list-item>
          <v-list-item prepend-icon="home" value="Address"><span>Rancho Cucamonga, CA 91739</span></v-list-item>
          <v-list-item prepend-icon="chat" value="LinkedIn"><span>LinkedIn</span></v-list-item>
          <v-list-item prepend-icon="laptop" value="Github"><span>Github</span></v-list-item>
      </v-list-group>
      <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="terminal"
              title="Skills"
            ></v-list-item>
          </template>
          <v-list-item>React</v-list-item>
          <v-list-item>Vue</v-list-item>
      </v-list-group>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      rail: true,
    }
  },
  methods: {
    closeSidebar() {
      this.rail = !this.rail;
    },
  }
}
</script>

<style lang="scss" scoped>
.v-navigation-drawer {
  background: #fcfcfb;
  color: #ef98a7;
}
.center-download {
  position: relative;
  display: flex;
  justify-content: center;
}
:deep(.v-avatar) {
  position: relative;
  left: 8px;
}
:deep(.v-list-item-title) {
  margin-left: 10px;
}
</style>