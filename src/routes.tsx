import { lazy } from "react";
import RouteWrapper from "./components/RouteWrapper";
import MainLoader from "./components/MainLoader";
import Registration from "./pages/Registration";
import { ROUTES } from "./constants/routes";
import Login from "./pages/Login";
import EventDetails from "./pages/EventDetails";
import Calendar from "./pages/Calendar";

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
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
    path: ROUTES.LOGIN,
    element: (
      <RouteWrapper fallback={<MainLoader />} errorFallback={errorFallback}>
        <Login />
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
    path: ROUTES.DASHBOARD,
    element: (
      <RouteWrapper fallback={<MainLoader />} errorFallback={errorFallback}>
        <Dashboard />
      </RouteWrapper>
    ),
  },
  {
    path: ROUTES.CALENDAR,
    element: (
      <RouteWrapper fallback={<MainLoader />} errorFallback={errorFallback}>
        <Calendar />
      </RouteWrapper>
    ),
  },
  {
    path: ROUTES.EVENT_DETAILS,
    element: (
      <RouteWrapper fallback={<MainLoader />} errorFallback={errorFallback}>
        <EventDetails />
      </RouteWrapper>
    ),
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <div>404 Not Found</div>,
  },
];
