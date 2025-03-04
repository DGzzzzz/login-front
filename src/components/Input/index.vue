<script setup lang="ts">

import { ref, watch } from "vue";

const props = defineProps<{
    type: string;
    id: string;
    placeholder: string;
    modelValue: string;
    error?: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

const isFocused = ref(false);

const hasValue = ref(!!props.modelValue);

watch(() => props.modelValue, (newValue) => {
  hasValue.value = !!newValue;
})
</script>

<template>
  <div class="input-wrapper">
    <label :for="id" class="floating-label" :class="{ active: isFocused || hasValue }">
      {{ placeholder }}
    </label>
    <input 
      :type="type" 
      :id="id" 
      class="base-input" 
      :class="{ 'input-error': error }"
      :value="modelValue" 
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
</template>

<style scoped>

.input-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 400px;
}

.base-input {
  width: 400px;
  padding: 16px;
  border-radius: 4px;
  font-size: 14px;
  background-color: #F7FAFC;
  border: #E8E8E8;
  box-sizing: border-box;
  margin-bottom: 12px;
  border: 1px solid black;
}

.input-error {
  border: 1px solid red;
}

.floating-label {
  position: absolute;
  left: 14px;
  top: 40%;
  transform: translateY(-50%);
  background-color: white;
  padding: 0 4px;
  font-size: 14px;
  color: #999;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
}

.floating-label.active {
  top: 2px;
  font-size: 12px;
}
</style>