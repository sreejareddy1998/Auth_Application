import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .catch(
    (error) => console.error("Error connecting to database:", error)
    // console.log(process.env.MONGO)
  );
const app = express();
app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
