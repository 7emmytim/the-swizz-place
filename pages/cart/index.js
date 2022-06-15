import { useEffect, useState } from 'react'
import Layout from '../../components/General/Layout'
import { useCart } from '../../context/cart'
import CartList from '../../components/Cart/CartList'
import CheckoutForm from '../../components/Cart/CheckoutForm'
import 'antd/lib/button/style/index.css'
import Confirmation from '../../components/Cart/Confirmation'
import SuccessfulShopping from '../../components/Cart/SuccessfulShopping'
import { Empty } from 'antd'

const Cart = () => {

    const [cart,] = useCart()
    const [subtotal, setSubtotal] = useState(0)
    const [current, setCurrent] = useState(0)
    const [user, setUser] = useState({})

    const next = () => {
        setCurrent(current + 1)
    }

    const prev = () => {
        setCurrent(current - 1)
    }

    useEffect(() => {
        setSubtotal(cart.reduce((a, b) => {
            return a + Number(b.quantityTimesPrice)
        }, 0))
    }, [cart])

    const saveUser = values => {
        setUser(values)
        next()
    }

    const steps = [
        {
            title: 'First',
            content: <CartList subtotal={subtotal} next={next} />
        },
        {
            title: 'Second',
            content: <CheckoutForm prev={prev} saveUser={saveUser} user={user} />
        },
        {
            title: 'Third',
            content: <Confirmation subtotal={subtotal} user={user} prev={prev} next={next} />
        },
        {
            title: 'Fourth',
            content: <SuccessfulShopping />
        }
    ]

    return (
        <Layout>
            {
                cart.length > 0 ?
                    <>
                        {steps[current].content}
                    </> :
                    <Empty description='Your cart is empty' image={Empty.PRESENTED_IMAGE_SIMPLE} />
            }
        </Layout>

    )
}

export default Cart