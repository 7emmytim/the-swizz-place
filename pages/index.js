import commerce from '../lib/commerce'
import Layout from '../components/General/Layout'
import ItemsList from '../components/Home/ItemsList'

const Home = ({ products }) => {

  return (
    <>
      <Layout>
        <ItemsList products={products} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  const { data: products } = await commerce.products.list()

  return {
    props: {
      products
    }
  }
}

export default Home
