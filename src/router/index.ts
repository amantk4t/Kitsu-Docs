import { createRouter, createWebHashHistory } from "vue-router";
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
        component: import(/*Lazy load importing Menu component*/"../views/Menu.vue") 
    },
    { 
        path: "/orders",
        name: "Orders", 
        component: import(/*Lazy load importing Orders component*/"../views/Orders.vue") 
    },
    { 
        path: "/customer",
        name: "Customer", 
        component: import(/*Lazy load importing Customer component*/"../views/Customer.vue") 
    },
    { 
        path: "/review",
        name: "Review", 
        component: import(/*Lazy load importing Review component*/"../views/Review.vue") 
    },
    { 
        path: "/invoices",
        name: "Invoices", 
        component: import(/*Lazy load importing Invoices component*/"../views/Invoices.vue") 
    },
    { 
        path: "/setting",
        name: "Setting", 
        component: import(/*Lazy load importing Setting component*/"../views/Setting.vue") 
    },
]

const router = createRouter({
    history: createWebHashHistory(), 
    routes
})


export default router

