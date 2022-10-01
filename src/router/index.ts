import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/Dashboard.vue'


const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: "/menu",
        name: "Menu",
        component: () => import("../views/Menu.vue")
    },
    {
        path: "/orders",
        name: "Orders",
        component: () => import("../views/Orders.vue")
    },
    {
        path: "/customer",
        name: "Customer",
        component: () => import("../views/Customer.vue")
    },
    {
        path: "/review",
        name: "Review",
        component: () => import("../views/Review.vue")
    },
    {
        path: "/invoices",
        name: "Invoices",
        component: () => import("../views/Invoices.vue")
    },
    {
        path: "/setting",
        name: "Setting",
        component: () => import("../views/Setting.vue")
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("../views/Login.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router

