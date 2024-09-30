import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import ProductRoutes from "./routes/product.route.js";
import path from "path";
const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.use(express.json()); //It allow's us to post json data

const __dirname = path.resolve();

app.use("/api/products", ProductRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(port, () => {
  connectDB();
  console.log(`Server is listening at port ${port}`);
});
