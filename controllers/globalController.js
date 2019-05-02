export const home = (req, res) => {
  res.render("home", { pageTitle: "home" });
};
export const chat = (req, res) => {
  res.render("chat", { pageTitle: "대화방" });
};
export const cart = (req, res) => {
  res.render("cart", { pageTitle: "장바구니" });
};
export const search = (req, res) => {
  res.render("search", { pageTitle: "검색" });
};

export const join = (req, res) => {
  res.render("join", { pageTitle: "회원가입" });
};
