import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import SignUpModal from './SignUpModal';

const Navbar = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
      <div className={styles.container}>
        <img className={styles.logo} src="./logo.png" />
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
