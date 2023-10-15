import { Schema, model } from "mongoose";

const ArtistSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  }
});

const Artwork = model("artwork", ArtistSchema);

export default Artwork;
