import styles from '../styles/Footer.module.css';
import Logo from '../components/Logo';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { FaTiktok, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footerDetail}>
          <Logo />
          <p>
            Echoverse is an all in one stop to fulfill your audio needs. We are
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we are open 7 days a week.
          </p>
          <p>&copy; Copyright 2024. All rights reserved.</p>
        </div>

        <div className={styles.footerInteractionPanel}>
          <ul>
            <li>
              <Link to='/headphones'>Headphones</Link>
            </li>
            <li>
              <Link to='/speakers'>Speakers</Link>
            </li>
            <li>
              <Link to='/earphones'>Earphones</Link>
            </li>
          </ul>

          <ul>
            <li>
              <FaInstagram />
            </li>

            <li>
              <FaXTwitter />
            </li>

            <li>
              <FaTiktok />
            </li>

            <li>
              <FaTelegramPlane />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
