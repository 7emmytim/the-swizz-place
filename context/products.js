import { createContext, useContext, useEffect, useState } from 'react'
import { commerce } from '../utils/commerce'

const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchProducts = () => {
        setLoading(true)
        setError('')
        commerce.products.list().then(reponse => {
            setProducts(reponse.data)
            setLoading(false)
        }).catch(error => {
            setError('Error')
            console.log(error)
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <ProductsContext.Provider value={[products, loading, error]}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)

export default ProductsProvider