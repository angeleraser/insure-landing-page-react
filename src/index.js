import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContent from "./components/Main/MainContent";
import "../src/css/index.css";
const ROOT = document.getElementById("root");
const ContentWrapper = () => {
  return (
    <div className="content-wrapper">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

ReactDOM.render(<ContentWrapper />, ROOT);
