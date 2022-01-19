import React, { useState }from 'react';
import styles from '../styles/MyProfile.module.css';

const MyProfile = () => {
    const [data, setData] = useState({
      Name: "Amit",
      Email: "amit@gmail.com",
      Address: "Kolkata"
    });

    const [edit,setEdit] = useState(true);

    const { Name, Email, Address} = data;

    const changeHandler = (event) => {
      event.preventDefault();
      setData({ ...data, [event.target.name]: event.target.value });
    };

    return (
      <div>
        <div className={styles.sidenav}>
          <div className={styles.profile}>
            <img
              src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png"
              alt=""
              width="100"
              height="100"
            />

            <div className={styles.name}>ImDezCode</div>
            {/* <div className={styles.job}>Web Developer</div> */}
          </div>

          <div className={styles.sidenavUrl}>
            <div className={styles.url}>
              <a href="#profile" className={styles.active}>
                Profile
              </a>
              <hr align="center" />
            </div>
            <div className={styles.url}>
              <a href="#settings">My Booking</a>
              <hr align="center" />
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <h2>IDENTITY</h2>
          <div className={styles.url}>
            <div className={styles.card}>
              <img
                className={styles.edit}
                src="./bx-edit-alt.svg"
                onClick={() => setEdit((prev) => !prev)}
              />
              <ul>
                <li>
                  <span>Name:</span>
                  <input
                    disabled={edit}
                    className={styles.input}
                    type="text"
                    name="Name"
                    value={Name}
                    onChange={changeHandler}
                  ></input>
                </li>
                <li>
                  <span>Email:</span>
                  <input
                    disabled={edit}
                    className={styles.input}
                    type="text"
                    name="Email"
                    value={Email}
                    onChange={changeHandler}
                  ></input>
                </li>
                <li>
                  <span>Address:</span>
                  <input
                    disabled={edit}
                    className={styles.input}
                    type="text"
                    name="Address"
                    value={Address}
                    onChange={changeHandler}
                  ></input>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MyProfile
