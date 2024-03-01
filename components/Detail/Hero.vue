<template>
      <div class="mt-6 mb-2 ">
       <img class="w-full md:w-2/5" :src="car.url">
      </div>
</template>

<script setup>
const props = defineProps({
      car:Object,
})
</script>