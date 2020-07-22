/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../css/MainFooter.css";
import { appLogo, socialNetworks } from "../../svg-icons";
import { listsData } from "../../footer-lists-data";
import FooterNavList from "./FooterNavList";
const Footer = () => {
  const footerLists = listsData.map(({ items }, i) => {
    return <FooterNavList data={items} key={i} />;
  });
  return (
    <footer className="main-footer">
      <section className="social-links">
        {appLogo}
        {/* Social links  */}
        <ul>
          {socialNetworks.map((icon, key) => (
            <li key={key}>
              <a href="#">{icon}</a>
            </li>
          ))}
        </ul>
      </section>
      <nav>{footerLists}</nav>
    </footer>
  );
};

export default Footer;
