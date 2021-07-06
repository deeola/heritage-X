import React, { useContext } from "react";
import { Link } from "react-router-dom";
import heritageContext from "../context/Heritage/heritageContext";

function FooterNav() {
  const HeritageContext = useContext(heritageContext);
  const { closeMenu } = HeritageContext;
  return (
    <nav>
      <div className="logo">H-X</div>
      <ul>
        <li onClick={closeMenu}>
          <Link className="myLink" to="/Bucketlist">
            Bucketlist
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link className="myLink" to="/Visited">
            Visited
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
