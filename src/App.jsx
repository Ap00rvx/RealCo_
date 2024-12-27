import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ServicesPage from "./pages/servicesPage";
import AdminLoginPage from "./pages/admin/adminLogin";
import PrivateRoute from "./components/privateComponent";
import AdminDashBoard from "./pages/admin/adminDashboard";
import AboutUs from "./pages/AboutusPage";
function App() {

  // console.log(import.meta.env.VITE_BASE_URL)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element ={<AboutUs/>}/>

        <Route path="/admin/login" element= {<AdminLoginPage/>}></Route>
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminDashBoard/>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
