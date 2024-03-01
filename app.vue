<template>
      <Header class=""/>
  <div class="flex flex-col h-screen w-full mx-auto">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
const colorMode = useColorMode()
</script>


<style lang="postcss">
body {
  @apply min-h-screen bg-white dark:bg-gray-900 dark:text-gray-200;
}
</style>
