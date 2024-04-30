import styles from '../styles/ConfirmationWindow.module.css';
import Button from '../components/Button';
import { CiCircleCheck } from 'react-icons/ci';

function ConfirmationWindow({ setOrdered }) {
  return (
    <section className={styles.container}>
      <div>
        <CiCircleCheck className={styles.icon} />
        <div className={styles.orderInfo}>
          <h1>Thank you for your order!</h1>
          <p>Order #{Date.now().toString().slice(0, 8)}</p>
          <p>You will receive a confirmation email soon.</p>
        </div>
        <Button
          style='primary'
          path='/'
          handleOnClick={() => setOrdered(false)}
        >
          Back home
        </Button>
      </div>
    </section>
  );
}

export default ConfirmationWindow;
