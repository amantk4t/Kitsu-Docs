<script setup lang="ts">
import { ref } from 'vue'
import Modal from './Modal.vue'
</script>

<template>
    <nav v-if="$route.path != '/login' && $route.path != '/create_account' && $route.path != '/forgot_password'"
        class="flex items-center">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <label for="my-drawer-3" class="drawer-button text-[#737f99] cursor-pointer mx-2 button">
            <button>
                <i class="material-icons-round">menu</i>
            </button>
        </label>
        <h3 class="text-md flex-1 text-white font-semibold">{{ $route.name }}</h3>
        <div class="relative text-[#737f99]">
            <i class="w-4 h-4 material-icons-round absolute top-1 left-1">search</i>
            <input type="search" placeholder="Search here"
                class="input h-8 w-full max-w-xs pl-8 pr-10 bg-[#253252] rounded-full shadow-sm sm:text-sm" />
        </div>
        <div>
            <button>
                <i class="material-icons-round">notifications</i>
            </button>
            <button>
                <i class="material-icons-round">email</i>
            </button>
            <button>
                <label for="logout-modal" class="modal-button cursor-pointer">
                    <i class="material-icons-round">logout</i>
                </label>
            </button>
        </div>
        <Modal />
    </nav>
</template>

<style scoped>
button {
    @apply bg-transparent w-9 h-9 p-0 outline-none text-[#ccc]
}

button label {
    @apply cursor-pointer w-fit
}

button:active {
    animation: bounce 0.2s;
}

@keyframes bounce {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(0.9);
    }

    100% {
        transform: scale(1);
    }
}
</style>