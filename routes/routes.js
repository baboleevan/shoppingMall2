// Global Router
const HOME = "/";
const CHAT = "/chat";
const CART = "/cart";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// users Router
const USERS = "/users";
const USER_DETAIL = ":/id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const ME = "/me";

// Admin Router
const ADMIN = "/admin";
const PRODUCTS = "/products";
const PRODUCTS_WRITE = "/products/write";
const PRODUCTS_DETAIL = "/products/detail/:id";
const PRODUCTS_EDIT = "/products/edit/:id";
const PRODUCTS_DELETE = "/products/delete/:id";

const routes = {
  //home Controller
  home: HOME,
  chat: CHAT,
  cart: CART,
  search: SEARCH,
  //user Controller
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  me: ME,
  //admin Controller
  admin: ADMIN,
  products: PRODUCTS,
  productsWrite: PRODUCTS_WRITE,
  productsDetail: PRODUCTS_DETAIL,
  productsEdit: PRODUCTS_EDIT,
  productsDelete: PRODUCTS_DELETE
};

export default routes;
