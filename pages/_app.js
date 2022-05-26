import CartProvider from '../context/cart'
import 'antd/dist/antd.min.css'
import '../styles/globals.css'
import ProductsProvider from '../context/products'

function MyApp({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ProductsProvider>
  )
}

export default MyApp
