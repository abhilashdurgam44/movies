import mongoose from "mongoose";

const mongodbURL =
  "mongodb+srv://studyece44:1VlMOSik3lzCwm2Y@cluster0.jkkkymm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongodbURL);

const db = mongoose.connection;

db.on("error", () => {
  console.log("error occured while connecting to the data base");
});

db.on("connected", () => {
  console.log("connected to mongodb");
});

export default db;
