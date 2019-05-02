import express from "express";
import routes from "./routes";
import {
  admin,
  products,
  productsWrite,
  productsDetail,
  productsEdit,
  productsDelete
} from "../controllers/adminController";
const adminRouter = express.Router();

adminRouter.get(routes.admin, admin);
adminRouter.get(routes.products, products);
adminRouter.get(routes.productsWrite, productsWrite);
adminRouter.post(routes.productsWrite);
adminRouter.get(routes.productsDetail, productsDetail);
adminRouter.get(routes.productsEdit, productsEdit);
adminRouter.post(routes.productsEdit);
adminRouter.get(routes.productsDelete, productsDelete);

export default adminRouter;
