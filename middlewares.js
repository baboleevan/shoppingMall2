import multer from "multer";
import routes from "./routes/routes";

const multerProduct = multer({ dest: "uploads/productsImage/" });

export const localsMiddleWare = (req, res, next) => {
  res.locals.siteName = "상헌샵";
  res.locals.routes = routes;
  next();
};

export const uploadProduct = multerProduct.single("productImage");
