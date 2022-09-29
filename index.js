import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./router.js";
import cors from "cors";
const app = express();
dotenv.config();
app.set("port", 8080);

app.listen(app.get("port"), () => {
  console.log(`[OK] Server is running on localhost:${app.get("port")}`);
});

mongoose
  .connect('mongodb+srv://user6896:RSCLYdCynontmt8l@kinocluster.tzegl.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log("[OK] DB is connected"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use("/api", router);
