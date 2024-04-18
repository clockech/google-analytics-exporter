import express from "express";
import { test } from "../controllers/check.controller";

const router = express.Router();

router.post("/test", test);

export default router;