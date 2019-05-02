import routes from "./routes/routes";

export const localsMiddleWare = (req, res, next) => {
  res.locals.siteName = "상헌샵";
  res.locals.routes = routes;
  next();
};
