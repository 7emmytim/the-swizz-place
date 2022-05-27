import Layout from '../components/General/Layout'
import ItemsList from '../components/Home/ItemsList'

const Home = ({products}) => {
  return (
    <>
      <Layout>
        <ItemsList products={products} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://immense-crag-15942.herokuapp.com/api/products?populate=image')
  const json = await res.json()

  return {
    props: {
      products: json.data,
    },
  }
}

export default Home
