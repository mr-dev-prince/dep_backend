import { connectDB } from "./Database/dbConnection.js";
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());


import userRouter from "./Router/user.router.js";

try {
    connectDB();
    app.listen(process.env.PORT, () => {
        console.log(`App is running at ${process.env.PORT}`);
    });
} catch (error) {
    console.log("Error in running the app! Please check the code.");
}

//Routers

app.use("/api/v1/user", userRouter);
