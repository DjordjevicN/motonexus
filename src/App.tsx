import { Routes, Route, useParams, useLocation } from "react-router-dom";
import { appRoutes } from "./routes";
import Footer from "./components/Footer";
import "./App.css";
import { Toaster } from "react-hot-toast";
import SidebarNavigation from "./components/navigation/SidebarNavigation";

const App = () => {
  const location = useLocation();
  const hideNavigation = ["/", "/login", "/register"].includes(
    location.pathname
  );
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

      <Footer />
    </div>
  );
};

export default App;
