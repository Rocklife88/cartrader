<template>
  <div class="flex mt-20 container max-w-md mx-auto align-items-center">
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
</script>
