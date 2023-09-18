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
});

const Todo = model("todo", ArtistSchema);

export default Todo;
