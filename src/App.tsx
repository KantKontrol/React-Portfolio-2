import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import InformationTechnology from "./pages/InformationTechnology";
import Software from "./pages/Software";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={About} />
        <Route path="/about" Component={About} />
        <Route path="/it" Component={InformationTechnology} />
        <Route path="/software" Component={Software} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
