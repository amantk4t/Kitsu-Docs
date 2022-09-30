<script setup lang="ts">
import Drawer from './components/Drawer.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// order color #131d38
// search bar color #253252
</script>

<template>
  <div class="flex bg-[#0c1326]">
    <Drawer />
    <router-view class="flex-1 p-4"></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
