<script setup>
import { ref } from "vue";
// const showApplications = ref(true);
const showInterviews = ref(true);
const showRejected = ref(false);


</script>

<template>
  <section
    class="flex flex-wrap items-center justify-between gap-y-3 gap-x-2 pt-9 "
  >
    <div class="text-xs sm:text-sm">
      <h1 class="font-semibold text-sm sm:text-base">
        Showing 246 Jobs Results
      </h1>
      <p class="text-gray-400 text-xs">Based your preference</p>
    </div>
    <div class="flex flex-wrap items-center gap-2 sm:gap-4">
      <div class="flex items-center gap-1.5">
        <span class="material-symbols-outlined text-[#7252D3]">progress_activity</span>
        <span
          class="hidden sm:inline text-xs sm:text-sm font-medium text-gray-500"
          >Fulltime</span
        >
      </div>

      <div class="flex items-center gap-1.5">

        <span class="material-symbols-outlined text-[#4b24a3] ">check_circle</span>
        <span
          class="hidden sm:inline text-xs sm:text-sm font-medium text-gray-500"
          >Freelance</span
        >
        <button>
        </button>
      </div>

      <div class="flex items-center gap-1.5">
        <span
          class="hidden sm:inline text-xs sm:text-sm font-medium text-gray-500"
          >Details</span
        >
        <button
          @click="showInterviews = !showInterviews"
          :class="showInterviews ? 'bg-[#e5cffd]' : 'bg-gray-200'"
          class="w-8 h-4 sm:w-11 sm:h-3 rounded-full relative transition-colors"
        >
          <div
            :class="
              showInterviews
                ? 'translate-x-4 sm:translate-x-5'
                : 'translate-x-1'
            "
            class="w-2.5 h-2.5 sm:w-4.5 sm:h-4.5 bg-[#7252D3] rounded-full transition-transform -mt-0.5 ml-px"
          ></div>
        </button>
      </div>

      <div class="flex items-center gap-1.5">
        <span
          class="hidden sm:inline text-xs sm:text-sm font-medium text-gray-500"
          >Salary</span
        >
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

      <button
        class="flex items-center gap-1 px-2 sm:px-4 py-1.5 sm:py-2 border border-[#7252D3] rounded-full text-xs sm:text-sm font-medium"
      >
        <span class="material-symbols-outlined text-[16px] text-[#7252D3]">sort</span>
        <span class="hidden sm:inline ">Newest</span>
        <span
          class="material-symbols-outlined text-[#7252D3] cursor-pointer text-[16px]"
          >keyboard_arrow_down</span
        >
      </button>

      <div class="flex space-x-2">
        <span
          class="material-symbols-outlined h-10 w-10 rounded-full flex items-center justify-center border border-[#7252D3]"
          >format_list_bulleted
        </span>
        <span
          class="material-symbols-outlined h-10 w-10 rounded-full flex items-center justify-center border bg-[#4b24a3] text-white"
          >grid_view
        </span>
      </div>
    </div>
  </section>
</template>
