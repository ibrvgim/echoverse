import styles from '../styles/MainProduct.module.css';

function MainProduct({
  children,
  imageOnLeft = true,
  image,
  title,
  section,
  description,
  newProduct = true,
}) {
  return (
    <section className={styles.container}>
      <div>
        {imageOnLeft && <img src={image} alt={title} />}

        <div>
          {newProduct && <span>New product</span>}
          <div>
            <h1>{title}</h1>
            <h1>{section}</h1>
          </div>

          <p>{description}</p>

          {children}
        </div>

        {!imageOnLeft && <img src={image} alt={title} />}
      </div>
    </section>
  );
}

export default MainProduct;
