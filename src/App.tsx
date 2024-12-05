import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

// Pages
const HomePage = lazy(() => import("./pages/HomePage"));
const OrganizerPage = lazy(() => import("./pages/OrganizerPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));

function App() {
  return (
    <div className="flex-col w-full text-center">
      <Suspense fallback={<div className="text-primary">Loading...</div>}>
        <Router
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <Routes>
            <Route path="/bailamos-nextui-frontend/" element={<HomePage />} />
            <Route
              path="/bailamos-nextui-frontend/profile"
              element={<OrganizerPage />}
            />
            <Route
              path="/bailamos-nextui-frontend/login"
              element={<LoginPage />}
            />
            <Route
              path="/bailamos-nextui-frontend/signup"
              element={<SignUpPage />}
            />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
