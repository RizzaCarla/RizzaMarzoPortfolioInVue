//ArtworkList.js
import { Router } from "express";
import Artwork from "../../models/Artwork.js";

const router = Router();

router
  .route("/")

  // Get all artworks in the database
  .get(async (_req, res) => {
    try {
      const artworkList = await Artwork.find();
      if (!artworkList) throw new Error("No artwork List found");
      res.status(200).json(artworkList);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  //Post request creates a new artwork in the database
  .post(async (req, res) => {
    const newArtwork = new Artwork(req.body); // create a new instance of the artwork model
    try {
      const artwork = await newArtwork.save(); // Save created artwork
      if (!artwork) throw new Error("Something went wrong saving the artwork");
      res.status(200).json(artwork);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

router
  .route("/:id")

  // Update the artwork with the given id
  .put(async (req, res) => {
    const { id } = req.params;
    try {
      const updated = await Artwork.findByIdAndUpdate(id, { ...req.body });
      if (!updated) throw Error("Something went wrong ");
      res.status(200).json(updated);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  // Delete the artwork with the given id
  .delete(async (req, res) => {
    const { id } = req.params;
    try {
      const removed = await Artwork.findByIdAndDelete(id);
      if (!removed) throw Error("Something went wrong ");
      res.status(200).json(removed);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  // Get the artwork with the given id
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const artwork = await Artwork.findById(id);
      if (!artwork) throw new Error("No artwork found");
      res.status(200).json(artwork);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

export default router;
