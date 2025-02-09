import { createRouter, createWebHistory } from 'vue-router';

import Login from '../pages/Login.vue';
import Cadastro from '../pages/Cadastro.vue';
import RecuperarSenha from '../pages/RecuperarSenha.vue';

const routes = [
    { path: '/', component: Login },
    { path: '/cadastro', component: Cadastro },
    { path: '/recuperar-senha', component: RecuperarSenha }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;