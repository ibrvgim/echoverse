import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('./pages/HomePage'));
const Headphones = lazy(() => import('./pages/Headphones'));
const Speakers = lazy(() => import('./pages/Speakers'));
const Earphones = lazy(() => import('./pages/Earphones'));
const Checkout = lazy(() => import('./pages/Checkout'));
const ProductStore = lazy(() => import('./pages/ProductStore'));
const FullSpinner = lazy(() => import('./ui/FullSpinner'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<FullSpinner />}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='headphones' element={<Headphones />} />
            <Route path='headphones/:id' element={<ProductStore />} />

            <Route path='speakers' element={<Speakers />} />
            <Route path='speakers/:id' element={<ProductStore />} />

            <Route path='earphones' element={<Earphones />} />
            <Route path='earphones/:id' element={<ProductStore />} />

            <Route path='checkout' element={<Checkout />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 2000,
          },

          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-gray-700)',
            color: 'var(--color-white)',
            fontWeight: '600',
          },
        }}
      />
    </>
  );
}

export default App;
