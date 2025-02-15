<template>
    <div class="dashboard">
      <h1>Bem-vindo!</h1>
      <p>Seu login foi bem-sucedido.</p>
      <button @click="logout">Sair</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  // Função para remover o token e voltar à tela de login
  const logout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  </script>
  
  <style scoped>
  .dashboard {
    text-align: center;
    margin-top: 100px;
  }
  button {
    background-color: #1E9E6A;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  