import styles from '../styles/Hero.module.css';
import Button from '../components/Button';

function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <span>New Product</span>
        <h1>Echo II PRO</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <Button style='primary' path='headphones/echo-two-pro-headphones'>
          See product
        </Button>
      </div>
    </section>
  );
}

export default Hero;
