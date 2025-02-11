import express from "express";
import {
  loginUser,
  paymentRezorpay,
  registerUser,
  userCredits,
  verifyRazorpay,
} from "../controllers/userController.js";
import { userAuth } from "../middlewar/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/pay-razor", userAuth, paymentRezorpay);
userRouter.post("/verify-razor", verifyRazorpay);
userRouter.get("/credits", userAuth, userCredits);

export default userRouter;
