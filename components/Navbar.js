import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import SignUpModal from "./SignUpModal";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>
        <span>Yatri</span>
        cabs
      </h1>
      <ul className={styles.navItems}>
        <li className={styles.listItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.listItem}>Contact</li>
        <li className={styles.listItem}>Book Car</li>
        <li className={styles.listItem}>Our Vehicle</li>
      </ul>
      <img
        className={styles.login}
        src="./bx-user-circle.svg"
        onClick={() => {
          setModalOpen(true);
        }}
      />

      {modalOpen && <SignUpModal setOpenModal={setModalOpen} />}
    </div>
  );
};

export default Navbar;
