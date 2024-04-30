import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import Footer from '../ui/Footer';
import MainProduct from '../ui/MainProduct';
import ProductDescription from '../ui/ProductDescription';
import ProductsBox from '../ui/ProductsBox';
import Button from '../components/Button';
import products from '../data/products';
import useScrollToTop from '../hooks/useScrollToTop';

function Earphones() {
  useScrollToTop();

  const getProduct = products
    .slice()
    .sort((a, b) => b.newProduct - a.newProduct)
    .filter((product) => product.category === 'earphones');

  return (
    <>
      <Header>
        <PageTitle>Earphones</PageTitle>
      </Header>

      <main>
        {getProduct
          .slice()
          .sort((a, b) => b.newProduct - a.newProduct)
          .map((product, i) => (
            <MainProduct
              image={product.image.desktop}
              title={product.shortName}
              imageOnLeft={i % 2 === 0 ? true : false}
              section={product.category}
              description={product.description}
              newProduct={product.newProduct}
              key={i}
            >
              <Button style='primary' path={product.slug}>
                See product
              </Button>
            </MainProduct>
          ))}

        <ProductsBox />
        <ProductDescription />
      </main>

      <Footer />
    </>
  );
}

export default Earphones;
