import styles from '../styles/ProductsDetails.module.css';
import Button from '../components/Button';

function ProductsDetails() {
  return (
    <section className={styles.container}>
      <FirstProduct />
      <SecondProduct />
      <ThirdProduct />
    </section>
  );
}

function FirstProduct() {
  return (
    <div className={styles.first}>
      <img
        src='images/home/desktop/image-speaker-zx9.png'
        alt='speaker echo atomic'
      />

      <div>
        <h2>Echo Atomic Speaker</h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button style='secondary' path='speakers/echo-atomic-speaker'>
          See Product
        </Button>
      </div>
    </div>
  );
}

function SecondProduct() {
  return (
    <div className={styles.second}>
      <div>
        <h2>Echo VII Speaker</h2>
        <Button style='tertiary' path='speakers/echo-seven-speaker'>
          See product
        </Button>
      </div>
    </div>
  );
}

function ThirdProduct() {
  return (
    <div className={styles.third}>
      <div>
        <img src='images/home/desktop/image-earphones-yx1.jpg' />
      </div>

      <div className={styles.thirdDescription}>
        <div>
          <h2>Echo I Earphones</h2>
          <Button style='tertiary' path='speakers/echo-one-wireless-earphones'>
            See product
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetails;
