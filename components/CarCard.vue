<template>
  <div class="flex items-center justify-center h-full">
    <div class="shadow border overflow-hidden cursor-pointer w-full md:w-[80%] lg:w-[60%]" @click="navigateTo(`/car/${car.name}-${car.id}`);">
      <div class="flex items-center space-x-2 flex-col md:flex-row">
        <img
          class="object-cover h-full md:h-full w-lg md:w-1/2 p-2"
          :src="car.url"
          alt="Unsplash Image"
        /> 
        <div class="p-4 flex flex-col justify-between md:w-1/2">
          <div>
            <h1 class="text-lg md:text-2xl text-gray-800 dark:text-white"> {{ car.name }}</h1>
            <p class="text-gray-600 text-sm mt-2 dark:text-gray-400">{{ car.description }}</p>
          </div>
          <p class="text-gray-800 text-lg md:text-2xl mt-4 dark:text-gray-200"> {{ car.price }}$</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


const props = defineProps({
  car:Object,
  
});



</script>

