import IndividualItem from './IndividualItem'

const ItemsList = ({ products }) => {

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10 items-center container'>
                {
                    products.map(product => {
                        return (
                            <IndividualItem key={product.id} product={product} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ItemsList