import styles from '../styles/CheckoutForm.module.css';
import { IoIosClose } from 'react-icons/io';
import { GiCash } from 'react-icons/gi';
import Button from '../components/Button';
import {
  getProductsCart,
  removeAllProducts,
  removeItemFromCart,
} from '../slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../utilities/helpers';
import ProductBox from '../ui/ProductsBox';
import { SHIPPING_PRICE, VAT_FEE } from '../utilities/constants';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ConfirmationWindow from './ConfirmationWindow';

function CheckoutForm({ ordered, setOrdered }) {
  const allItems = useSelector(getProductsCart);
  const dispatch = useDispatch();

  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  function onSubmit() {
    reset();
    setOrdered(true);
    dispatch(removeAllProducts());
  }

  return (
    <section className={styles.container}>
      <div>
        {!ordered ? (
          allItems.length > 0 ? (
            <>
              <Form
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                errors={errors}
              />
              <Summary
                allItems={allItems}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
              />
            </>
          ) : (
            <div className={styles.emptyCartContainer}>
              <div>There are no items in your cart yet!</div>
              <ProductBox />
            </div>
          )
        ) : (
          <ConfirmationWindow setOrdered={setOrdered} />
        )}
      </div>
    </section>
  );
}

function Form({ register, handleSubmit, onSubmit, errors }) {
  const [radioValue, setRadioValue] = useState('paypal');

  return (
    <div className={styles.form}>
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.billingDetails}>
          <p>Billing details</p>
          <div>
            <span className={styles.warning}>
              {errors?.fullName?.message || null}
            </span>
            <input
              className={errors?.fullName?.message ? styles.invalid : ''}
              type='text'
              placeholder='Full Name'
              {...register('fullName', {
                required: 'Fill in Full Name',
                minLength: {
                  value: 4,
                  message: 'At least 4 characters',
                },
              })}
            />
          </div>

          <div>
            <span className={styles.warning}>
              {errors?.email?.message || null}
            </span>
            <input
              className={errors?.email?.message ? styles.invalid : ''}
              type='text'
              placeholder='E-mail'
              {...register('email', {
                required: 'Fill in Email Address',
                validate: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  'Invalid Email Address',
              })}
            />
          </div>

          <div>
            <span className={styles.warning}>
              {errors?.phoneNumber?.message || null}
            </span>
            <input
              className={errors?.phoneNumber?.message ? styles.invalid : ''}
              type='tel'
              placeholder='Phone number'
              {...register('phoneNumber', {
                required: 'Fill in Phone Number',
                validate: (value) =>
                  /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(value) ||
                  'Invalid Phone Number',
              })}
            />
          </div>
        </div>

        <div className={styles.shippingInfo}>
          <p>Shipping Info</p>
          <div>
            <span className={styles.warning}>
              {errors?.street?.message || null}
            </span>
            <input
              className={errors?.street?.message ? styles.invalid : ''}
              id='address'
              type='text'
              placeholder='Street'
              {...register('street', { required: 'Fill in Street Name' })}
            />
          </div>

          <div>
            <span className={styles.warning}>
              {errors?.postalCode?.message || null}
            </span>
            <input
              className={errors?.postalCode?.message ? styles.invalid : ''}
              id='postal-code'
              type='text'
              placeholder='Postal code'
              {...register('postalCode', {
                required: 'Fill in Postal code',
                validate: (value) =>
                  /[0-9]/.test(value) || 'Invalid Postal Code ( only numbers )',
              })}
            />
          </div>

          <div>
            <span className={styles.warning}>
              {errors?.city?.message || null}
            </span>
            <input
              className={errors?.city?.message ? styles.invalid : ''}
              id='city'
              type='text'
              placeholder='City'
              {...register('city', { required: 'Fill in City' })}
            />
          </div>

          <div>
            <span className={styles.warning}>
              {errors?.country?.message || null}
            </span>
            <input
              className={errors?.country?.message ? styles.invalid : ''}
              id='country'
              type='text'
              placeholder='Country'
              {...register('country', { required: 'Fill in Country' })}
            />
          </div>
        </div>

        <div className={styles.paymentDetails}>
          <p>Payment details</p>
          <p>Payment method</p>

          <div className={styles.paymentMethods}>
            <div
              onClick={() => setRadioValue('paypal')}
              style={
                radioValue === 'paypal'
                  ? {
                      border: '2px solid var(--color-orange-main)',
                    }
                  : {
                      border: ' 2px solid var(--color-gray-400)',
                    }
              }
            >
              <input
                type='radio'
                id='paypal'
                value='paypal'
                name='payment'
                {...register('paymentMethod')}
                checked={radioValue === 'paypal'}
                onChange={() => setRadioValue('paypal')}
              />
              <label htmlFor='paypal'>PayPal</label>
            </div>

            <div
              onClick={() => setRadioValue('cash')}
              style={
                radioValue === 'cash'
                  ? {
                      border: '2px solid var(--color-orange-main)',
                    }
                  : {
                      border: ' 2px solid var(--color-gray-400)',
                    }
              }
            >
              <input
                type='radio'
                id='cash'
                value='cash'
                name='payment'
                checked={radioValue === 'cash'}
                {...register('paymentMethod')}
                onChange={() => setRadioValue('cash')}
              />
              <label htmlFor='cash'>Cash on Delivery</label>
            </div>
          </div>

          {radioValue === 'paypal' ? (
            <div className={styles.paypaldetails}>
              <p>PayPal details</p>
              <div>
                <span className={styles.warning}>
                  {errors?.paypalUsername?.message || null}
                </span>
                <input
                  className={
                    errors?.paypalUsername?.message ? styles.invalid : ''
                  }
                  type='text'
                  placeholder='PayPal Username'
                  {...register('paypalUsername', {
                    required: 'Fill in PayPal Username',
                  })}
                />
              </div>

              <div>
                <span className={styles.warning}>
                  {errors?.paypalID?.message || null}
                </span>
                <input
                  className={errors?.paypalID?.message ? styles.invalid : ''}
                  type='text'
                  placeholder='PayPal ID'
                  {...register('paypalID', {
                    required: 'Fill in PayPal ID',
                  })}
                />
              </div>
            </div>
          ) : (
            <div className={styles.cashMessage}>
              <span>
                <GiCash className={styles.messageIcon} />
              </span>
              <p>
                The <span>Cash on Delivery</span> option enables you to pay in
                cash when our delivery courier arrives at your residence. Just
                make sure your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

function Summary({ allItems, handleSubmit, onSubmit }) {
  const totalCartPrice =
    allItems
      .map((item) => item.price * item.quantity)
      .reduce((acc, price) => acc + price, 0) + SHIPPING_PRICE;

  return (
    <div className={styles.summary}>
      <h2>Summary</h2>
      <div>
        {allItems.map((item) => (
          <ItemInfo
            id={item.id}
            image={item.cartImage}
            title={item.shortName}
            price={item.price}
            quantity={item.quantity}
            key={item.id}
          />
        ))}
      </div>
      <Check
        totalCartPrice={totalCartPrice}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </div>
  );
}

function ItemInfo({ id, image, title, price, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.itemInfo}>
      <img src={image} />

      <div>
        <p>{title}</p>
        <span>{formatCurrency(price)}</span>
        <div className={styles.itemCount}>x{quantity}</div>
      </div>

      <button
        onClick={() => {
          dispatch(removeItemFromCart(id));
          toast.success(`'${title}' successfully removed from cart!`);
        }}
      >
        <IoIosClose className={styles.removeIcon} />
      </button>
    </div>
  );
}

function Check({ totalCartPrice, handleSubmit, onSubmit }) {
  return (
    <div className={styles.check}>
      <div>
        <p>Total</p>
        <span>{formatCurrency(totalCartPrice)}</span>
      </div>

      <div>
        <p>Shipping</p>
        <span>{formatCurrency(SHIPPING_PRICE)}</span>
      </div>

      <div>
        <p>VAT ( included )</p>
        <span>{formatCurrency(totalCartPrice * VAT_FEE)}</span>
      </div>

      <Button style='primary' handleOnClick={handleSubmit(onSubmit)}>
        Continue & Pay
      </Button>
    </div>
  );
}

export default CheckoutForm;
