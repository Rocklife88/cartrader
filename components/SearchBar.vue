<template>
  <div class="h-screen overflow-y-hidden bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1581439645268-ea7bbe6bd091?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
    <div class="w-full h-full flex justify-center items-center">
      <div class="text-center w-1/2">
        <h1 class="text-3xl md:text-8xl text-white font-serif mb-6">Find your drive</h1>
        <div class="md:w-full sm:w-72 h-full font-serif text-2xl rounded-full md:rounded-md bg-white flex justify-center shadow-2xl mx-auto items-center" :class="{ 'border-red-500': cityError }">
          <input v-model="city" type="text" class="p-3 w-full text-xl md:text-2xl  rounded-full md:rounded-md flex-grow border-none" :placeholder="!cityError ? 'Search by city': 'Oops...city not found! Type again and retry'">
          <button @click="handleSearch()" class="bg-sky-400 w-3/12 py-4 text-white rounded-full md:rounded-md h-full text-sm md:text-lg" type="submit">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const city = ref('')
  const cityError = ref('')

  const handleSearch = () => {
    if (!city.value) {
      return cityError.value = true
    }
    navigateTo(`/city/${city.value}/car`)
    console.log('search activate')
  }


</script>
