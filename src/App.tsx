import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appRoutes } from "./routes";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const isAuthenticated = false;

  return (
    <div className="app">
      {isAuthenticated && <TopBar />}
      <Routes>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>

      {isAuthenticated && <Footer />}
    </div>
  );
};

export default App;
