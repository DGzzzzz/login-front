<script setup lang="ts">
defineProps<{
    type: string;
    id: string;
    placeholder: string;
}>();
</script>

<template>
    <input :type="type" :id="id" :placeholder="placeholder" class="base-input"></input>
</template>

<style scoped>
.base-input {
  width: 400px;
  padding: 16px;
  border-radius: 4px;
  font-size: 14px;
  background-color: #F7FAFC;
  border: #E8E8E8;
  box-sizing: border-box;
  margin: 12px;
}
</style>