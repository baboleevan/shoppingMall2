export const admin = (req, res) => {
  res.render("admin", { pageTitle: "관리자" });
};
export const products = (req, res) => {
  res.render("products", { pageTitle: "제품리스트" });
};
export const productsWrite = (req, res) => {
  res.render("productsWrite", { pageTitle: "제품 작성" });
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
