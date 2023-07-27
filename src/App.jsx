import React from "react";
import "./App.css";
import FirstPage from "./components/FirstPage";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SecondPage from "./components/SecondPage";
import LastPage from "./components/LastPage";
import Footer from "./components/Footer";
import Accordion from "./components/Accordion/Accordion";
import Footer2 from "./components/Footer2";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FirstPage />
      <SecondPage />
      <Accordion />
      <LastPage />
      <Footer2 />
    </>
  );
}

export default App;
