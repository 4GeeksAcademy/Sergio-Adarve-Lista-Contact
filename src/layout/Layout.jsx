
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "../views/Contacts";
import AddContact from "../views/AddContact";

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contacts />} /> {/* Página principal */}
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="*" element={<div className="text-center mt-5">404 - Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
