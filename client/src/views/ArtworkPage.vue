<template>
  <v-main>
    <v-container fluid>

      <div class="artwork-wrapper">
        <v-col v-if="artworkStore.artworkList.length < 1">No Artworks available at this time</v-col>
        <v-row v-else v-for="(artwork) in artworkStore.artworkList" :key="artwork._id" class="d-flex flex-row">
          <v-col class="artwork-image">
            <v-img cover :src="artwork.imageUrl"></v-img>
            <!-- <div class="update-form" id="updateForm">
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
            </div> -->
          </v-col>
          <v-col class="artwork-info">
            <h3 class="artwork-title">{{ artwork.title }}</h3>
            <span class="artwork-description">{{ artwork.description }}</span>
          </v-col>
        </v-row>
      </div>

      <!--   
      <form @submit.prevent="addArtwork" method="post">
        <input class="input" v-model="title" type="text" name="name" placeholder="Enter artwork" />
        <input class="input" v-model="description" type="text" name="description" placeholder="Enter Description" />
        <input class="input" v-model="imageUrl" type="text" name="imageUrl" placeholder="Image Url" />
        <button type="submit" class="submit-btn">Add Artwork</button>
      </form> -->
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";
import { useArtworkStore } from "@/stores/artwork.store"

export default {
  name: "ArtworkPage",
  data() {
    return {
      title: "",
      description: "",
      imageUrl: "",
      artworks: [],
      updateTitle: "",
      updateDescription: "",
      updateImageUrl: "",
    };
  },
  setup() {
    const artworkStore = useArtworkStore();
    return {
      artworkStore
    }
  },
  created() {
    try {
      this.refreshArtworksList()
      console.log(this.artworkStore.artworkList)
    } catch {
      console.log("There was an error loading the artworks")
    }
  },
  methods: {
    async refreshArtworksList() {
      await this.artworkStore.getArtworks();
    },

    async addArtwork() {
      const res = await axios.post("api/artworkList/", {
        title: this.title,
        description: this.description,
        imageUrl: this.imageUrl,
      });
      this.title = "";
      this.description = "";
      this.imageUrl = "";
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
            this.updateImageUrl = artwork.imageUrl
            event.target.innerHTML = "Save";
          } else {
            const res = await axios.put(`api/artworkList/${id}`, {
              title: this.updateTitle,
              description: this.updateDescription,
              imageUrl: updateImageUrl,
            });
            event.target.innerHTML = "Edit";
            el.classList.remove("active");
            this.updateTitle = "";
            this.updateDescription = "";
            updateImageUrl = "";
          }
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.v-main {
  padding-top: 0;
}
.v-container {
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
  margin-right: 0;
}

.artwork-image {
  flex: 0 0 74vh;
  border:  5px solid white;
}
</style>