import { lazy } from "react";
import RouteWrapper from "./components/RouteWrapper";
import MainLoader from "./components/MainLoader";
import Registration from "./pages/Registration";
import { ROUTES } from "./constants/routes";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const errorFallback = () => <div>Error: Add skeleton loader here</div>;
export const appRoutes = [
  {
    path: ROUTES.HOME,
    element: (
      <RouteWrapper fallback={<MainLoader />} errorFallback={errorFallback}>
        <Home />
      </RouteWrapper>
    ),
  },
  {
    path: ROUTES.REGISTER,
    element: (
      <RouteWrapper fallback={<MainLoader />} errorFallback={errorFallback}>
        <Registration />
      </RouteWrapper>
    ),
  },
  {
    path: ROUTES.ABOUT,
    element: (
      <RouteWrapper fallback={<MainLoader />} errorFallback={errorFallback}>
        <About />
      </RouteWrapper>
    ),
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <div>404 Not Found</div>,
  },
];
