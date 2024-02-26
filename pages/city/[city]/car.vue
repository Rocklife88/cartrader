<template>
  <div class=" md:flex space-y-6 mt-20 container w-full mx-auto align-items-center justify-center p-4">
    <SideInformationCard />
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute();
useHead({
  title: `${route.params.make ? toLowerCase() : "Cars"}
   in ${route.params.city.toLowerCase()}`,
});

definePageMeta({
  layout:"default"
})
</script>
