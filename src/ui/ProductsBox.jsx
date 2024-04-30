import { Link } from 'react-router-dom';
import styles from '../styles/ProductsBox.module.css';
import { IoIosArrowForward } from 'react-icons/io';

function ProductsBox() {
  return (
    <section className={styles.container}>
      <ul>
        <ProductItem
          image='images/shared/desktop/image-headphones.png'
          title='Headphones'
          path='/headphones'
        />

        <ProductItem
          image='images/shared/desktop/image-speakers.png'
          title='Speakers'
          path='/speakers'
        />

        <ProductItem
          image='images/shared/desktop/image-earphones.png'
          title='Earphones'
          path='/earphones'
        />
      </ul>
    </section>
  );
}

function ProductItem({ image, title, path }) {
  return (
    <li>
      <Link to={path}>
        <div>
          <img src={image} alt={title} />
        </div>

        <div className={styles.details}>
          <h3>{title}</h3>
          <div>
            <span>Shop</span>
            <IoIosArrowForward className={styles.icon} />
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ProductsBox;
