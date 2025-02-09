<script setup lang="ts">
    import Button from '../components/Button/index.vue';
    import Input from '../components/Input/index.vue';
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
                <label for="name">Nome</label>
                <Input type="text" id="name" placeholder="Fulano de tal"></Input>
                <label for="email">E-mail</label>
                <Input type="email" id="email" placeholder="exemplo@gmail.com"></Input>
                <label for="senha">Senha</label>
                <Input type="password" id="senha" placeholder="@Abc123"></Input>                
            </div>
            <div class="container-btn">
                <Button color="primary">Cadastrar</Button>
                <div class="container-cad">
                    <router-link id="voltar" to="/"><Button color="secondary">Já tem conta? faça login</Button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

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