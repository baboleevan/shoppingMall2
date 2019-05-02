import Product from "../models/Products";

export const products = (req, res) => {
  res.render("products", { pageTitle: "제품리스트" });
};

export const getProductsWrite = (req, res) => {
  res.render("productsWrite", { pageTitle: "제품 작성" });
};

export const postProductsWrite = (req, res) => {
  // const {
  //   body: { name, price, description },
  //   file
  // } = req;
  console.log(req);
  // console.log(name, price, description, file);
  // const newProduct = await Product.create({
  //   fileUrl: path,
  //   name,
  //   price,
  //   description
  // });
  // newProduct.save();
};

export const productsDetail = (req, res) => {
  res.render("productsDetail", { pageTitle: "제품 상세보기" });
};
export const productsEdit = (req, res) => {
  res.render("productsEdit", { pageTitle: "제품 수정" });
};
export const productsDelete = (req, res) => {
  res.render("productsDelete", { pageTitle: "제품 삭제" });
};
