import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Display from "./components/Display";
import HeaderComp from "./components/HeaderComp";

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <Display />
      <Footer />
    </div>
  );
}

export default App;
