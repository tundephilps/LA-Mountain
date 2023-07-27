import React from "react";
import "./App.css";
import FirstPage from "./components/FirstPage";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SecondPage from "./components/SecondPage";
import LastPage from "./components/LastPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FirstPage />
      <SecondPage />
      <LastPage />
      <Footer />
    </>
  );
}

export default App;