import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/Dashboard.vue'


const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: "/orders",
        name: "Orders",
        component: () => import("../views/Orders.vue"),
        requireAuth: true
    },
    {
        path: "/customer",
        name: "Customer",
        component: () => import("../views/Customer.vue"),
        requireAuth: true
    },
    {
        path: "/review",
        name: "Review",
        component: () => import("../views/Review.vue"),
        requireAuth: true
    },
    {
        path: "/setting",
        name: "Setting",
        component: () => import("../views/Setting.vue"),
        requireAuth: true
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("../views/Login.vue")
    },
    {
        path: '/create_account',
        name: 'Register',
        component: () => import("../views/Register.vue")
    },
    {
        path: '/forgot_password',
        name: 'ForgotPassword',
        component: () => import("../views/ForgotPassword.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// create a route guard using the isLoggedIn state
router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/create_account'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
});



export default router

