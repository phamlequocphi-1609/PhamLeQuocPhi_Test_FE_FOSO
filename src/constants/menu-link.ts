import { ROUTES } from "@/router/routes";

export const MENU_ITEMS = [
  {
    key: "HOME",
    label: "Trang chủ",
    path: ROUTES.HOME,
  },
  {
    key: "ABOUT",
    label: "Giới thiệu",
    path: ROUTES.ABOUT,
  },
  {
    key: "SERVICES",
    label: "Dịch vụ",
    path: ROUTES.SERVICES,
  },
  {
    key: "NEWS",
    label: "Tin tức",
    path: ROUTES.NEWS,
  },
  {
    key: "CONTACT",
    label: "Liên hệ",
    path: ROUTES.CONTACT,
  },
] as const;
