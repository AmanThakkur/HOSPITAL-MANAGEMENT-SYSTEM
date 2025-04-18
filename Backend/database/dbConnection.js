import mongoose from "mongoose";
import { config } from "dotenv";
config({ path: "./config/config.env" });

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
      dbName: "HOSPITAL_MANAGEMENT_SYSTEMS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
