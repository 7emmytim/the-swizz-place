import Head from "next/head"
import Header from "./Header"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Online Shop</title>
                <meta name='description' content='Next app by Timilehin Omotugba' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <div className='w-5/6 lg:w-2/3 container'>
                {children}
            </div>
        </>
    )
}

export default Layout
