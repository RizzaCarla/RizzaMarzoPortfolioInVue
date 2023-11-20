<template>
  <v-navigation-drawer @click="rail = false" :rail="rail" permanent width="100%">
    <v-list>
      <v-list-item prepend-avatar="https://storage.cloud.google.com/rizza-marzo-portfolio-bucket/assets/resume%20photo%20circle-cropped.png" title="Rizza Carla Modina Marzo" nav>
        <template v-slot:append>
            <v-icon variant="text" icon="chevron_right" @click.stop="rail = !rail"></v-icon>
        </template>
      </v-list-item>
      <v-list-item>
        <template v-slot:prepend v-if="rail === true">
          <v-icon icon="download"></v-icon>
        </template>
        <template v-slot:append>
          <v-btn rounded="xs" :class="{ 'center-download': rail === false }">Download Resume</v-btn>
        </template>
      </v-list-item>
    </v-list>
      
    <v-divider></v-divider>
    
    <v-list>
      <v-list-group value="Personal Info">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="account_circle"
              title="Personal Info"
            ></v-list-item>
          </template>
          <v-list-item prepend-icon="home" value="Name"><span>Rizza Carla Modina Marzo</span></v-list-item>
          <v-list-item prepend-icon="home" value="Number"><span>(909) 904-9029</span></v-list-item>
          <v-list-item prepend-icon="home" value="Email"><span>rizzacarla.12@gmail.com</span></v-list-item>
          <v-list-item prepend-icon="home" value="Address"><span>Rancho Cucamonga, CA 91739</span></v-list-item>
          <v-list-item prepend-icon="home" value="LinkedIn"><span>LinkedIn</span></v-list-item>
          <v-list-item prepend-icon="home" value="Github"><span>Github</span></v-list-item>
      </v-list-group>
      <v-list-group value="Skills">
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
      drawer: true,
      rail: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.v-navigation-drawer {
  background: #fcfcfb;
  color: #ef98a7;
}
.center-download {
  position: relative;
  right: 15%;
}
:deep(.v-avatar) {
  position: relative;
  left: 8px;
}
:deep(.v-list-item-title) {
  margin-left: 10px;
}
</style>