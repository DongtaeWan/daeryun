import Link from "next/link";
import React from "react";
import styles from "./Section2.module.scss";

const Section2 = () => {
  return (
    <>
      <section className={styles.section2}>
        <div className={styles.section2_wrapper}>
          <p>
            대륜의 <strong>전국 지사</strong>
          </p>
          <div className={styles.section2_grid_container}>
            <Link href="">서울(본사)</Link>
            <Link href="">서울(중앙)</Link>
            <Link href="">서울(북부)</Link>
            <Link href="">부산(본사)</Link>
            <Link href="">부산</Link>
            <Link href="">대구</Link>
            <Link href="">인천</Link>
            <Link href="">광주</Link>
            <Link href="">대전</Link>
            <Link href="">울산</Link>
            <Link href="">수원</Link>
            <Link href="">고양</Link>
            <Link href="">창원</Link>
            <Link href="">청주</Link>
            <Link href="">천안</Link>
            <Link href="">전주</Link>
            <Link href="">안산</Link>
            <Link href="">의정부</Link>
            <Link href="">춘천</Link>
            <Link href="">진주</Link>
            <Link href="">순천</Link>
            <Link href="">목포</Link>
            <Link href="">제주</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
