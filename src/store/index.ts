import { createPinia } from 'pinia'
import { defineStore } from 'pinia'

export const pinia = createPinia()

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        user: null,
    }),
    getters: {
        isLoggedIn(state) {
            return state.user !== null
        }
    },
    actions: {
        login(user) {
            this.user = user
        }
    }
})
