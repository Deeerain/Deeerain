import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./routes"

const router = createRouter({
    routes: routes,
    history: createWebHashHistory()
})

export default router