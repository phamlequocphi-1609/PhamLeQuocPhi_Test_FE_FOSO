import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout";
import { AboutPage } from "@/features/about";
import { ContactPage } from "@/features/contact";
import { ROUTES } from "./routes";
import { ServicesPage } from "@/features/services";
import { NewsPage } from "@/features/news";
export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ServicesPage />,
      },
      {
        path: ROUTES.ABOUT,
        element: <AboutPage />,
      },
      {
        path: ROUTES.SERVICES,
        element: <ServicesPage />,
      },
      {
        path: ROUTES.NEWS,
        element: <NewsPage />,
      },
      {
        path: ROUTES.CONTACT,
        element: <ContactPage />,
      },
    ],
  },
]);
