export default defineEventHandler( async(event) => {

    const { code } = event.context.params;

    // didapat dari nuxt.config.ts
    const { currenyKey } = useRuntimeConfig();

    const uri = `https://api.currencyapi.com/v3/latest?apikey=${currenyKey}&currencies=${code}`;

    const data = await $fetch(uri);

    return data;
})