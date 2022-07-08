import express from "express";
import { getResult } from "../controllers/member.controller.js";

export const memberRouter = express.Router();

memberRouter.post("/", (req, res) => getResult(req, res));