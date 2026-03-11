<script setup>
import { ref } from "vue";

const detailJobs = ref([
  {
    id: 1,
    companyName: "Maximoz Team",
    title: "Database Programmer",
    prices: "$14,000 - $25,000",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    button: "REMOTE",
    location: "London, England",
    iconBg: "bg-blue-600",
  },
  {
    id: 2,
    companyName: "Klean n Clin Studios",
    title: "Senior Programmer",
    prices: "$14,000 - $25,000",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    button: "PART TIME",
    location: "Manchester, England",
    iconBg: "bg-orange-500",
  },
  {
    id: 3,
    companyName: "Maximoz Team",
    title: "Intern UX Designer",
    prices: "$14,000 - $25,000",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    button: "FULLTIME",
    location: "London, England",
    iconBg: "bg-purple-500",
  },

  {
    id: 1,
    companyName: "Maximoz Team",
    title: "Database Programmer",
    prices: "$14,000 - $25,000",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    button: "REMOTE",
    location: "London, England",
    iconBg: "bg-blue-600",
  },
  {
    id: 2,
    companyName: "Klean n Clin Studios",
    title: "Senior Programmer",
    prices: "$14,000 - $25,000",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    button: "PART TIME",
    location: "Manchester, England",
    iconBg: "bg-orange-500",
  },
  {
    id: 3,
    companyName: "Maximoz Team",
    title: "Intern UX Designer",
    prices: "$14,000 - $25,000",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    button: "FULLTIME",
    location: "London, England",
    iconBg: "bg-purple-500",
  },
  {
    id: 1,
    companyName: "Maximoz Team",
    title: "Database Programmer",
    prices: "$14,000 - $25,000",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    button: "REMOTE",
    location: "London, England",
    iconBg: "bg-blue-600",
  },
  {
    id: 2,
    companyName: "Klean n Clin Studios",
    title: "Senior Programmer",
    prices: "$14,000 - $25,000",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    button: "PART TIME",
    location: "Manchester, England",
    iconBg: "bg-orange-500",
  },
  {
    id: 3,
    companyName: "Maximoz Team",
    title: "Intern UX Designer",
    prices: "$14,000 - $25,000",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    button: "FULLTIME",
    location: "London, England",
    iconBg: "bg-purple-500",
  },
  {
    id: 1,
    companyName: "Maximoz Team",
    title: "Database Programmer",
    prices: "$14,000 - $25,000",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    button: "REMOTE",
    location: "London, England",
    iconBg: "bg-blue-600",
  },
  {
    id: 2,
    companyName: "Klean n Clin Studios",
    title: "Senior Programmer",
    prices: "$14,000 - $25,000",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    button: "PART TIME",
    location: "Manchester, England",
    iconBg: "bg-orange-500",
  },
  {
    id: 3,
    companyName: "Maximoz Team",
    title: "Intern UX Designer",
    prices: "$14,000 - $25,000",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    button: "FULLTIME",
    location: "London, England",
    iconBg: "bg-purple-500",
  },
  {
    id: 1,
    companyName: "Maximoz Team",
    title: "Database Programmer",
    prices: "$14,000 - $25,000",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    button: "REMOTE",
    location: "London, England",
    iconBg: "bg-blue-600",
  },
  {
    id: 2,
    companyName: "Klean n Clin Studios",
    title: "Senior Programmer",
    prices: "$14,000 - $25,000",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    button: "PART TIME",
    location: "Manchester, England",
    iconBg: "bg-orange-500",
  },
  {
    id: 3,
    companyName: "Maximoz Team",
    title: "Intern UX Designer",
    prices: "$14,000 - $25,000",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    button: "FULLTIME",
    location: "London, England",
    iconBg: "bg-purple-500",
  },
]);

const navigationFooter = ref([
  {
    id: 1,
    paragraph: "Showing 10 from 160 data",
    backBtn: "Previous",
    currentPage: 1,
    nextPage: 2,
    nextPage1: 3,
    nextPage2: 4,
    nextBtn: "Next",


  }
])
</script>

<template>
  <main class="p-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 -mx-7">
      <div
        v-for="Jobs in detailJobs"
        :key="Jobs.id"
        class="bg-white rounded-2xl shadow-sm py-5 px-3 flex flex-col text-start justify-between hover:shadow-md transition-shadow"
      >
        <!-- Top Row: Company + Icon -->
        <div class="flex items-start justify-between gap-2 mb-3">
          <div>
            <p class="text-xs font-normal text-gray-400 mb-1">
              {{ Jobs.companyName }}
            </p>
            <p class="text-base font-bold text-gray-800">{{ Jobs.title }}</p>
          </div>

          <!-- Company Icon -->
          <div
            :class="[
              Jobs.iconBg,
              'w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ml-3',
            ]"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
              />
            </svg>
          </div>
        </div>

        <!-- Salary -->
        <p class="text-sm font-semibold text-[#40189d] mb-3">
          {{ Jobs.prices }}
        </p>

        <!-- Description -->
        <p class="text-xs leading-relaxed mb-2 mt-5 line-clamp-3">
          {{ Jobs.message }}
        </p>

        <!-- Bottom Row: Button + Location -->
        <div class="flex items-center justify-between mt-7">
          <button
            class="text-xs font-semibold text-[#40189d] bg-[#e9e0ff] hover:bg-[#d8c9ff] px-4 py-2.5 rounded-full cursor-pointer"
          >
            {{ Jobs.button }}
          </button>
          <span class="text-xs text-[#313141] font-bold">{{
            Jobs.location
          }}</span>
        </div>
      </div>
    </div>
  </main>

  <footer>

    <div v-for="navigationFooter in navigationFooter" :key="navigationFooter.id" 
    class="flex justify-between gap-15 md:space-x-12">
      <p class="text-[#3d4a53] font-semibold hidden md:block">{{ navigationFooter.paragraph }}</p>

      <div class="flex gap-5">
        <button class="text-md font-semibold text-[#40189d] flex gap-2 bg-white hover:bg-[#d8c9ff] px-4 py-2.5 rounded-full  cursor-pointer">
          <span class="material-symbols-outlined ">keyboard_double_arrow_left</span>
          {{ navigationFooter.backBtn }}</button>

        <button class="grid grid-cols-4 space-x-2 bg-[#e9e0ff] font-semibold text-[#40189d] text-center items-center px-2 rounded-full cursor-pointer">
          <div class="w-5 h-5 md:w-10 md:h-10 rounded-full object-cover border-2 border-[#4B2AAD]/30 ring-2 hover:bg-[#d8c9ff]">{{ navigationFooter.currentPage }}</div>
          <div class="hover:bg-[#d8c9ff] hover:w-10 hover:h-10 hover:rounded-full">{{ navigationFooter.nextPage }}</div>
          <div class="hover:bg-[#d8c9ff] hover:w-10 hover:h-10 hover:rounded-full">{{ navigationFooter.nextPage1 }}</div>
          <div class="hover:bg-[#d8c9ff] hover:w-10 hover:h-10 hover:rounded-full">{{ navigationFooter.nextPage2 }}</div>
        </button>

        <button class="text-md font-semibold text-[#40189d] flex gap-2 bg-white hover:bg-[#d8c9ff] px-4 py-2.5 rounded-full cursor-pointer">
          {{  navigationFooter.nextBtn}}
          <span class="material-symbols-outlined">keyboard_double_arrow_right</span>
        </button>
      </div>
    </div>

  </footer>
</template>
