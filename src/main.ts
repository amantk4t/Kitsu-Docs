import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// use pinia store in main.ts
import firebaseConfig from './firebase'
import { initializeApp } from "firebase/app";
import { pinia } from './stores'

initializeApp(firebaseConfig)

createApp(App).use(router).use(pinia).mount('#app')
