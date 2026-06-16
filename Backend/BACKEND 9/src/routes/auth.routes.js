import { Router } from "express";
import { register } from "../controllers/auth.controller.js";
import { body } from "express-validator";
import { registerValidation } from "../validation/auth.validator.js";

const authRouter = Router();

authRouter.post(
  "/register",
  registerValidation,
  register
);

export default authRouter;