<template>
    <transition name="dialog">
      <div v-if="visible" class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
  
        <div class="relative bg-white rounded-lg p-6 w-96">
          <div class="absolute top-0 right-0 p-2">
            <button @click="closeDialog" class="text-gray-500 hover:text-gray-700">
              <svg class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <h3 class="text-lg font-semibold">{{ title }}</h3>
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const emit = defineEmits(['closeDialog']);
  const props = defineProps({
    visible: Boolean,
    title: String,
  });
  
  function closeDialog() {
    emit('closeDialog');
  }
  </script>
  
  <style scoped>
  .dialog-enter-active, .dialog-leave-active {
    transition: opacity 0.3s;
  }
  
  .dialog-enter-from, .dialog-leave-to {
    opacity: 0;
  }
  </style>
  