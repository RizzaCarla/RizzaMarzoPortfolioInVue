<script setup>
import ReusableSection from '@/components/ReusableSection.vue'
</script>

<template>
  <v-main>
    <v-container>
      <ReusableSection>
        <template v-slot:left>My Story</template>
        <template v-slot:right>
          <p>
            There was a city of waterfalls, half-way across the world, in an archipelago called the Philippines. In that
            city was a girl named Rizza, who had aspirations to make a positive difference in the world after being
            inspired by her father, who helped thousands of people while serving in public office. Thanks to her
            parent's due diligence, she was able to immigrate to California, where the golden sun sets behind the palm trees and
            the tech valley looms.
          </p>
        </template>
      </ReusableSection>
      <ReusableSection>
        <template v-slot:left>Coming Soon!</template>
        <template v-slot:right>My Recent Work</template>
      </ReusableSection>
    </v-container>
  </v-main>
</template>

<style></style>