<template>
      <div class="mt-6 mb-2 ">
       <img :src="car.url">
      </div>
</template>

<script setup>
const props = defineProps({
      car:Object,
})
</script>