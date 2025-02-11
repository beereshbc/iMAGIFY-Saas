import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRouters.js";
import imageRouter from "./routes/imageRouter.js";

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cors());
await connectDB();

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.get("/", (req, res) => {
  res.send("iMAGIFY");
});

app.listen(4000, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
