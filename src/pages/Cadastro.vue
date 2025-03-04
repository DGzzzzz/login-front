<script setup lang="ts">
    import Button from '../components/Button/index.vue';
    import Input from '../components/Input/index.vue';

    import axios from "axios";
    import { ref, watch } from 'vue';

    const username = ref('');
    const password = ref('');
    const email = ref('');
    const emailMessage = ref('');

    const register = async () => {
        try {
            const response = await axios.post('http://localhost:8080/auth/register', {
                username: username.value,
                email: email.value,
                password: password.value
            });

            console.log('Usuário cadastrado com sucesso: ');
            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar: ', error);
            alert('Erro ao cadastrar usuário');
        }
    }

    watch(email, async (newEmail) => {
        if(newEmail.includes("@")) {
            try {
                const response = await axios.get(`http://localhost:8080/auth/check-email?email=${newEmail}`);
                emailMessage.value = response.data.message;
            } catch (error) {
                if (error.response && error.response.data.message) {
                    emailMessage.value = error.response.data.message;
                } else {
                    emailMessage.value = "Erro ao verificar E-mail";
                }
            }
        } else {
            emailMessage.value = "";
        }
    })
</script>

<template>
    <div class="container-general">
        <div class="container-left">
            <img src="../assets/imglogin.png" alt="ilustração menino olhando globo com lupa" class="container-logo" />
        </div>
        <div class="container-right">
            <div class="container-inputs">
                <h3>Bem-vindo</h3>
                <h1>Faça o seu cadastro</h1>

                <Input type="text" id="name" placeholder="Nome" v-model="username"></Input>
                
                <Input type="email" id="email" placeholder="E-mail" v-model="email"></Input>
                <p v-if="emailMessage" :class="{ error: emailMessage === 'E-mail já cadastrado' }">
                    {{ emailMessage }}
                </p>
                
                <Input type="password" id="senha" placeholder="Senha" v-model="password"></Input>                
            </div>
            <div class="container-btn">
                <Button color="primary" @click="register">Cadastrar</Button>
                <div class="container-cad">
                    <router-link id="voltar" to="/"><Button color="secondary">Já tem conta? faça login</Button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.error {
 color: red;
 font-size: 14px;
}

Button:hover {
 opacity: 0.8;
 transition: ease 0.3s;
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

h1, h3, #labelEmail, #labelSenha, #labelNome {
    align-self: flex-start;
    width: 100%;
    padding-left: 275px;
}

.container-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    gap: 18px;
}

#voltar {
    color: #1E9E6A;
}

h3 {
    margin-top: 100px;
}

</style>