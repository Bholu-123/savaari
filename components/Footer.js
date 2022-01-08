import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.Container}>
      <div className={styles.Left}>
        <h3 className={styles.Title}>Company</h3>
        <ul className={styles.List}>
          <li className={styles.ListItem}>About Us</li>
          <li className={styles.ListItem}>Media</li>
          <li className={styles.ListItem}>Careers</li>
          <li className={styles.ListItem}>Privacy Policy</li>
          <li className={styles.ListItem}>Terms & Conditions</li>
        </ul>
      </div>

      <div className={styles.Center}>
        <h3 className={styles.Title}>Services</h3>
        <ul className={styles.List}>
          <li className={styles.ListItem}>Local Car Rentals</li>
          <li className={styles.ListItem}>Outstation Taxi</li>
          <li className={styles.ListItem}>One way cabs</li>
          <li className={styles.ListItem}>Corporate Car Rental</li>
          <li className={styles.ListItem}>Airport Taxi</li>
        </ul>
      </div>

      <div className={styles.Right}>
        <h3 className={styles.Title}>Get in touch</h3>
        <ul>
          <li className={styles.ListItem}>Contact Us</li>
          <li className={styles.ListItem}>Site Map</li>
          <li className={styles.ListItem}>XML Sitemap</li>
        </ul>
        <div className={styles.SocialContainer}>
          <div className={styles.SocialIcon}>
            <Facebook />
          </div>
          <div className={styles.SocialIcon}>
            <Instagram />
          </div>
          <div className={styles.SocialIcon}>
            <Twitter />
          </div>
          <div className={styles.SocialIcon}>
            <Pinterest />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
