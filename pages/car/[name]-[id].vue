<template>
  <div class="mx-auto container p-3" v-if="car">
    <DetailHero :car="car" />
    <DetailInfos :car="car"/>
    <DetailDescription :description="car.description" />
    <DetailContact />
  </div>
</template>

<script setup>
const route = useRoute();
const { cars } = useCars();

useHead({
  title: route.params.name,
});

//estract id and put it equal to the current car id
const id = parseInt(route.params.id);

const car = computed(() => {
    return cars.find((c) => c.id === id);
});

if(!car.value){
  throw createError({
    statusCode:404,
    message:`Car with ID of ${id} does not exist`
  })
}
</script>
