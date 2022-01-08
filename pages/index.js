import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import Banner from '../components/Banner';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import VehiclesModels from '../components/VehiclesModels';
import Footer from '../components/Footer';

export default function Home() {
  const [counter, setCounter] = useState(0);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  React.useEffect(() => {
    const event = window.addEventListener("scroll", toggleVisible);

    return () => event;
  },[]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Savaari Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        <Banner />
        <Services />
        <Testimonials />
        <VehiclesModels />
        <Footer/>
        <img
          src="/bx-up-arrow-alt.svg"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            height: "50px",
            width: "50px",
            bottom: "5vh",
            right: "1.8rem",
            boderRadius: 100,
            overflow: "hidden",
            backgroundColor: "#716d6e",
            cursor: "pointer",
            display: visible ? "inline" : "none",
          }}
        />
      </div>
    </div>
  );
}
