<template>
  <div class="shadow border round-sm w-2/3 mr-10 z-30 h-[190px]">
    <div class="p-5 flex justify-between items-center relative cursor-pointer border-b">
      <h3>Location</h3>
      <h3 @click="updateModal('location')" class="text-blue-400 capitalize">
        {{ route.params.city }}
      </h3>

      <!-- Location -->
      <div v-if="modal.location">
        <Dialogue :visible="modal.location" title="Location" @close-dialog="modal.location=!modal.location">
          <div class="border shadow  p-5 top-1 m-1 bg-white flex flex-col items-center">
            <input v-model="city" type="text" class="border  text-center rounded" />
            <button
              @click="onLocationChange()"
              class="bg-blue-400 w-full text-center mt-2 rounded text-white px-4 py-2"
            >
              Apply
            </button>
          </div>
        </Dialogue>
      </div>
      <!-- Location -->

      <!-- Make -->
      <div v-if="modal.make">
        <Dialogue :visible="modal.make" title="make"  @close-dialog="modal.make=!modal.make">
          <div class="flex flex-col w-full space-y-1  p-5 top-1 m-1 bg-white text-black">
            <p v-for="car in cars" :key="make" class="border p-2 rounded" @click="navigateTo(`/car/${car.make}/car`)">
              {{ car.make }}
            </p>
          </div>
        </Dialogue>
      </div>
      <!-- Make end -->
    </div>
    <div class="p-5 flex justify-between items-center relative cursor-pointer border-b ">
      <h3>Make</h3>
      <h3 @click="updateModal('make')" class="text-blue-400 capitalize">
        Toyota
      </h3>
    </div>
    <div class="p-5 flex justify-between items-center relative cursor-pointer">
      <h3>Price</h3>
      <h3 class="text-blue-400 capitalize ">12678</h3>
    </div>
  </div>
</template>

<script setup>

const city = ref("");
const { cars } = useCars();
const route = useRoute();
const carId= route.params.id


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
    throw new Error("Invalid city format");
  }
  updateModal("location");
  city.value = "";
};

const onMakeChange = () => {
  updateModal("make");
};

</script>
