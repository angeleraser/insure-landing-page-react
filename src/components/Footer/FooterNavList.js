/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../css/FooterList.css";
const FooterNavList = ({data}) => {
  const links = data.map((text, i) => (
    <li key={i}>
      <a href="#">{text}</a>
    </li>
  ));
  return <ul className="footer-list">
    {links}
  </ul>;
};

export default FooterNavList;
