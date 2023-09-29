<template>
  <v-main>
    <v-container>

      <h1 class="title">Artwork List</h1>
  
      <form @submit.prevent="addArtwork" method="post">
        <input class="input" v-model="title" type="text" name="name" placeholder="Enter artwork" />
        <input class="input" v-model="description" type="text" name="description" placeholder="Enter Description" />
        <button type="submit" class="submit-btn">Add Artwork</button>
      </form>
      <div class="artwork-wrapper">
        <h2 class="caption">Artwork List</h2>
        <div v-if="artworks.length < 1">Artwork list is empty</div>
        <ul v-else>
          <li class="artwork-item" v-for="(artwork, i) in artworks" :key="artwork._id">
            <div class="artwork">
              <h3 class="artwork-title">{{ artwork.title }}</h3>
              <span class="artwork-description">{{ artwork.description }}</span>
            </div>
  
            <div class="update-form" id="updateForm">
              <input type="text" name="updateTitle" id="updateArtwork" v-model="updateTitle" />
              <br />
              <input type="text" name="updateDescription" id="updateArtwork" v-model="updateDescription" />
            </div>
            <div class="artwork-btns">
              <button type="button" class="edit-btn" @click="updateArtwork($event, artwork._id, i, artwork)">
                Edit
              </button>
              <button type="button" class="del-btn" @click="deleteArtwork(artwork._id, i)">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      title: "",
      description: "",
      artworks: [],
      updateTitle: "",
      updateDescription: "",
    };
  },
  mounted() {
    this.getArtworks();
  },
  methods: {
    async getArtworks() {
      const res = await axios.get("/api/artworkList");
      this.artworks = res.data;
    },

    async addArtwork() {
      const res = await axios.post("api/artworkList/", {
        title: this.title,
        description: this.description,
      });
      this.title = "";
      this.description = "";
    },

    async deleteArtwork(id) {
      await axios.delete(`api/artworkList/${id}`);
    },

    async updateArtwork(event, id, i, artwork) {
      const updateForm = document.getElementsByClassName("update-form");
      const updateFormArray = [...updateForm];
      updateFormArray.forEach(async (el) => {
        if (updateFormArray.indexOf(el) === i) {
          if (!el.classList.contains("active")) {
            el.classList.add("active");
            this.updateTitle = artwork.title;
            this.updateDescription = artwork.description;
            event.target.innerHTML = "Save";
          } else {
            const res = await axios.put(`api/artworkList/${id}`, {
              title: this.updateTitle,
              description: this.updateDescription,
            });
            event.target.innerHTML = "Edit";
            el.classList.remove("active");
            this.updateTitle = "";
            this.updateDescription = "";
          }
        }
      });
    },
  },
  watch: {
    artworks() {
      this.getArtworks(); // Watch artworks list for any change
    },
  },
};
</script>
<!-- <script setup>
</script>
<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col
          v-for="n in 24"
          :key="n"
          cols="4"
        >
          <v-card height="200"></v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>


<style>

</style> -->