<script setup lang="ts">
import Drawer from './components/Drawer.vue';
import Navbar from './components/Navbar.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// order color #131d38
// search bar color #253252
</script>

<template>
  <div class="flex bg-[#0c1326] min-h-screen">
    <Drawer />
    <div class="flex-1">
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
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

.gradient {
  box-shadow: 0 0 4px #fe7a00, 0 0 8px #fcba00;
  @apply bg-gradient-to-r from-[#fe7a00] to-[#fcba00] text-justify
}
</style>
