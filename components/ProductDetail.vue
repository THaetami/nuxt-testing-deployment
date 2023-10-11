
<template>
    <div class="card">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="p-7 ">
                <img :src="product.image" alt="product img" class="mx-auto my-7">
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">{{ product.title }}</h2>
                <div class="items-center inline-block space-x-0 sm:flex sm:space-x-1 md:space-x-0 md:inline-block lg:space-x-2 lg:flex">
                    <button class="btn" @click="toggleConvertToIdr">Convert to {{ !isConverted ? 'IDR' : 'USD' }}</button>
                    <p class="text-xl my-3 ">Price - {{ !isConverted ? '$' : '' }}. {{ convertedPrice }}</p>
                </div>
                <h3 class="font-bold border-b-2 mb-4 -b-2">Product description</h3>
                <p class="mb-7">{{ product.description }}</p>
                <button class="btn flex ">
                    <i class="material-icons mr-2">add_shopping_cart</i>
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product']);

const { data } = await useFetch('/api/currency/IDR');

const isConverted = ref(false);
const convertedPrice = ref(product.price);

const toggleConvertToIdr = () => {
    isConverted.value = !isConverted.value;
    if (isConverted.value) {
        convertedPrice.value = formatCurrency(Math.round(product.price * data._rawValue.data.IDR.value));
    } else {
        convertedPrice.value = product.price;
    }
}

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
}

</script>

<style scoped>
img {
    max-width: 300px;
}
</style>