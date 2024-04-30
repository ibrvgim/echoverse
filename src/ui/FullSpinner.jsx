import styles from '../styles/FullSpinner.module.css';

function FullSpinner() {
  return (
    <section className={styles.container}>
      <span className={styles.loader}></span>
    </section>
  );
}

export default FullSpinner;
