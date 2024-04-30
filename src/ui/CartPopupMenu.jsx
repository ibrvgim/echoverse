import styles from '../styles/CartPopupMenu.module.css';
import Button from '../components/Button';
import { formatCurrency } from '../utilities/helpers';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeAllProducts,
} from '../slices/cartSlice';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

function CartPopupMenu({ allItems, getCartProductQuantity }) {
  const location = useLocation();

  return (
    <section className={styles.containerPopup}>
      {allItems.length > 0 ? (
        <>
          <Heading getCartProductQuantity={getCartProductQuantity} />

          {allItems.map((item) => (
            <Products
              id={item.id}
              image={item.cartImage}
              title={item.shortName}
              price={item.price}
              quantity={item.quantity}
              key={item.id}
            />
          ))}

          {location.pathname !== '/checkout' && <Summary allItems={allItems} />}
        </>
      ) : (
        <div className={styles.emptyCart}>
          <p>Your cart is empty.</p>
          <MdOutlineShoppingCart className={styles.icon} />
        </div>
      )}
    </section>
  );
}

function Heading({ getCartProductQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.popupHeading}>
      <h3>Cart ( {getCartProductQuantity} )</h3>
      <button
        onClick={() => {
          dispatch(removeAllProducts());
          toast.success('All products have been removed!');
        }}
      >
        Remove All
      </button>
    </div>
  );
}

function Products({ id, image, title, price, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.popupProducts}>
      <img src={image} alt={title} />

      <div>
        <h4>{title}</h4>
        <span>{formatCurrency(price)}</span>
      </div>

      <div>
        <div>
          <button onClick={() => dispatch(decreaseQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(increaseQuantity(id))}>+</button>
        </div>
      </div>
    </div>
  );
}

function Summary({ allItems }) {
  const totalCartPrice = allItems
    .map((item) => item.price * item.quantity)
    .reduce((acc, price) => acc + price, 0);

  return (
    <div className={styles.popupTotal}>
      <div>
        <p>Total</p>
        <span>{formatCurrency(totalCartPrice)}</span>
      </div>

      <Button style='primary' path='/checkout'>
        Checkout
      </Button>
    </div>
  );
}

export default CartPopupMenu;
