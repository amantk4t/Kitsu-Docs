<script lang="ts" setup>
import Receipt from './Receipt.vue';
const items = [
    { icon: "dashboard", label: "Dashboard", link: "/" },
    { icon: "notes", label: "Menu", link: "/menu" },
    { icon: "shopping_cart", label: "Orders", link: "/orders" },
    { icon: "group", label: "Customer", link: "/customer" },
    { icon: "sms", label: "Review", link: "/review" },
    { icon: "text_snippet", label: "Invoices", link: "/invoices" },
    { icon: "settings", label: "Setting", link: "/setting" },
] 
</script>

<template>
    <div class="drawer w-[25vw] flex flex-col items-stretch justify-around max-h-screen overflow-y-auto"
        v-if="$route.path != '/login' && $route.path != '/create_account'">
        <div id="logo" class="font-bold text-xl ml-4">
            <span class="text-white">GRO</span>
            <span class="text-[#db6f0a]">HOUSE</span>
        </div>
        <div id="user" class="flex items-center ml-4 gap-4">
            <div id="pic" class="rounded-full w-10">
                <img class="rounded-full" src="/assets/avatar.png" />
            </div>
            <div id="desc">
                <h3 id="name" class="font-bold text-white">Fadilah</h3>
                <p id="role" class="text-[10px] font-light text-[#999]">Admin</p>
            </div>
        </div>
        <div class="drawer-side font-bolder">
            <div class="overflow-y-auto text-base-content p-2">
                <router-link v-for="item in items" :to="item.link"
                    class="button px-2 w-3/4 py-2 my-2 flex items-center gap-4 text-sm text-[#747bff]"
                    :class="{'gradient text-[#111] hover:text-[#111] text rounded-full': $route.name == item.label}">
                    <i class="material-icons-round">{{item.icon}}</i>
                    <span>{{item.label}}</span>
                </router-link>
            </div>
        </div>
        <!-- <Receipt /> -->
    </div>
</template>

<style scoped>
.button:active {
    animation: bounce 0.5s;
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

.text {
    text-shadow: 0 0 4px #fff3, 0 0 8px #fff3;
}
</style>