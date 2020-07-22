import React from "react";
import "../../css/MainContent.css";
import WereCards from "./WereCards";
import HWWBanner from "./HWWBanner";
const MainContent = () => {
  return (
    <main className="main-content">
      <h1>We're Different</h1>
      <WereCards />
      <HWWBanner />
    </main>
  );
};

export default MainContent;
