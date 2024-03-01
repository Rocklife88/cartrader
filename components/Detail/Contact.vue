<template>
  <div class="mt-8 mb-10">
    <div class="text-3xl mb-2 md:mb-4 font-regular text-slate-800 dark:text-slate-00">
      Fill the form with your Information
    </div>
    <div class="flex-col  md:w-3/5 justify-between space-y-4">
      <div>
        <input type="text" class="border p-3 w-full round-md" placeholder="name" />
      </div>
      <div>
        <input type="text" class="border p-3 w-full round-md" placeholder="Email" />
      </div>
      <div>
        <input type="text" class="border p-3 w-full round-md" placeholder="Phone" />
      </div>
    </div>
    <div class="mt-4">
      <textarea class="w-full border p-3 round-md  md:w-3/5" placeholder="Message"></textarea>
    </div>
    <button
      class="text-white text-md font-medium bg-blue-900 px-16 py-4 mt-4 rounded-sm hover:bg-blue-200"
    >
      Submit
    </button>
  </div>
</template>
