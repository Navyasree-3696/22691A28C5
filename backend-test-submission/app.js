import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import urlRoutes from "./routes/urlRoutes.js";
import logger from "./middlewares/logger.js";

dotenv.config();

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(logger);

app.use("/", urlRoutes);

export default app;
