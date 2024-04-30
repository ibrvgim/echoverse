import styles from '../styles/ProductGallery.module.css';

function ProductGallery({ gallery }) {
  const { first, second, third } = gallery;

  return (
    <section className={styles.container}>
      <div>
        <img src={first.desktop} alt='product image 1' />

        <img src={second.desktop} alt='product image 2' />

        <img src={third.desktop} alt='product image 3' />
      </div>
    </section>
  );
}

export default ProductGallery;
