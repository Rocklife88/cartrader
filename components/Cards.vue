<template>
<CarCard v-for="car in cars"/>
</template>

<script setup>
const {cars} = useCars()

</script>