<template>
      <div class="mt-6 mb-2">
        <img class="w-full md:w-2/6" :src="car.url" alt="Car Image" />
      </div>
    </template>
    
    <script setup>
    const { defineProps } = 'vue';
    
    const props = defineProps({
      car: Object,
    });
    </script>
    