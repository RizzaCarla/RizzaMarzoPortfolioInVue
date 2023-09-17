<script>
export default {
  setup() {
    
  },
}
</script>

<template>
  <v-row>
    <v-col class="left">
      <slot name="left"/>
    </v-col>
    <v-col class="right">
      <slot name="right"/>
    </v-col>
  </v-row>
</template>

<style scoped>
</style>