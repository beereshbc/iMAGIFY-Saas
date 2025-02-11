import express from "express";
import { generateImage } from "../controllers/imageController.js";
import { userAuth } from "../middlewar/auth.js";

const imageRouter = express.Router();

imageRouter.post("/img-gen", userAuth, generateImage);

export default imageRouter;
