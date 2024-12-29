import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ServicesPage from "./pages/servicesPage";
import AdminLoginPage from "./pages/admin/adminLogin";
import PrivateRoute from "./components/privateComponent";
import AdminDashBoard from "./pages/admin/adminDashboard";
import AboutUs from "./pages/AboutusPage";
import Page404 from "./pages/404Page";
import ProjectPages from "./pages/ProjectPages";



function App() {

  


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminDashBoard />
            </PrivateRoute>
          }
        />
        <Route path="/projects" element={<ProjectPages />} />
        {/* Route for 404 */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
