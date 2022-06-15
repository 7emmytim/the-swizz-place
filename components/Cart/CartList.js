import { XCircleIcon } from '@heroicons/react/solid'
import { useCart } from '../../context/cart'
import { currencyFormatter } from '../../utils/functions'

const CartList = ({ subtotal, next }) => {

    const [cart, cartAction] = useCart()

    return (
        <div className='wrap cf'>
            <div className='cart'>
                <ul className='cartWrap'>
                    {cart.map((product, i) => {
                        const even = (i + 1) % 2 === 0
                        return (
                            <li key={product.id} className={`items ${even ? 'even' : 'odd'}`}>

                                <div className='infoWrap'>
                                    <div className='cartSection'>
                                        <img src={product.image.url} alt='' className='itemImg' />
                                        <p className='itemNumber uppercase'>#{product.id}</p>
                                        <h3>{product.name}</h3>

                                        <div className='flex items-center justify-evenly gap-2'>
                                            <p className='text-lg' onClick={() => cartAction(product, 'decrease_quantity')}>-</p>
                                            <p>{product.quantity}/{product.inventory.available} x ₦{product.price.formatted}</p>
                                            <p className='text-lg' onClick={() => cartAction(product, 'increase_quantity')}>+</p>
                                        </div>
                                    </div>


                                    <div className='prodTotal cartSection'>
                                        <p>₦{product.quantityTimesPrice}</p>
                                    </div>
                                    <div className='cartSection removeWrap'>
                                        <XCircleIcon className='h-6 w-6 text-red-500 mx-auto cursor-pointer' onClick={() => cartAction(item, 'remove_from_cart')} />
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className='subtotal cf'>
                <ul>
                    <li className='totalRow'><span className='label'>Subtotal</span><span className='value'>₦{currencyFormatter(subtotal)}</span></li>

                    <li className='totalRow'><span className='label'>Shipping</span><span className='value'>₦0.00</span></li>

                    {/* <li className='totalRow'><span className='label'>Tax</span><span className='value'>₦0.00</span></li> */}
                    <li className='totalRow final'><span className='label'>Total</span><span className='value'>₦{currencyFormatter(subtotal)}</span></li>
                    <li className='totalRow'><a href='#' onClick={next} className='btn continue'>Checkout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default CartList