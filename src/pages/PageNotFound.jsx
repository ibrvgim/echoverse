import styles from '../styles/PageNotFound.module.css';
import Header from '../components/Header';
import Button from '../components/Button';
import { TbError404 } from 'react-icons/tb';

function PageNotFound() {
  return (
    <>
      <Header>
        <div className={styles.error}>
          <TbError404 />
        </div>
      </Header>

      <main className={styles.container}>
        <div>
          <h1>This page could not be found</h1>
          <Button style='tertiary' path='/'>
            Go Home
          </Button>
        </div>
      </main>
    </>
  );
}

export default PageNotFound;
