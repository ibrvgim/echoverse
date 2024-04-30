import Header from '../components/Header';
import CheckoutForm from '../ui/CheckoutForm';
import GoBack from '../components/GoBack';
import Footer from '../ui/Footer';
import { useState } from 'react';

function Checkout() {
  const [ordered, setOrdered] = useState(false);

  return (
    <>
      <Header />

      <main>
        {!ordered && <GoBack />}
        <CheckoutForm ordered={ordered} setOrdered={setOrdered} />
      </main>

      {!ordered && <Footer />}
    </>
  );
}

export default Checkout;
