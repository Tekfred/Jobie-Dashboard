<script setup>
import { ref } from "vue";

// const showInterviews = ref(true);
const showRejected = ref(false);

const btnLoad = ref([
  {
    id: 1,
    name2: "Your Skill",
    name3: "Programmer",
  },
]);
</script>

<template>
  <main class="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-3 gap-6">
    <h1 class="font-semibold">Edit Profile</h1>

    <div class="flex items-center gap-1.5">
      <span
        class="hidden sm:inline text-xs sm:text-sm font-medium text-gray-500"
        >Available for hire?
      </span>
      <button
        @click="showRejected = !showRejected"
        :class="showRejected ? 'bg-[#e5cffd]' : 'bg-gray-200'"
        class="w-8 h-4 sm:w-11 sm:h-3 rounded-full relative transition-colors"
      >
        <div
          :class="
            showRejected ? 'translate-x-4 sm:translate-x-5' : 'translate-x-1'
          "
          class="w-2.5 h-2.5 sm:w-4.5 sm:h-4.5 bg-[#7252D3] rounded-full transition-transform -mt-0.5 ml-px"
        ></div>
      </button>
    </div>

    <div v-for="btnLoad in btnLoad" :key="btnLoad.id" class="flex">
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
    </div>
  </main>
</template>
