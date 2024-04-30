import styles from '../styles/PageTitle.module.css';

function PageTitle({ children }) {
  return (
    <div className={styles.container}>
      <p>{children}</p>
    </div>
  );
}

export default PageTitle;
