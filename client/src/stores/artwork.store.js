import { defineStore } from "pinia";
import axios from "axios";

export const useArtworkStore = defineStore("artworkStore" , {
  state: () => ({
    artworkList: [],
  }),

  getters: {
    getArtworkById(state) {
      return (artworkId) => {
        return state.artworks.filter((artwork) => artwork.id === artworkId)
      }
    }
  },

  actions: {
    async getArtworks() {
      this.artworkList = await axios.get("api/artworkList").then((res) => {
        return res.data
      })
      .catch((error) => {
        console.log("error", error)
      })
    }
  }
})