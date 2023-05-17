import React from "react";
import hcLogo from "../images/hc-logo.png";
import styles from "../styles/header.module.css";

function Header() {
  return (
    <div id="header" className={styles.headerContainer}>
      <img src={hcLogo} alt="" className={styles.heroImage} />
      <h1>Health Canada Work Term Report for W23</h1>
    </div>
  );
}

export default Header;
