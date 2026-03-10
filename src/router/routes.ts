export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  DASHBOARD: "/dashboard",
  SERVICES: "/services",
  NEWS: "/news",
  SETTINGS: "/settings",
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/profile",
} as const;

export type RouteKeys = keyof typeof ROUTES;

export const getRoutePath = (route: RouteKeys): string => {
  return ROUTES[route];
};
