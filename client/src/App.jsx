import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Lazy-loaded components
const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const Chat = lazy(() => import("./Pages/Chat"));
const Groups = lazy(() => import("./Pages/Groups"));
const SignUpPage = lazy(() => import("./Pages/Signup"));
const NotFoundPage = lazy(() => import("./Pages/NotFound"));

let isUserLoggedIn = true; 

const App = () => {
  return (
    <BrowserRouter
    >
      {/* Wrap routes with Suspense to handle lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProtectedRoute isUserLoggedIn = {isUserLoggedIn} > <Home/> </ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />

          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
