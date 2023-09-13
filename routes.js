import express from "express";
import { storingFeedback } from "./controllers/feedback.controller.js";
export const rootRouter = express.Router();

rootRouter.route("/").post(storingFeedback);
