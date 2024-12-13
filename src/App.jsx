import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarDetailsPage from "./pages/CarDetailsPage";
import CreateCarPage from "./pages/CreateCarPage";
import RentalsPage from "./pages/RentalsPage";
import LoginPage from "./pages/LoginPage";
import CheckoutPage from "./pages/CheckoutPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/checkout/:id" element={<CheckoutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cars/:id" element={<CarDetailsPage />} />
        <Route path="/create-car" element={<CreateCarPage />} />
        <Route path="/rentals" element={<RentalsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
