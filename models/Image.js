const Image = mongoose.model(
  "image",
  mongoose.Schema({
    imageUrl: String,
    required: true,
  })
);
