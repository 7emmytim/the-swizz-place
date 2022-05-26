import { XCircleIcon } from '@heroicons/react/solid'
import { Button } from 'antd'
import { useCart } from '../../context/cart'
import { currencyFormatter } from '../../utils/functions'

const CartList = ({ subtotal, next }) => {

    const [cart, cartAction] = useCart()

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    {/* Table header */}
                    <thead className="text-md capitalize text-gray-800 border-gray-100" style={{ borderBottomWidth: '1px' }}>
                        <tr>
                            <th className="px-2 py-4">
                                <div className="font-semibold text-left"></div>
                            </th>
                            <th className="px-2 py-4">
                                <div className="font-semibold text-center md:text-left uppercase text-gray-500"></div>
                            </th>
                            <th className="px-2 py-4">
                                <div className="font-semibold text-center"></div>
                            </th>
                        </tr>
                    </thead>
                    {/* Table body */}
                    <tbody className="text-sm font-medium divide-y divide-gray-100 border-gray-100" style={{ borderBottomWidth: '1px' }}>
                        {
                            cart.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td className="p-2">
                                            <div className="flex items-center">
                                                <img src={item.image.url} className='hidden lg:inline-block h-16 w-16 shrink-0 mr-2 sm:mr-3 opacity-70' />
                                                <div className="text-md">
                                                    <p className="text-gray-800 capitalize text-lg font-medium">{item.name}</p>
                                                    <p className='text-red-500 font-normal'>₦{item.price.formatted}</p>
                                                    <p className='text-gray-500 font-normal text-sm'>₦{currencyFormatter(item.quantityTimesPrice)}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-2">
                                            <div className="text-center md:text-left md:flex md:flex-row md:items-start">
                                                <button
                                                    className='bg-gray-200 px-2 py-1 md:px-3 md:py-2 border-gray-300 md:border-2'
                                                    onClick={() => cartAction(item, 'decrease_quantity')}
                                                >-</button>
                                                <button className='bg-white py-2 px-3'>{item.quantity}/{item.inventory.available}</button>

                                                <button
                                                    className='bg-blue-900  px-2 py-1 md:px-3 md:py-2 md:border-2 md:border-gray-300 text-white'
                                                    onClick={() => cartAction(item, 'increase_quantity')}
                                                >+</button>
                                            </div>
                                        </td>
                                        <td className="p-2">
                                            <div className="text-center">
                                                <XCircleIcon className='h-6 w-6 text-red-500 mx-auto cursor-pointer' onClick={() => cartAction(item, 'remove_from_cart')} />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
            {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
                <div className='p-3 border-gray-300 border-2 flex items-center'>
                    <span>Delivery</span>
                    <span className='ml-auto'>₦0</span>
                </div>
                <div className='p-3 border-gray-300 border-2 flex items-center'>
                    <span>Discount</span>
                    <span className='ml-auto'>₦0</span>
                </div>
                <div className='p-3 border-gray-300 border-2 flex items-center'>
                    <span>Subtotal</span>
                    <span className='ml-auto'>₦{currencyFormatter(subtotal)}</span>
                </div>
                <div className='p-3 border-gray-300 border-2 flex items-center'>
                    <span>Total</span>
                    <span className='ml-auto'>₦{currencyFormatter(subtotal)}</span>
                </div>
            </div> */}

            <div className='mt-5'>
                <Button type='primary' onClick={() => next()}>
                    Next
                </Button>
            </div>

        </div>
    )
}

export default CartList
