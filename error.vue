<template>
  <div
    class="opacity-80 bg width w-screen h-screen bg-no-repeat bg-[url('https://images.unsplash.com/photo-1517398747128-cd2271140a0b?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
  >
    <div
      class="container mx-auto flex items-center justify-center w-full h-full"
    >
      <div class="flex flex-col space-y- items-center">
        <div class="text-4xl md:text-8xl text-blue-400">
          {{ error.statusCode }}
        </div>
        <div class="text-blue-400 text-4xl md:text-8xl mb-8">
          {{ error.message }}
        </div>
        <button
          @click="goHome"
          class="bg-blue 200 px-8 py-3 text-white rounded-sm bg-sky-400"
        >
          Go Back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const goHome = () => {
  navigateTo("/");
};

const error = useError();

useHead({
  title: "404: Page not found",
});
</script>
