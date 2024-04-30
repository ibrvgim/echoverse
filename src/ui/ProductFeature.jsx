import styles from '../styles/ProductFeature.module.css';

function ProductFeature({ feature, includes }) {
  const [firstParagraph, secondParagraph] = feature.split('\n\n');

  return (
    <section className={styles.container}>
      <div>
        <div className={styles.feature}>
          <h1>Features</h1>
          <p>{firstParagraph}</p>
          <br />
          <p>{secondParagraph}</p>
        </div>

        <div className={styles.boxIncludes}>
          <h1>Box included</h1>

          <ul>
            {includes.map((item, id) => (
              <li key={id}>
                <span>{item.quantity}x</span>
                <p>{item.item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductFeature;
