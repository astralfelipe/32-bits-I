import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio')

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        
        {
            path: '/busqueda',
            name: 'busqueda',
            component: () => import(/* webpackChunkName: "busqueda" */ "../src/components/Search.vue")
        },
        {
            path: '*',
            name: 'notFound',
            component: () => import(/* webpackChunkName: "notfound" */ "../src/components/NotFound.vue")
        },
    ]
})