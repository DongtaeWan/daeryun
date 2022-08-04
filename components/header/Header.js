import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <Link href="/">
          <img src="/images/logo.png" alt="형사전문센터" />
        </Link>
      </div>
      <div className={styles.header_middle}>
        <ul>
          <li>
            <Link href="/">형사전문센터</Link>
            <ul>
              <li>
                <Link href="/">센터 소개</Link>
              </li>
              <li>
                <Link href="/">법률 정보</Link>
              </li>
              <li>
                <Link href="/">오시는 길</Link>
              </li>
              <li>
                <Link href="/">공식 홈페이지</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/">형사전문변호사</Link>
            <ul>
              <li>
                <Link href="/">구성원 소개</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/">성공사례</Link>
            <ul>
              <li>
                <Link href="/">성공사례</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/">업무분야</Link>
            <ul>
              <li>
                <Link href="/">재산범죄</Link>
              </li>
              <li>
                <Link href="/">강력범죄</Link>
              </li>
              <li>
                <Link href="/">교통범죄</Link>
              </li>
              <li>
                <Link href="/">보이스피싱</Link>
              </li>
              <li>
                <Link href="/">학교폭력</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/">언론보도</Link>
            <ul>
              <li>
                <Link href="/">언론보도</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/">고객후기</Link>
            <ul>
              <li>
                <Link href="/">고객후기</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/">전문법률상담</Link>
            <ul>
              <li>
                <Link href="/">전문법률상담예약</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.header_right}>
        <div>
          <div className={styles.header_call_left}>
            <span>상담예약</span>
          </div>
          <div className={styles.header_call_right}>
            <img src="/images/top_tel.png" alt="" />
            <span>1800-7905</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
