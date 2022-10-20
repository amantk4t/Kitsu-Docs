<script setup>
import { onMounted, ref } from 'vue';
import Anime from '../components/Anime.vue';
import Header from '../components/Header.vue';
import Loader from '../components/Loader.vue';
const animeList = ref([]);
const loading = ref(false);
const fetchAnime = async (searchQuery, type) => {
    loading.value = true;
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${searchQuery}&type=${type}&limit=100`);
    const data = await response.json();
    loading.value = false;
    animeList.value = data.data;
    localStorage.setItem('animeList', JSON.stringify(data.data));
    console.log(animeList.value);
}
onMounted(() => {
    const animeListFromLocalStorage = localStorage.getItem('animeList');
    if (animeListFromLocalStorage) {
        animeList.value = JSON.parse(animeListFromLocalStorage);
    }
})
</script>

<template>
    <Header @search="fetchAnime" />
    <div class="flex gap-8 flex-wrap w-[95%] justify-center  min-h-screen">
        <Anime :anime="anime" v-for="anime in animeList" :key="anime.mal_id" v-if="!loading" />
        <!-- simple loading css animation -->
        <img class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/assets/infinity-loader.svg"
            v-if="loading" />
    </div>
</template>

<style scoped>

</style>