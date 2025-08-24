import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { appRoutes } from "./routes";
import "./App.css";
import { Toaster } from "react-hot-toast";
import SidebarNavigation from "./components/navigation/SidebarNavigation";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hideNavigation = ["/", "/login", "/register"].includes(
    location.pathname
  );
  const { auth } = useSelector((state: RootState) => state.auth);
  const isAuth = !!auth;
  useEffect(() => {
    navigate(isAuth ? "/dashboard" : "/login");
  }, [isAuth]);
  return (
    <div className="w-full bg-black">
      <div className="flex gap-4 w-full">
        {!hideNavigation && <SidebarNavigation />}
        <div className="w-full">
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 6000,
              style: {
                borderRadius: "12px",
                background: "#fff",
                color: "#333",
              },
              success: {
                style: { background: "#ecfdf5", color: "#065f46" },
              },
              error: {
                style: { background: "#fef2f2", color: "#991b1b" },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
