import Commerce from '@chec/commerce.js'

// let commerce = null
// const getCommerce = commercePublicKey => {
//     if (commerce) {
//         return commerce
//     } else {
//         const publicKey = commercePublicKey || 'pk_test_38259c693dec3bd1f85298e45609cbb11661c03d32d59'
//         const devEnv = process.env.NODE_ENV === 'development'
//         if (devEnv && !publicKey) {
//             throw Error('Commerce public API key not found')
//         }
//         commerce = new Commerce(publicKey, devEnv)
//         return commerce
//     }
// }

// export default getCommerce

export const commerce = new Commerce(process.env.NEXT_PUBLIC_COMMERCE_PUBLIC_KEY, false)