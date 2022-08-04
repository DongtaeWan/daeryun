import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <a href="" className={styles.logo}>
          logo
        </a>
      </div>
      <div className={styles.header_middle}>
        <ul>
          <li>
            <a href="">형사전문센터</a>
          </li>
          <li>
            <a href="">형사전문변호사</a>
          </li>
          <li>
            <a href="">성공사례</a>
          </li>
          <li>
            <a href="">업무분야</a>
          </li>
          <li>
            <a href="">언론보도</a>
          </li>
          <li>
            <a href="">고객후기</a>
          </li>
          <li>
            <a href="">전문법률상담</a>
          </li>
        </ul>
      </div>
      <div className={styles.header_ight}>
        <img src="../public/images/ccenter1.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
