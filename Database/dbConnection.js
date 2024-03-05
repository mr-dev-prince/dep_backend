import mongoose from "mongoose";

export const connectDB = () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI, { dbName: "deployment" })
      .then(() => {
        console.log("Database successfully Connected!");
      });
  } catch (error) {
    console.log("Database Connection Error!", error);
  }
}; 
