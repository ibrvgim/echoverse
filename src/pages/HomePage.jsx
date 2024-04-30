import Footer from '../ui/Footer';
import Header from '../components/Header';
import ProductDescription from '../ui/ProductDescription';
import ProductsBox from '../ui/ProductsBox';
import ProductsDetails from '../ui/ProductsDetails';
import Hero from '../ui/Hero';
import useScrollToTop from '../hooks/useScrollToTop';

function HomePage() {
  useScrollToTop();

  return (
    <>
      <Header>
        <Hero />
      </Header>

      <main>
        <ProductsBox />
        <ProductsDetails />
        <ProductDescription />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
