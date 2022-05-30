import Image from 'next/image'
import { useCart } from '../../context/cart'
import { InformationCircleIcon, PlusCircleIcon, XCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { message } from 'antd'

const IndividualItem = ({ product }) => {

    const [cart, cartAction] = useCart()

    return (
        <div className='container'>
            <div className='relative bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer'>
                <div className='overflow-x-hidden rounded-2xl relative'>
                    <Image
                        width={100}
                        height={70}
                        layout='responsive'
                        className='h-40 rounded-2xl w-full object-cover'
                        src={`https://immense-crag-15942.herokuapp.com${product.image.data.attributes.url}`}
                        alt='Shopping cart'
                    />
                    <p className='absolute right-2 top-2 bg-white rounded-full h-8 w-8 cursor-pointer group flex items-center justify-center'>
                        {product.inventory.available}
                    </p>
                </div>
                <div className='mt-4 pl-2 mb-2 flex justify-between'>
                    <div>
                        <p className='font-semibold text-lg leading-tight truncate mb-0'>{product.name}</p>
                    </div>
                    <div className='flex flex-col-reverse mb-1 mr-4 group cursor-pointer'>
                        {/* <button className='px-3 py-1 bg-yellow-500 text-white rounded-sm text-sm remove-link-decoration'>
                            <Link href={`/product/${product.id}`}>Details</Link>
                        </button> */}
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
                                        <PlusCircleIcon className='w-5 h-5 mr-2' />
                                        <span>Add to buy</span>
                                    </div>
                            }
                        </span>
                        <span className='block flex-1 text-center text-sm text-yellow-500 hover:text-yellow-600 font-medium px-3 py-4 group'>
                            <div className='flex items-center justify-center'>
                                <InformationCircleIcon className='w-5 h-5 text-yellow-400 group-hover:text-yellow-500 mr-2' />
                                <div className='remove-link-decoration'>
                                    <Link href={`/product/${product.id}`}>Details</Link>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default IndividualItem