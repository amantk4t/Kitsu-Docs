<script lang="ts" setup>
const user = {
    email: "",
    password: ""
}
const submit = () => {
    console.log("LOGIN")
}
</script>

<template>
    <form class="w-[60vw] md:w-[40vw] lg:w-[40vw]" @submit.prevent="submit" validate>
        <h3 id="logo" class="font-bold text-3xl ml-4">
            <span class="text-white">GRO</span>
            <span class="text-[#db6f0a]">HOUSE</span>
        </h3>
        <input type="email" class="input focus: outline-none focus:border-[#db6f0a]" placeholder="Email"
            v-model="user.email" required />
        <input type="password" class="input focus: outline-none focus:border-[#db6f0a]" placeholder="Password"
            v-model="user.password" required />
        <router-link to="/">
            <input type="submit" class="px-4 py-2 cursor-pointer mx-auto w-fit gradient text-white uppercase font-bold"
                value="Sign Up" />
        </router-link>
    </form>
</template>

<style scoped>
form {
    @apply flex flex-col gap-4 absolute -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 text-center
}

input {
    @apply w-full px-4 py-2 rounded-lg border-2 border-gray-300
}
</style>