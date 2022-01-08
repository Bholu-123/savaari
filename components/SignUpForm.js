import React from 'react';
import styles from '../styles/SignUpForm.module.css';

const SignUpForm = ({val}) => {
    if (val == "Corporate") {
      return (
        <div>
          <form>
            <ul className={styles.bookingWidgetForm}>
              <li>
                <label className={styles.label} htmlFor="start">
                  From
                </label>
                <input id="date" type="text" />
              </li>
              <li>
                <label className={styles.label} htmlFor="destination">
                  To
                </label>
                <input id="date" type="text" />
              </li>
              <li>
                <input
                  type="submit"
                  className={styles.formSubmit}
                  value="select cars"
                />
              </li>
            </ul>
          </form>
        </div>
      );
    }
    else {
      return (
        <div>
          <form>
            <ul className={styles.bookingWidgetForm}>
              <li>
                <label className={styles.label} htmlFor="start">
                  From
                </label>
                <input id="date" type="text" />
              </li>
              <li>
                <label className={styles.label} htmlFor="destination">
                  To
                </label>
                <input id="date" type="text" />
              </li>
              <li>
                <input
                  type="submit"
                  className={styles.formSubmit}
                  value="select cars"
                />
              </li>
            </ul>
          </form>
        </div>
      );
    }
}

export default SignUpForm

