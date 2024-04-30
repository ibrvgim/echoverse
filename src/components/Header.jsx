import NavigationBar from '../ui/NavigationBar';
import styles from '../styles/Header.module.css';

function Header({ children }) {
  return (
    <header className={styles.header}>
      <NavigationBar />
      {children}
    </header>
  );
}

export default Header;
