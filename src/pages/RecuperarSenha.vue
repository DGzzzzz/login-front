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
            <div class="container">
                <h1>Oops</h1>
                <h2>Essa funcionalidade ainda não está pronta</h2>
                <router-link id="voltar" to="/"><Button color="secondary">Voltar</Button></router-link>
            </div>
        </div>
    </div>    
</template>

<style scoped>

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
  height: 100vh;
  width: 962px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 300px;
}
 
.container-logo {
    max-width: 500px;
    max-height: 420px;
    object-fit: contain;
}

h1, h2 {
    color: #1E9E6A;
}

</style>