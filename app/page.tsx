import Image from "next/image";
import styles from "./page.module.css";
import Layout from "../components/layout/Layout";
import Banner from "../components/sections/Banner";
import Crypto from "../components/sections/Crypto";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Work from "../components/sections/Work";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Crypto />
        <Services />
        <About />
        <Work />
      </Layout>
    </>
  );
}
