import styles from '../styles/NavigationBar.module.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../components/Logo';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { getProductsCart } from '../slices/cartSlice';
import CartPopupMenu from './CartPopupMenu';

function NavigationBar() {
  const allItems = useSelector(getProductsCart);

  const getCartProductQuantity =
    allItems.length > 0 &&
    allItems.map((item) => item.quantity).reduce((acc, num) => acc + num, 0);

  return (
    <>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Logo />
          </li>

          <div className={styles.navButtons}>
            <li>
              <NavLink to='/headphones'>Headphones</NavLink>
            </li>
            <li>
              <NavLink to='/speakers'>Speakers</NavLink>
            </li>
            <li>
              <NavLink to='/earphones'>Earphones</NavLink>
            </li>
            <li className={styles.cart}>
              <div>
                <Link to='/checkout'>
                  <MdOutlineShoppingCart className={styles.icon} />
                  {getCartProductQuantity > 0 && (
                    <button className={styles.itemsAmount}>
                      {getCartProductQuantity}
                    </button>
                  )}
                </Link>
              </div>
              <CartPopupMenu
                allItems={allItems}
                getCartProductQuantity={getCartProductQuantity}
              />
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default NavigationBar;
