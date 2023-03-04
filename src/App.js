import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="font-bold">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

