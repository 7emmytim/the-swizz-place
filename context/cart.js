import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItemToCart = item => !cart.find(x => x.id === item.id) && item.inventory.available > 0 && setCart(prevCart => {
        return [...prevCart, { ...item, quantity: 1, quantityTimesPrice: Number(item.price.raw).toFixed(2) }]
    })

    const removeItemFromCart = item => setCart(prevCart => prevCart.filter(x => x.id !== item.id))

    const increaseQty = item => setCart(prevCart => prevCart
        .map(x => x.id === item.id ? (x.quantity < x.inventory.available ? {
            ...x,
            quantity: x.quantity + 1,
            quantityTimesPrice: (Number(x.quantity + 1) * Number(x.price.raw)).toFixed(2)
        } : { ...x }) : x))

    const decreaseQty = item => setCart(prevCart => prevCart
        .map(x => x.id === item.id ? (x.quantity > 1 ? {
            ...x,
            quantity: x.quantity - 1,
            quantityTimesPrice: (Number(x.quantity - 1) * Number(x.price.raw)).toFixed(2)
        } : { ...x }) : x))

    const emptyCart = item => setCart(item)

    const cartAction = (item, type) => {
        if (type === 'add_to_cart') addItemToCart(item)
        else if (type === 'remove_from_cart') removeItemFromCart(item)
        else if (type === 'increase_quantity') increaseQty(item)
        else if (type === 'decrease_quantity') decreaseQty(item)
        else if (type === 'empty_cart') emptyCart(item)
    }

    return (
        <CartContext.Provider value={[cart, cartAction]}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)

export default CartProvider