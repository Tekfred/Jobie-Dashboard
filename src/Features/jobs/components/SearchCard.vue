<script setup>
import { ref } from "vue";
const searchImg = ref("FILTER");
const searchImg2 = ref("FIND");
const mapName = ref("Around You");

const btnLoad = ref([
  {
    id: 1,
    name1: "Suggestions",
    name2: "Your Skill",
    name3: "Programmer",
    name4: "Software Engineer",
    name5: "Photographer",
    name6: "Digital Marketing",
  },
]);
</script>

<template>
  <!-- Search Bar -->
  <section class="bg-white rounded-2xl shadow-md p-3 mt-4 sticky top-0 z-10">
    <div class="flex gap-2 sm:gap-4 items-center">
      <!-- Location: hidden on mobile -->
      <span class="hidden sm:flex text-center items-center gap-1 shrink-0">
        <span class="material-symbols-outlined text-[18px]">location_on</span>
        <h1 class="text-sm font-medium whitespace-nowrap">{{ mapName }}</h1>
        <span
          class="material-symbols-outlined text-gray-600 cursor-pointer text-[18px]"
          >keyboard_arrow_down</span
        >
      </span>

      <!-- Search Input -->
      <input
        type="text"
        placeholder="Search by Title, Company or any job keyword..."
        class="flex-1 border-none text-xs sm:text-sm text-gray-600 min-w-0 outline-none"
      />

      <!-- Filter Button: icon-only on mobile -->
      <button
        class="rounded-3xl px-2 sm:px-4 py-2 flex items-center gap-1 sm:gap-2 bg-gray-200 cursor-pointer text-[#4b24a3] shrink-0 text-xs sm:text-sm"
      >
        <span class="material-symbols-outlined text-[18px]">tune</span>
        <span class="hidden sm:inline">{{ searchImg }}</span>
      </button>

      <!-- Find Button: icon-only on mobile -->
      <button
        class="text-white rounded-3xl px-2 sm:px-4 py-2 flex items-center gap-1 sm:gap-2 bg-[#40189d] cursor-pointer shrink-0 text-xs sm:text-sm"
      >
        <span class="material-symbols-outlined text-[18px]">search</span>
        <span class="hidden sm:inline">{{ searchImg2 }}</span>
      </button>
    </div>
  </section>

  <!-- Suggestion Pills: scrollable on small screens -->
  <section
    class="flex flex-nowrap sm:flex-wrap gap-2 space-x-8 mt-4 overflow-x-auto pb-2 scrollbar-hide"
    v-for="btnLoad in btnLoad"
    :key="btnLoad"
  >
    <span
      class="text-xs sm:text-sm text-gray-400 whitespace-nowrap self-center shrink-0"
    >
      {{ btnLoad.name1 }}
    </span>
    <button
      class="text-xs sm:text-sm text-[#4b24a3] font-semibold rounded-3xl px-5 py-3 flex gap-2 bg-[#e3d7ff] cursor-pointer whitespace-nowrap shrink-0"
    >
      {{ btnLoad.name2 }}
    </button>
    <button
      class="text-xs sm:text-sm font-semibold rounded-3xl px-5 py-3 flex gap-2 bg-[#40189d] cursor-pointer text-white whitespace-nowrap shrink-0"
    >
      {{ btnLoad.name3 }}
    </button>
    <button
      class="text-xs sm:text-sm text-[#4b24a3] font-semibold rounded-3xl px-5 py-3 flex gap-2 bg-[#e3d7ff] cursor-pointer whitespace-nowrap shrink-0"
    >
      {{ btnLoad.name4 }}
    </button>
    <button
      class="text-xs sm:text-sm text-[#4b24a3] font-semibold rounded-3xl px-5 py-3 flex gap-2 bg-[#e3d7ff] cursor-pointer whitespace-nowrap shrink-0"
    >
      {{ btnLoad.name5 }}
    </button>
    <button
      class="text-xs sm:text-sm text-[#4b24a3] font-semibold rounded-3xl px-5 py-3 flex gap-2 bg-[#e3d7ff] cursor-pointer whitespace-nowrap shrink-0"
    >
      {{ btnLoad.name6 }}
    </button>
  </section>
</template>
