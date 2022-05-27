import { message } from 'antd'
import Layout from '../../components/General/Layout'
import { useCart } from '../../context/cart'

const Product = ({ product }) => {

    const [, cartAction] = useCart()

    const productPrice = product.price.formatted.split('.')

    return (
        <Layout>
            <div className="min-w-screen min-h-screen flex items-center overflow-hidden relative">
                <div className="w-full max-w-6xl rounded bg-white shadow-xl mx-auto text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/3 mb-10 md:mb-0">
                            <div>
                                <img src={`https://immense-crag-15942.herokuapp.com${product.image.data.attributes.url}`} className="z-10" alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 pl-10 pr-20 py-5">
                            <div className="mb-10">
                                <h1 className="font-bold uppercase text-2xl mb-5">{product.name}</h1>
                                <p className="text-sm" dangerouslySetInnerHTML={{ __html: product.description }} />
                            </div>
                            <div>
                                <div className="inline-block align-bottom mr-5">
                                    <span className="text-2xl leading-none align-baseline">₦</span>
                                    <span className="font-bold text-5xl leading-none align-baseline">{productPrice[0]}</span>
                                    <span className="text-2xl leading-none align-baseline">.{productPrice[1]}</span>
                                </div>
                                <div className="inline-block align-bottom">
                                    <button onClick={() => product.inventory.available > 0 ? cartAction(product, 'add_to_cart') : message.warn('Product is currently unavailable')} className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES --> */}
            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Buy me a beer" href="" rel='noreferrer' className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
                    </a>
                </div>
            </div>
        </Layout >
    )
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://immense-crag-15942.herokuapp.com/api/products/${params.slug}?populate=image`)
    const json = await res.json()

    return {
        props: {
            product: { ...json.data.attributes, id: json.data.id },
        },
    }
}

export async function getStaticPaths() {
    const res = await fetch(`https://immense-crag-15942.herokuapp.com/api/products/?populate=image`)
    const json = await res.json()

    return {
        paths: json.data.map(product => {
            const slug = `${product.id}`
            return {
                params: { slug }
            }
        }),
        fallback: false
    }
}

export default Product
