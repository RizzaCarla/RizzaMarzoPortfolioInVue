<template>
  <v-sheet class="artwork-page mx-auto" elevation="8">

    <v-slide-group class="pa-4 d-flex justify-content-center" selected-class="bg-primary" show-arrows>
      <v-slide-group-item v-for="artwork in artworkStore.artworkList" :key="artwork._id"
        v-slot="{ toggle, selectedClass }">
        <v-card :class="['ma-4', selectedClass]" height="100" width="100" @click="toggle">
          <div @click="() => selectedArtwork = artwork" class="d-flex align-center justify-center">
            <v-img cover :src="artwork.imageUrl"></v-img>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet v-if="selectedArtwork != null" height="25vh">
        <div class="d-flex align-center justify-center">
          <v-col>
            <v-img class="artwork-image" :src="selectedArtwork.imageUrl"></v-img>
          </v-col>
          <v-col class="artwork-info">
            <h3 class="artwork-title">{{ selectedArtwork.title }}</h3>
            <span class="artwork-description">{{ selectedArtwork.description }}</span>
          </v-col>
        </div>
      </v-sheet>
    </v-expand-transition>

  </v-sheet>

<!-- 
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
  <form @submit.prevent="addArtwork" method="post">
    <input class="input" v-model="title" type="text" name="name" placeholder="Enter artwork" />
    <input class="input" v-model="description" type="text" name="description" placeholder="Enter Description" />
    <input class="input" v-model="imageUrl" type="text" name="imageUrl" placeholder="Image Url" />
    <button type="submit" class="submit-btn">Add Artwork</button>
  </form> -->
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
      selectedArtwork: null,
      isSelected: false,
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
.artwork-page {
  height: 93vh;
}

:deep(.v-slide-group__content) {
  justify-content: center;
}
.artwork-image {
  height: 65vh;
  border-radius: 5px;
}
:deep(.artwork-image > .v-img__img--contain) {
  border-radius: 5px;
  border: 10px solid white;
}
</style>