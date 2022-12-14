import React from "react";
import styles from "./Section3.module.scss";
import classNames from "classnames";

const Section3 = () => {
  return (
    <section className={styles.section3}>
      <div className={styles.section3_wrapper}>
        <div className={styles.section3_top}>
          <h3>
            <strong>81</strong>인의 형사소송전문팀
          </h3>
          <p>3인이상으로 구성된 전담팀이 맞춤형 법률서비스를 제공합니다.</p>
        </div>
        <div className={styles.section3_card_container}>
          <div
            className={classNames({
              [styles.section3_card]: true,
              [styles.card1]: true,
            })}
          >
            <div>
              <div className={styles.section3_card_top}>
                <div>
                  <h4>서울중앙지검</h4>
                  <p>부장검사출신</p>
                </div>
                <div>
                  <img src="/images/prosecution_w.png" alt="" />
                </div>
              </div>
              <div className={styles.section3_card_bottom}>
                <p>
                  <strong>김인원</strong>변호사
                </p>
              </div>
            </div>
          </div>

          <div
            className={classNames({
              [styles.section3_card]: true,
              [styles.card2]: true,
            })}
          >
            <div>
              <div className={styles.section3_card_top}>
                <div>
                  <h4>대검찰청</h4>
                  <p>고검차장검사출신</p>
                </div>
                <div>
                  <img src="/images/prosecution_w.png" alt="" />
                </div>
              </div>
              <div className={styles.section3_card_bottom}>
                <p>
                  <strong>이만희</strong>변호사
                </p>
              </div>
            </div>
          </div>

          <div
            className={classNames({
              [styles.section3_card]: true,
              [styles.card3]: true,
            })}
          >
            <div>
              <div className={styles.section3_card_top}>
                <div>
                  <h4>서울동부지검</h4>
                  <p>부장검사출신</p>
                </div>
                <div>
                  <img src="/images/prosecution_w.png" alt="" />
                </div>
              </div>
              <div className={styles.section3_card_bottom}>
                <p>
                  <strong>김근수</strong>변호사
                </p>
              </div>
            </div>
          </div>

          <div
            className={classNames({
              [styles.section3_card]: true,
              [styles.card4]: true,
            })}
          >
            <div>
              <div className={styles.section3_card_top}>
                <div>
                  <h4>서울동부지검</h4>
                  <p>부장검사출신</p>
                </div>
                <div>
                  <img src="/images/prosecution_w.png" alt="" />
                </div>
              </div>
              <div className={styles.section3_card_bottom}>
                <p>
                  <strong>최창무</strong>변호사
                </p>
              </div>
            </div>
          </div>

          <div
            className={classNames({
              [styles.section3_card]: true,
              [styles.card5]: true,
            })}
          >
            <div>
              <div className={styles.section3_card_top}>
                <div>
                  <h4>의정부지방검찰청</h4>
                  <p>부장검사출신</p>
                </div>
                <div>
                  <img src="/images/prosecution_w.png" alt="" />
                </div>
              </div>
              <div className={styles.section3_card_bottom}>
                <p>
                  <strong>정재봉</strong>변호사
                </p>
              </div>
            </div>
          </div>

          <div
            className={classNames({
              [styles.section3_card]: true,
              [styles.card6]: true,
            })}
          >
            <div>
              <div className={styles.section3_card_top}>
                <div>
                  <h4>부산고등검찰청</h4>
                  <p>부장검사출신</p>
                </div>
                <div>
                  <img src="/images/prosecution_w.png" alt="" />
                </div>
              </div>
              <div className={styles.section3_card_bottom}>
                <p>
                  <strong>이일권</strong>변호사
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section3_bottom}></div>
      </div>
    </section>
  );
};

export default Section3;
