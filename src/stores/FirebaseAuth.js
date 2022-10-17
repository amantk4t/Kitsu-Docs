import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'


export const useAuthStore = defineStore({
    id: 'firebaseAuth',
    state: () => ({
        user: null,
        error: null,
        pending: false,
        hasError: false,
        isLoggedIn: false,
    }),
    actions: {
        async register(email, password) {
            this.pending = true
            this.error = null
            this.hasError = false
            try {
                const res = await createUserWithEmailAndPassword(getAuth(), email, password)
                console.log(res)
                this.user = res.user
            } catch (err) {
                console.log(err)
                this.error = err.message
                this.hasError = true
            }
            this.pending = false
        },
        async login(email, password) {
            this.pending = true
            this.error = null
            this.hasError = false
            try {
                const res = await signInWithEmailAndPassword(getAuth(), email, password)
                console.log(res)
                this.user = res.user
            } catch (err) {
                this.hasError = true
                switch (err.code) {
                    case 'auth/user-not-found':
                        this.error = 'User not found'
                        break
                    case 'auth/wrong-password':
                        this.error = 'Wrong password, please try again'
                        break
                    case 'auth/invalid-email':
                        this.error = 'Invalid email'
                        break
                    case 'auth/email-already-in-use':
                        this.error = "Email is already in use"
                        break
                    case 'auth/weak-password':
                        this.error = "Password should be at least 6 characters"
                        break
                    case 'auth/internal-error':
                        this.error = "Internal error"
                        break
                    default:
                        this.error = err.message
                }
                console.log(this.error)
            }
            this.pending = false
            // save user state to local storage
            localStorage.setItem('user', JSON.stringify(this.user))
        },
        async logout() {
            this.pending = true
            this.error = null
            this.hasError = false
            try {
                console.log("Logging out?")
                const res = await signOut(getAuth())
                console.log("Logged out")
                console.log(res)
                this.user = null
            } catch (err) {
                this.error = err.message
                this.hasError = true
            }
            // remove user state from local storage
            localStorage.removeItem('user')
            this.pending = false
        },
        forgotPassword(email) {
            this.pending = true
            this.error = null
            this.hasError = false
            try {
                console.log("Forgot password?")
                // const res = await signOut(getAuth())
                // console.log("Logged out")
                // console.log(res)
                // this.user = null
            } catch (err) {
                this.error = err.message
                this.hasError = true
            }
            // remove user state from local storage
            localStorage.removeItem('user')
            this.pending = false
        }
    },
    getters: {
        isPending() {
            return this.pending
        },
        getUser() {
            return this.user
        },
        getErrorMsg() {
            return this.error
        },
        getHasError() {
            return this.hasError
        }
    }
})
