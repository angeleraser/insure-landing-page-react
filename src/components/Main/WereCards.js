import React from "react";
import "../../css/WereCards.css";
import {
  snappyProcessSvg,
  peopleFirstSvg,
  affordablePricesSvg,
} from "../../svg-icons";

const cardsData = [
  {
    title: "Snappy Process",
    description:
      "Our application process can be completed in minutes, not hours. Dont get stuck filling in tedius forms.",
    icon: snappyProcessSvg,
  },
  {
    title: "Affordable Prices",
    description:
      "We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    icon: affordablePricesSvg,
  },
  {
    title: "People First",
    description:
      "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.",
    icon: peopleFirstSvg,
  },
];

const WereCards = () => {
  const CARDS = cardsData.map((data, i) => {
    const { title, description, icon } = data;
    return (
      <article key = {i}>
        <div className="icon">{icon}</div>
        <h2>{title}</h2>
        <p>{description}</p>
      </article>
    );
  });
  return <div className="were-cards">
    {CARDS}
  </div>;
};

export default WereCards;
