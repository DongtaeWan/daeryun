import Head from "next/head";
import Section1 from "../components/section/main/Section1";
import Section2 from "../components/section/main/Section2";
import Section3 from "../components/section/main/Section3";

export default function Home() {
  return (
    <>
      <Head>
        <title>형사전문변호사 - 법무법인 대륜</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}
