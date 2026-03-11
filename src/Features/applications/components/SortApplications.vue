<script setup>
import { ref } from "vue";

const btnAppLoad = ref([
  {
    id: 1,
    name2: "All",
    name3: "Pending",
    name4: "On-Hold",
    name5: "Candidate",
  },
]);
</script>

<template>
  <main class="flex justify-between items-center p-4">
    <section
      class="flex flex-nowrap sm:flex-wrap gap-2 space-x-3 mt-4 overflow-x-auto pb-2 scrollbar-hide"
      v-for="btnAppLoad in btnAppLoad"
      :key="btnAppLoad"
    >
      <div class="text-xs sm:text-sm">
        <h1 class="font-semibold text-sm sm:text-base">
          Showing 246 Jobs Results
        </h1>
        <p class="text-gray-400 text-xs">Based your preference</p>
      </div>

      
        <button
        class="text-xs sm:text-sm font-semibold rounded-3xl px-5 py-3 flex gap-2 bg-[#40189d] cursor-pointer text-white whitespace-nowrap shrink-0"
      >
        {{ btnAppLoad.name2 }}
      </button>
      <button
        class="text-xs sm:text-sm text-[#4b24a3] font-semibold rounded-3xl px-5 py-3 flex gap-2 bg-[#e3d7ff] cursor-pointer whitespace-nowrap shrink-0"
      >
        {{ btnAppLoad.name3 }}
      </button>
      <button
        class="text-xs sm:text-sm text-[#4b24a3] font-semibold rounded-3xl px-5 py-3 flex gap-2 bg-[#e3d7ff] cursor-pointer whitespace-nowrap shrink-0"
      >
        {{ btnAppLoad.name4 }}
      </button>
      <button
        class="text-xs sm:text-sm text-[#4b24a3] font-semibold rounded-3xl px-5 py-3 flex gap-2 bg-[#e3d7ff] cursor-pointer whitespace-nowrap shrink-0"
      >
        {{ btnAppLoad.name5 }}
      </button>

    </section>

    <button
        class="flex items-center gap-1 px-2 sm:px-4 py-1.5 sm:py-2 border border-[#7252D3] rounded-full text-xs sm:text-sm font-medium"
      >
        <span class="material-symbols-outlined text-[16px] text-[#7252D3]">sort</span>
        <span class="hidden sm:inline  text-[#959595]">Newest</span>
        <span
          class="material-symbols-outlined text-[#7252D3] cursor-pointer text-[16px]"
          >keyboard_arrow_down</span
        >
      </button>


      
     
  </main>
</template>
