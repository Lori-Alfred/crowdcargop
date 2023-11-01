import DashBoardPage from "./src/pages/DashBoardPage/DashBoardPage";
import LoginPage from "./src/pages/LoginPage/LoginPage";
import OtpPage from "./src/pages/OtpPage/OtpPage";
import NotFound from "./src/pages/NotFound";
import { Routes, Route } from "react-router-dom";
import React from "react";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
