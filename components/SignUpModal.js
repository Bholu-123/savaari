import React,{ useState} from 'react';
import styles from '../styles/SignUpModal.module.css';
import SignUpForm from './SignUpForm';

const SignUpModal = ({setOpenModal}) => {
  const [userType, setUserType] = useState("Corporate");
    return (
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <div className={styles.titleCloseBtn}>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className={styles.content}>
            <div className={styles.userTypeContainer}>
              <span
                className={[
                  styles.userType,
                  userType === "Corporate" ? styles.active : {},
                ].join(" ")}
                onClick={() => setUserType("Corporate")}
              >
                Corporate
              </span>
              <span
                className={[
                  styles.userType,
                  userType === "User" ? styles.active : {},
                ].join(" ")}
                onClick={() => setUserType("User")}
              >
                User
              </span>
            </div>
            <div>
              <SignUpForm val={userType} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default SignUpModal
