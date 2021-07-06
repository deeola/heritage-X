import React from "react";
import FooterNav from "./FooterNav";
import twitter from "../../assets/icons/icon-twitter.svg";
import facebook from "../../assets/icons/icon-facebook.svg";
import instagram from "../../assets/icons/icon-instagram.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <FooterNav />
        <div className="footerSecondDiv">
          <p className="footerSecondText">
            Heritage-X is your to-go platform for your Unesco Heritage sites
            where you can visit and add to your wishlist to bucket list. You can
            also check for Maps and read more about these sites before your
            journey. Enjoy!
          </p>
        </div>
        <div className="copyIcon">
          <p className="copyRight">Copyright 2021. </p>
          <div className="icons">
            <div className="iconDiv">
              <img src={facebook} alt="facebookicon"></img>
            </div>
            <div className="iconDiv">
              <img src={twitter} alt="twittericon"></img>
            </div>
            <div className="iconDiv">
              <img src={instagram} alt="instagramicon"></img>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
