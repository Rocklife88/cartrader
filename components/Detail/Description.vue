<template>
      <div class="mt-5 mb-8">
        <p class="text-md">{{ description }}</p>
      </div>
</template>

<script setup>
const props = defineProps({
  description:Object
})

</script>