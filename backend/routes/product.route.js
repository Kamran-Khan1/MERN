import express from "express";
import {
  createRoute,
  deleteRoutes,
  editRoutes,
  getProducts,
} from "../controller/product.controll.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createRoute);

router.put("/:id", editRoutes);

router.delete("/:id", deleteRoutes);

export default router;
