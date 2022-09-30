<script lang="ts" setup>
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
    <div class="drawer w-[25vw] flex flex-col items-stretch justify-around">
        <div id="logo" class="font-bold text-xl ml-4">
            <span class="text-white">GRO</span>
            <span class="text-[#db6f0a]">HOUSE</span>
        </div>
        <div id="user" class="flex items-center ml-4 gap-4">
            <div id="pic" class="rounded-full w-10">
                <img class="rounded-full" src="assets/avatar.jpeg" />
            </div>
            <div id="desc">
                <h3 id="name" class="font-bold text-white">Fadilah</h3>
                <p id="role" class="text-[10px] font-light text-[#999]">Admin</p>
            </div>
        </div>
        <div class="drawer-side font-bolder">
            <div class="overflow-y-auto text-base-content p-2">
                <router-link v-for="item in items" :to="item.link"
                    class="px-4 py-2 my-2 flex items-center gap-4 text-sm text-[#747bff]"
                    :class="{'grad-btn text': $route.name == item.label}">
                    <i class="material-icons-round">{{item.icon}}</i>
                    <span>{{item.label}}</span>
                </router-link>
            </div>
        </div>
        <div class="card"></div>
    </div>
</template>

<style scoped>
.grad-btn {
    box-shadow: 0 0 4px #fe7a00, 0 0 8px #fcba00;
    @apply bg-gradient-to-r from-[#fe7a00] to-[#fcba00] text-[#111] rounded-full text-justify
}

.text {
    text-shadow: 0 0 4px #fff3, 0 0 8px #fff3;
}
</style>