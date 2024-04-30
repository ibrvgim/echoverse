import { Link } from 'react-router-dom';
import styles from '../styles/Logo.module.css';

function Logo() {
  return (
    <>
      <Link to='/'>
        <h1 className={styles.logo}>
          echo
          <span>verse</span>
        </h1>
      </Link>
    </>
  );
}

export default Logo;
