<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/FirebaseAuth'
const authStore = useAuthStore()
const user = {
    email: ref("")
}
const submit = () => {
    authStore.forgotPassword(user.email.value)
}
</script>

<template>
    <!-- forgot password page -->
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto">
            <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
                Forgot Password
            </h1>

            <p class="max-w-md mx-auto mt-4 text-center text-white">
                Enter your email address and we'll send you a link to reset your password.
            </p>

            <form @submit.prevent="submit" class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl text-gray-500">
                <p class="text-lg font-medium">Reset your password</p>
                <div>
                    <label for="email" class="text-sm font-medium">Email</label>
                    <div class="relative mt-1">
                        <input type="email" id="email"
                            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                            placeholder="Enter your email" v-model="user.email.value" />
                    </div>
                </div>
                <div class="flex justify-center">
                    <button type="submit"
                        class="w-full px-4 py-2 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                        Reset Password
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>