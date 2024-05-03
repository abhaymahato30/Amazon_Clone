import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_container">
            <ul>
                <li>
                <Link to='/'><img  className="header_logo"src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="#" /></Link>
                </li>
            </ul>
          <ul className="footer_list">
            <li className="footer_big_li"> Get to Know Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
          </ul>
          <ul className="footer_list">
            <li className="footer_big_li"> Make Money with Us</li>
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell apps on Amazon</li>
            <li>Investor Relations</li>
          </ul>
          <ul className="footer_list">
            <li className="footer_big_li">Amazon Payment Products</li>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Investor Relations</li>
            <li>Amazon Currency Converte</li>
          </ul>
          <ul className="footer_list">
            <li className="footer_big_li">Let Us Help You</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Returns & Replacements</li>
            <li>Investor Relations</li>
            <li>Amazon Assistant</li>
          </ul>
        </div>
        <div className="footer-bootom">
          <ul  className="footer_bootom_list"> 
            <li>Conditions of Use</li>
            <li>Privacy Notice</li>
            <li>Consumer Health Data Privacy Disclosure</li>
            <li>Your Ads Privacy Choices</li>
          </ul>
          <ul>
            <li>© 1996-2024, Amazon.com, Inc. or its affiliates</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
