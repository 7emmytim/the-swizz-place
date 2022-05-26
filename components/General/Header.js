import { ShoppingBagIcon, HomeIcon } from '@heroicons/react/outline'
import { Badge } from 'antd'
import Link from 'next/link'
import { useCart } from '../../context/cart'

const Header = () => {

    const [cart] = useCart()

    return (
        <div className='container sticky top-0 z-50 pt-8 pb-3 lg:pb-8 w-5/6 lg:w-2/3 cursor-pointer bg-white flex items-center'>
            <div>
                <Link href='/' passHref>
                    <HomeIcon className='w-7 h-7' />
                </Link>
            </div>
            <div className='ml-auto'>
                <Link href='/cart' passHref>
                    <Badge size="default" count={cart.length}>
                        <ShoppingBagIcon className='w-7 h-7' />
                    </Badge>
                    {/* <span className="relative inline-block">
                        <ShoppingBagIcon className='w-7 h-7' />
                        <span
                            className="absolute -top-2 right-0 px-2 py-1 text-xs font-bold leading-none text-red-100 transform bg-red-600 rounded-full">9</span>
                    </span> */}
                </Link>
            </div>
        </div>
    )
}

export default Header