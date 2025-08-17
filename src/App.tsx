import { Routes, Route, useParams, useLocation } from "react-router-dom";
import { appRoutes } from "./routes";
import Footer from "./components/Footer";
import "./App.css";
import SidebarNavigation from "./components/navigation/SidebarNavigation";

const App = () => {
  const location = useLocation();
  const hideNavigation = ["/", "/login", "/register"].includes(
    location.pathname
  );
  return (
    <div className="w-full">
      <div className="flex gap-4 w-full">
        {!hideNavigation && <SidebarNavigation />}
        <div className="w-full">
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
