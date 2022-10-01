<script setup lang="ts">
</script>

<template>
    <nav v-if="$route.path != '/login'" class="p-4 flex w-full">
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
            <router-link to="/login">
                <button>
                    <i class="material-icons-round">logout</i>
                </button>
            </router-link>
        </div>
    </nav>
</template>

<style scoped>
button {
    @apply bg-transparent w-9 h-9 p-0 outline-none text-[#ccc]
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