// create google firebase login 

import { defineStore } from 'pinia'

import { auth } from 'firebase'

export const useLoginStore = defineStore({
    id: 'login',
    state: () => ({
        user: null,
    }),

    getters: {
        isLoggedIn(state) {
            return state.user !== null
        }
    },

    actions: {
        async login(email: String, password: String) {
            await auth.signInWithEmailAndPassword(email, password)
        }
    }
})
