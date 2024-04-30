import { useDispatch } from 'react-redux';
import styles from '../styles/AddToCart.module.css';
import { formatCurrency } from '../utilities/helpers';
import Button from './Button';
import { addToCart } from '../slices/cartSlice';
import { useState } from 'react';
import toast from 'react-hot-toast';

function AddToCart({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { id, cartImage, shortName, price } = product;

  function handleAddToCart() {
    dispatch(
      addToCart({
        id,
        cartImage,
        shortName,
        price,
        quantity: quantity,
      })
    );

    toast.success(`'${shortName}' successfully added to cart!`);
  }

  return (
    <div className={styles.container}>
      <span>{formatCurrency(price)}</span>
      <div className={styles.action}>
        <div>
          <button onClick={() => setQuantity((c) => (c > 1 ? c - 1 : c))}>
            -
          </button>
          <p>{quantity}</p>
          <button onClick={() => setQuantity((c) => (c < 30 ? c + 1 : c))}>
            +
          </button>
        </div>
        <Button style='primary' handleOnClick={handleAddToCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default AddToCart;
