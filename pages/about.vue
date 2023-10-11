<template>
    <div>
        <h2>About</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum maxime quidem voluptatum eos rerum
            commodi impedit at corrupti in!</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
useHead({
    title: 'Nuxt Dojo | About',
    meta: [
        { name: 'description', content: 'Nuxt 3 About bout' }
    ]
})

// const { data } = await useFetch('api/ninja?name=tatang', {
//     method: 'post',
//     body: { age: 30 }
// });

const { data } = await useFetch('/api/ninja')

</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>