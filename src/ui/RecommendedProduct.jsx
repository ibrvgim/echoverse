import styles from '../styles/RecommendedProduct.module.css';
import Button from '../components/Button';
import { formatCurrency } from '../utilities/helpers';

function RecommendedProduct({ products }) {
  return (
    <section className={styles.container}>
      <h1>You may also like</h1>
      <div>
        {products.map((product, id) => (
          <ProductItem
            image={product.image.desktop}
            title={product.name}
            price={product.price}
            path={product.slug}
            key={id}
          />
        ))}
      </div>
    </section>
  );
}

function ProductItem({ image, title, price, path }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <span>{formatCurrency(price)}</span>

      <Button style='primary' path={path}>
        See product
      </Button>
    </div>
  );
}

export default RecommendedProduct;
