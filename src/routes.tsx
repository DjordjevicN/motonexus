import { lazy } from "react";
import RouteWrapper from "./components/RouteWrapper";
import MainLoader from "./components/MainLoader";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const errorFallback = () => <div>Error: Add skeleton loader here</div>;
export const appRoutes = [
  {
    path: "/",
    element: (
      <RouteWrapper fallback={<MainLoader />} errorFallback={errorFallback}>
        <Home />
      </RouteWrapper>
    ),
  },
  {
    path: "/about",
    element: (
      <RouteWrapper fallback={<MainLoader />} errorFallback={errorFallback}>
        <About />
      </RouteWrapper>
    ),
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
];
