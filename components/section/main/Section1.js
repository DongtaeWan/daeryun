import React from "react";
import styles from "./Section1.module.scss";

const Section1 = () => {
  const test = process.env.NEXT_PUBLIC_API_URL;
  return (
    <>
      <section className={styles.section1}>
        <div className={styles.section1_top}>
          <p>검찰&#183;경찰&#183;법원 전관출신 형사전문변호인단</p>
        </div>
        <div className={styles.section1_bottom}>
          <div className={styles.section1_content1}>
            <img src="/images/main_1.png" alt="" />
            <p>대검찰청&#183;고검</p>
            <p>{test}</p>
          </div>
          <div className="section1_content2">
            <img src="/images/main_2.png" alt="" />
            <p>경찰간부출신</p>
            <p>전문위원</p>
          </div>
          <div className="section1_content3">
            <img src="/images/main_3.png" alt="" />
            <p>지방&#183;고등법원</p>
            <p>재판연구원출신</p>
          </div>
          <div className="section1_content4">
            <img src="/images/main_4.png" alt="" />
            <p>대한변호사협회</p>
            <p>전문분야등록</p>
          </div>
        </div>

        <div className={styles.mause}>
          <div className="wheel"></div>
        </div>
      </section>
    </>
  );
};

export default Section1;
