import { RouterProvider } from "react-router-dom";
import { router } from "./route-components";

export function AppRouter() {
  return <RouterProvider router={router} />;
}
