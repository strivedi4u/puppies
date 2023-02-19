import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/////////////////////Admin///////////////////////
import Dashboard from "./pages/admin/Dashboard";
import AddPuppie from "./pages/admin/AddPuppie";
import AdminAvailable from "./pages/admin/AdminAvailable";
import AdminUnavailable from "./pages/admin/AdminUnavailable";
import Payment from "./pages/admin/Payment";
import Login from "./pages/admin/Login";
/////////////////////Welcome///////////////////////
import Home from "./pages/welcome/Home";
import AvailablePuppie from "./pages/welcome/AvailablePuppie";
import PageNotFound from "./pages/welcome/404";
import PaypalSuccess from "./pages/welcome/PaypalSuccess";
import PaypalCancel from "./pages/welcome/PaypalCancel";
import PaymentSearch from "./pages/welcome/PaymentSearch";
import About from "./pages/welcome/About";
import Checkout from "./pages/welcome/Checkout";
import Search from "./pages/welcome/Search";
import FrenchPuppie from "./pages/welcome/FrenchPuppie";
import EnglishPuppie from "./pages/welcome/EnglishPuppie";
import ContactUs from "./pages/welcome/ContactUs";

/////////////////////Components///////////////////////



// import Login from "./pages/welcome/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route exact path="/available" element={<AvailablePuppie />} />
        <Route path="about/:name" element={<About/>} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/success" element={<PaypalSuccess />} />
        <Route exact path="/cancel" element={<PaypalCancel />} />
        <Route exact path="payment/:transcationId" element={<PaymentSearch />} />
        <Route exact path="/frenchPuppies" element={<FrenchPuppie />} />
        <Route exact path="/englishPuppies" element={<EnglishPuppie />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="*" element={<PageNotFound />} />

        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/addPuppies" element={<AddPuppie />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/availablePuppies" element={<AdminAvailable />} />
        <Route exact path="/unavailablePuppies" element={<AdminUnavailable />} />
        <Route exact path="/payments" element={<Payment />} />
        <Route exact path="/search" element={<Search />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
