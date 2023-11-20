<script>
import ReusableSection from '@/components/ReusableSection.vue';

export default {
  name: "HomePage",
  components: {
    ReusableSection
  },
  data() {
    return {
      // i like to be creative
      // embody wholeness
      // growing like a plant/tree
      story: "Hello, my name is Rizza Marzo - Software Engineer, artist, and plant enthusiast. I like climbing and reaching new heights! Most of my family members are medical professionals but I diverged and pursued Software Engineering instead. I am combining my creativity and passion for languages with technology. Looking to grow my self, my skills, and my career so I can in essence become a tree that is grounded with a strong foundation and help as many people as I can with what I create and the energy that I give.",
      currentCharacter: 0,
    }
  },
  mounted() {
    this.typeWriter()
  },
  methods: {
    typeWriter() {
      if (this.currentCharacter < this.story.length) {
        document.getElementById("myStory").innerHTML += this.story.charAt(this.currentCharacter);
        this.currentCharacter++;
        // speed is in milliseconds
        setTimeout(this.typeWriter, 50);
      }
    }
  }
}
</script>

<template>
  <v-card fluid fill-height rounded="0" class="home-page">
    <span class="tint">
      <v-img cover src="https://storage.cloud.google.com/rizza-marzo-portfolio-bucket/assets/Staircase.JPG">
        <ReusableSection>
          <template v-slot:left>
            <h4 id="myStory">
            </h4>
          </template>
        </ReusableSection>

      </v-img>
    </span>
  </v-card>
</template>

<style lang="scss" scoped>
#myStory {
  color: white;
  margin: 20px;

}
.home-page {
  width: 100%;
  height: 93vh;
}

.tint {
  background-color: black;
  display: inline-block;
  width: 100%;
  height: 100%;
}

.v-img {
  opacity: 0.8;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>