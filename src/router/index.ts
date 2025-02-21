import { createRouter, createWebHistory } from 'vue-router';

import Login from '../pages/Login.vue';
import Cadastro from '../pages/Cadastro.vue';
import RecuperarSenha from '../pages/RecuperarSenha.vue';
import Dashboard from '../pages/Dashboard.vue';

const routes = [
    { path: '/', component: Login },
    { path: '/cadastro', component: Cadastro },
    { path: '/recuperar-senha', component: RecuperarSenha },
    { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token");
    if (to.meta.requiresAuth && !token) {
        next("/");
    } else {
        next();
    }
})

export default router;