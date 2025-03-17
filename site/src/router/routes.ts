import type { RouteRecordRaw } from "vue-router"

const routes = <Array<RouteRecordRaw>>[
    { path: '/', component: () => import("../pages/HomePage.vue"), name: 'home'},
    { path: '/projects/', component: () => import("../pages/ProjectsPage.vue"), name: 'projects', meta: { text: 'Проекты'} },
    { path: '/about/', component: () => import("../pages/AboutPage.vue"), name: 'about', meta: { text: 'Обо мне' } },
]

export default routes