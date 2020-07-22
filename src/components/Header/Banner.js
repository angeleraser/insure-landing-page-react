/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "../../css/Banner.css";
import {
  bannerBgPatterLeftMobile,
  bannerBgPatternRightDesktop,
  bannerBgPatternLeftDesktop,
  bannerBgPatternRightMobile,
} from "../../svg-icons";
const Banner = () => {
  return (
    <section className="banner">
      <div className="content">
        <h1>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <a href="#view-plans">View Plans</a>
        {/* For mobile  */}
        <div className="bg-pattern-ml">{bannerBgPatterLeftMobile}</div>
        <div className="bg-pattern-mr">{bannerBgPatternRightMobile}</div>
        {/* For Desktop  */}
        <div className="bg-patter-dl">{bannerBgPatternLeftDesktop}</div>
      </div>
      <div className="bg-pattern-dr">{bannerBgPatternRightDesktop}</div>
      <div className="image"></div>
    </section>
  );
};

export default Banner;
