import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import SignUpModal from './SignUpModal';

const Navbar = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <span>Yatri</span>
          cabs
        </h1>
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
