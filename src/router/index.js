import { createRouter, createWebHashHistory } from 'vue-router'
import Content from "../components/Content.vue";
const routes = [
    {
        path: '/',
        component: Content,
    },
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})