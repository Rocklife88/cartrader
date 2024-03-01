<template>
  <div class="mt-2 container-fluid mx-auto">
    <h1 class="mt-10  text-4xl">{{ car.name }}</h1>
    <div
      class="text-slate-400 flex text-large mt-3 border-b padding-b-5 justify-between"
    >
      <div class="flex mb-8">
        <p class="mr-2"> {{ car.seats }} seats</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ car.miles }}</p>
      </div>
    </div>
    <div class="mr-10 mt-5 border-b pb-5">
      <div class="flex text-lg mt-2">
        <p class="rounded text-slate-500 mr-3">Features</p>
        <p>{{ car.features }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props= defineProps({
  car:Object,
})
</script>
