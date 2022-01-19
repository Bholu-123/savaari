import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { useRouter } from "next/router";
import SignUpModal from './SignUpModal';

const Navbar = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);

    const pushMyProfile = () =>{
        router.push(
          `/my-profile`
        );
    }


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
        <div>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href="#">
                <img
                  className={styles.login}
                  src="./bx-user-circle.svg"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                />
              </Link>
              <ul className={styles.dropdown}>
                <li className={styles.li} onClick={pushMyProfile}>
                  <Link href="/my-profile">My Profile</Link>
                </li>
                <li className={styles.li}>
                  <Link href="#">My Booking</Link>
                </li>
                <li className={styles.li}>
                  <Link href="#">Logout</Link>
                </li>
              </ul>
            </li>
          </ul>
          {/* <img
            className={styles.login}
            src="./bx-user-circle.svg"
            onClick={() => {
              setModalOpen(true);
            }}
          />
          <div className={styles.dropdown}>
            <div>
              <a href="#">Laptops</a>
            </div>
            <div>
              <a href="#">Monitors</a>
            </div>
            <div>
              <a href="#">Printers</a>
            </div>
          </div> */}
        </div>

        {modalOpen && <SignUpModal setOpenModal={setModalOpen} />}
      </div>
    );
}

export default Navbar
