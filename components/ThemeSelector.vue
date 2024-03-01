<template>
      <select
        v-model="colorMode.preference"
        class="border w-24   dark:bg-gray-900 dark:text-white p-2 round-sm bg-white text-slate-400 border-gray-300 border-1">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
</template>


<script setup>
const colorMode = useColorMode()
</script>


<style lang="postcss">
body {
  @apply min-h-screen bg-white dark:bg-gray-900 dark:text-gray-200;
  font-size: 12px;
}
</style>