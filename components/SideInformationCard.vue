<template>
  <div class="shadow border w-80 mr-10 z-30 h-[190px]">
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Location</h3>
      <h3 @click="updateModal('location')" class="text-blue-400 capitalize">
        {{ route.params.city }}
      </h3>

      <!-- Modal -->
      <div
        v-if="modal.location"
        class="absolute border shadow left-56 p-5 top-1 m-1 bg-white"
      >
        <input v-model="city" type="text" class="border p-1 rounded" />
        <button
          @click="onLocationChange()"
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
        >
          Apply
        </button>
      </div>
    </div>
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 class="text-blue-400 capitalize">Toyota</h3>
    </div>
    <div class="p-5 flex justify-between relative cursor-pointer">
      <h3>Price</h3>
      <h3 class="text-blue-400 capitalize">12678</h3>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const city = ref("");

//creo un oggetto modale con tre chiavi che si apre a seconda della verifica booleana e una funzione updatemodal che chiede
// una key(make, location price)

const modal = ref({
  make: false,
  location: false,
  price: false,
});

const updateModal = (key) => {
  modal.value[key] = !modal.value[key];
};

const onLocationChange = () => {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: "Invalid city format",
    });
  }
  {
    updateModal("location");
    navigateTo(`/city/${city.value}/car/${route.params.make}`);
    city.value = "";
  }
};
</script>
