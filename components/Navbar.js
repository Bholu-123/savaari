import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import SignUpModal from './SignUpModal';

const Navbar = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
      <div className={styles.container}>
        <ul className={styles.navItems}>
          <li className={styles.listItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/">About</Link>
          </li>
        </ul>
        <h1 className={styles.logo}>
          <span>Yatri</span>
          <span>cabs</span>
        </h1>
        <ul className={styles.mobile}>
          <li className={styles.listItem}>+91 9100008976</li>
          <li className={styles.listItem}>+91 45321768</li>
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
}

export default Navbar
