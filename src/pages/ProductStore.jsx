import { useParams } from 'react-router-dom';
import AddToCart from '../components/AddToCart';
import GoBack from '../components/GoBack';
import Header from '../components/Header';
import Footer from '../ui/Footer';
import MainProduct from '../ui/MainProduct';
import ProductFeature from '../ui/ProductFeature';
import ProductGallery from '../ui/ProductGallery';
import RecommendedProduct from '../ui/RecommendedProduct';
import products from '../data/products';
import useScrollToTop from '../hooks/useScrollToTop';
import PageNotFound from './PageNotFound';

function ProductStore() {
  useScrollToTop();

  const { id } = useParams();

  const [getProduct] = products.filter((product) => product.slug === id);

  if (!getProduct) return <PageNotFound />;

  const {
    image,
    category,
    shortName,
    price,
    description,
    newProduct,
    features,
    includedItems,
    gallery,
    others,
  } = getProduct;

  return (
    <>
      <Header />

      <main>
        <GoBack />
        <MainProduct
          image={image.desktop}
          title={shortName}
          section={category}
          description={description}
          newProduct={newProduct}
        >
          <AddToCart price={price} product={getProduct} />
        </MainProduct>

        <ProductFeature feature={features} includes={includedItems} />
        <ProductGallery gallery={gallery} />
        <RecommendedProduct products={others} />
      </main>

      <Footer />
    </>
  );
}

export default ProductStore;
