<script setup lang="ts">
    import Button from '../components/Button/index.vue';
    import Input from '../components/Input/index.vue';

    import { ref } from 'vue';
    import axios from 'axios';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const errorEmail = ref(false);
    const errorPassword = ref(false);

    const login = async () => {
        try {
            const API_URL = import.meta.env.VITE_API_URL;
            const response = await axios.post(`${API_URL}/auth/register`, {
                email: email.value,
                password: password.value,
            })

            const token = response.data.token; // Pegando o token da resposta
            localStorage.setItem('token', token) // Armazena o token no localStorage

            router.push('/dashboard');

            errorEmail.value = false;
            errorPassword.value = false;
            errorMessage.value = "";
        } catch (error) {
            errorMessage.value = "E-mail ou senha incorretos";

            errorEmail.value = true;
            errorPassword.value = true;
        }
    }
</script>

<template>
    <div class="container-general">
        <div class="container-left">
            <img src="../assets/imglogin.png" alt="ilustração menino olhando globo com lupa" class="container-logo" />
        </div>
        <div class="container-right">
            <div class="container-inputs">
                <h3>Bem-vindo de volta</h3>
                <h1>Faça login na sua conta</h1>
                
                <Input type="email" id="email" placeholder="E-mail" v-model="email" :error="errorEmail"></Input>
                
                <Input type="password" id="senha" placeholder="Senha" v-model="password" :error="errorPassword"></Input>

                <div v-if="errorMessage" class="error">{{ errorMessage }}</div>

                <div class="container-lembrar">
                    <div class="container-checkbox">
                        <input type="checkbox" id="lembrar">
                        <label for="lembrar">Lembrar de mim</label>
                    </div>
                    <router-link to="/recuperar-senha" id="esqueceu">Esqueceu sua senha?</router-link>
                </div>
            </div>
            <div class="container-btn">
                
                <Button color="primary" @click="login">Entrar na conta</Button>

                <Button color="secondary">
                    <img src="../assets/google.png" alt="logo do google"  class="google-logo" />
                    Faça login com Google
                </Button>
                <div class="container-cad">
                    <label for="cadastre">Não tem uma conta?</label> 
                    <router-link id="cadastre" to="/cadastro">Cadastre-se</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.error {
 color: red;
}

Button:hover {
 opacity: 0.8;
 transition: ease 0.3s;
}

.google-logo {
  width: 24px;
  height: 24px;
  padding-right: 12px;
  vertical-align: middle;
}

.container-general {
  display: flex;
}

.container-left {
  background-color: #F3FFF2;
  width: 958px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.container-right {
  gap: 12px;
  height: 100vh;
  width: 962px;
}

.container-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1, h3, #labelEmail, #labelSenha {
    align-self: flex-start;
    width: 100%;
    padding-left: 275px;
}

.container-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    gap: 24px;
}
 
.container-logo {
    max-width: 500px;
    max-height: 420px;
    object-fit: contain;
}

.container-lembrar {
    display: flex;
    gap: 114px;
    margin: 12px;
    margin-bottom: 24px; 
}

#esqueceu,
#cadastre {
    color: #1E9E6A;
    cursor: pointer;
}

h3 {
    margin-top: 100px;
}

.container-cad {
    display: flex;
    gap: 12px;
    margin-top: 24px;
}

</style>