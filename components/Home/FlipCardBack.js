import Image from 'next/image'
import { ArrowCircleLeftIcon, EyeOffIcon, InformationCircleIcon, PlusCircleIcon, ShoppingCartIcon, XCircleIcon } from '@heroicons/react/solid'
import { message } from 'antd'
import { useCart } from '../../context/cart'

const FlipCardBack = ({ product, handleFlip }) => {

    const [cart, cartAction] = useCart()

    return (
        <div className='container'>
            <div className='relative bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer'>
                <div className='overflow-x-hidden rounded-2xl h-[15rem] p-4 space-y-2'>
                    <div className='bg-white rounded-full h-8 w-8 cursor-pointer ml-auto'>
                        <img src={product.image.url} className='rounded-full w-8 h-8 object-cover' />
                    </div>
                    <div className='text-right text-gray-500' dangerouslySetInnerHTML={{ __html: product.description }} />
                </div>
                <div className='mt-4 pl-2 mb-2 flex justify-between'>
                    <div>
                        <p className='font-semibold text-lg leading-tight truncate mb-0'>{product.name}</p>
                    </div>
                    <div className='flex flex-col-reverse mb-1 mr-4 group cursor-pointer'>
                        <p className='text-gray-600 text-sm mt-0'>₦{product.price.formatted}</p>
                    </div>
                </div>


                <div className='border-t border-gray-200'>
                    <div className='flex divide-x divide-gray-200r'>
                        <span className='block flex-1 text-center text-sm text-indigo-500 hover:text-indigo-600 font-medium px-3 py-4'>
                            {
                                cart.find(x => x.id === product.id) ?
                                    <div onClick={() => cartAction(product, 'remove_from_cart')} className='flex items-center justify-center'>
                                        <XCircleIcon className='w-5 h-5 mr-2 text-red-500' />
                                        <span className='text-red-500'>Remove</span>
                                    </div> :
                                    <div onClick={() => product.inventory.available > 0 ? cartAction(product, 'add_to_cart') : message.warn('Product is currently unavailable')} className='flex items-center justify-center'>
                                        <ShoppingCartIcon className='w-5 h-5 mr-2' />
                                        <span>Add to buy</span>
                                    </div>
                            }
                        </span>
                        <span className='block flex-1 text-center text-sm text-yellow-500 hover:text-yellow-600 font-medium px-3 py-4 group'>
                            <div className='flex items-center justify-center'>
                                <EyeOffIcon className='w-5 h-5 text-yellow-400 group-hover:text-yellow-500 mr-2' />
                                <div onClick={handleFlip}>Return</div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipCardBack