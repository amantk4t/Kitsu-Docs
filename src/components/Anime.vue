<script setup>
const props = defineProps(['anime'])
</script>

<template>
    <div class="max-w-[300px] h-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-0 m-0"
        :style="'background-image: '+anime.images.jpg.image_url+';', 'background-size: cover'">
        <div>
            <h5 class="px-3 py-2 mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{anime.title}}</h5>
        </div>
        <div class="overflow-clip bg-indigo-900 flex justify-center">
            <img class="rounded-lg h-36" :src="anime.images.jpg.large_image_url" :alt="anime.title + ' Poster'">
        </div>
        <div class="p-5">
            <div class="h-fit max-h-44 overflow-y-auto rounded-lg" v-if="anime.synopsis != null">
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{anime.synopsis}}</p>
            </div>
            <a :href="anime.url"
                class="mt-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </a>
        </div>
    </div>

</template>

<style scoped>
div.card {
    transition: .4s;
}

div.card:hover h2 {
    color: rgba(5, 226, 71, 0.856);
}

div.card:hover {
    scale: 1.1;
}
</style>