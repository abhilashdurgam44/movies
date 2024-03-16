import express from "express";
import Movie from "./../models/movies.js";

const router = express.Router();

router.post("/movies", async (req, res) => {
  try {
    const data = req.body;

    // Check if the received data is an array
    if (!Array.isArray(data)) {
      // If not an array, handle it as a single document insertion
      const coinsdata = new Movie(data);

      // Save the single document to the database
      const response = await coinsdata.save();

      // Send the response back to the client
      return res.status(200).json(response);
    }

    // If the received data is an array, insert multiple documents
    const responses = await Movie.insertMany(data);

    // Send the response back to the client
    return res.status(200).json(responses);
  } catch (err) {
    // Handle errors and send an error response
    res.status(500).json({ message: "Error occurred while saving the data", error: err.message });
  }
});

router.get("/movies", async (req, res) => {
  try {
    // Fetch all documents from the "Coins" collection
    const response = await Movie.find();

    // Send the response back to the client
    res.status(200).json(response);
  } catch (err) {
    // Handle errors and send an error response
    res.status(500).json({ message: "Error occurred while fetching the data", error: err.message });
  }
});

export default router;
