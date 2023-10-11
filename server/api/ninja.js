// export default defineEventHandler(async (event) => {
//     // handle query params
//     const { name } = getQuery(event);

//     // handle post data
//     const { age } = await readBody(event);

//     return {
//         message: `hello ${name}! you are age ${ age }`,
//     };
//     retutn
// });

import currencyapi from '@everapi/currencyapi-js'

export default defineEventHandler(async () => {
    // didapat dari settingan nuxt.config.ts
    const { currenyKey } = useRuntimeConfig();
    // api call with private key
    const client = new currencyapi(currenyKey)
    
    const data = await client.currencies()
    return data
})

