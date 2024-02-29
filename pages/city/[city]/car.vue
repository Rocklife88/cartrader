<template>
  <div
    class="md:flex space-y-6 mt-20 container w-full mx-auto align-items-center justify-center p-4"
  >
    <NuxtErrorBoundary>
      <SideInformationCard />
      <NuxtPage />
      <template #error="{ error }">
        <div class="text-center mx-auto flex flex-col">
          <h1 class="text-4xl">Sorry...Somethinh went wrong</h1>
          <code>{{ error }}</code>
          <div class="mt-4">
          <button
            class="bg-red-500 px-10 py-3 rounded-md text-white"
            @click="error.value = null"
          >
            Retry
          </button>
        </div>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup>
const route = useRoute();
useHead({
  title: `${route.params.make ? toLowerCase() : "Cars"}
   in ${route.params.city.toLowerCase()}`,
});

definePageMeta({
  layout: "default",
});
</script>
