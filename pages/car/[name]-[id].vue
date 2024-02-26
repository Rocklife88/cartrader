<template>
  <div class="mx-auto container p-3">
    <DetailHero />
    <DetailInfos />
    <DetailDescription />
    <DetailContact />
  </div>
</template>

<script setup>
const route=useRoute()

useHead({
  title:(route.params.name)

})



</script>
