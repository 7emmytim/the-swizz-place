import { Spin } from 'antd'
import { useProducts } from '../../context/products'
import IndividualItem from './IndividualItem'

const ItemsList = () => {

    const [products, loading] = useProducts()

    return (
        <>
            {loading &&
                <div className='text-center'>
                    <Spin tip='Loading...' />
                </div>}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10 items-center container'>
                {
                    products && products.map(item => {
                        return (
                            <IndividualItem key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ItemsList