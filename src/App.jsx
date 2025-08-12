import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appRoutes } from "./routes";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const isAuthenticated = false;
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {isAuthenticated && <TopBar />}
      <Router>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Router>
      <Footer />
    </QueryClientProvider>
  );
};

export default App;
