import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Root } from "../ui/pages/Root";
import { publicRouter } from "./PublicRouter";

const appRouter: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [...publicRouter]
  },
]
export const router = createBrowserRouter(appRouter);