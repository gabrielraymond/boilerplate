const LANDING_PAGE = "/";
const LOGIN = "/login";

//private Route
const DASHBOARD = "/dashboard";
const LOL = "/dashboard/lol";

const PUBLIC = "/public";

const PRIVATE_ROUTES = [DASHBOARD, LOL];
const AUTH_ROUTES = [LOGIN];
const PUBLIC_ROUTES = [LANDING_PAGE, PUBLIC];

export {
  PRIVATE_ROUTES,
  AUTH_ROUTES,
  PUBLIC_ROUTES,
  LANDING_PAGE,
  LOGIN,
  DASHBOARD,
};
