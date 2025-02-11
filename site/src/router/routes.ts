import type { RouteRecordRaw } from "vue-router"

const routes = <Array<RouteRecordRaw>>[
    {path: '/', component: () => import("../pages/HomePage.vue"), name: 'home'},
]

export default routes