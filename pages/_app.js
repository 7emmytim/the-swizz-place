import CartProvider from '../context/cart'
import 'antd/dist/antd.min.css'
import '../styles/cart.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
