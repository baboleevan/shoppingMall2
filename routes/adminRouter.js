import express from "express";
import routes from "./routes";
const adminRouter = express.Router();

import {
  products,
  getProductsWrite,
  productsDetail,
  productsEdit,
  productsDelete,
  postProductsWrite
} from "../controllers/adminController";
import { uploadProduct } from "../middlewares";

adminRouter.get(routes.products, products);
adminRouter.get(routes.productsWrite, getProductsWrite);
adminRouter.post(routes.productsWrite, postProductsWrite, uploadProduct);
adminRouter.get(routes.productsDetail, productsDetail);
adminRouter.get(routes.productsEdit, productsEdit);
adminRouter.post(routes.productsEdit);
adminRouter.get(routes.productsDelete, productsDelete);

export default adminRouter;
