<script setup>
import { ref } from "vue";
import Freddy from "@/assets/images/profile_img_1.png";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useUiStore } from "../../stores/uiStore";

const route = useRoute();
const uiStore = useUiStore();

const isActive = ref(false); // Hamburger menu
const isBellOpen = ref(false);
const isMsgOpen = ref(false);
const notification = ref(18);

// Toggle logic that closes one if the other is opened
const toggleBell = () => {
  isBellOpen.value = !isBellOpen.value;
  isMsgOpen.value = false;
};

const toggleMsg = () => {
  isMsgOpen.value = !isMsgOpen.value;
  isBellOpen.value = false;
};
const toggle = () => {
  isActive.value = !isActive.value;
  uiStore.toggleSidebar();
};


</script>
<template>
  <nav class="flex items-center justify-between border-b border-gray-100 ">
   
    <div class="flex items-center relative right-55">
      <button
        class="hamburger--vortex ml-20 mr-4 scale-65"
        :class="{ 'is-active': isActive }"
        @click="toggle"
        aria-label="Menu"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <h1 class="font-bold text-2xl ">Dashboard</h1>
    </div>

    <div class="flex items-center w-1/3 relative right-24">
      <input
        type="text"
        placeholder="Search for something..."
        class="px-50 bg-[#e0e1e6] relative right-8 border-none rounded-3xl py-3 pl-13 focus:ring-2 focus:ring-purple-500 transition-all text-sm"
      />
      <span class="absolute -right-8 text-gray-400 w-5 h-5 bg-[eeeff2]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
    </div>
    <div class="flex items-center space-x-4">
      <div class="relative">
        <div
          @click="toggleBell"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-[#F4F5F9] cursor-pointer hover:bg-gray-200 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span
            class="absolute -top-1 -right-1 bg-[#40189d] text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white"
          >
            19
          </span>
        </div>

        <div
          v-if="isBellOpen"
          class="absolute right-0 mt-2 w-64 bg-white border border-gray-100 rounded-xl shadow-xl z-50 p-4"
        >
          <p class="text-xs font-bold uppercase text-gray-400 mb-2">
            Notifications
          </p>
          <RouterLink
            to="/notifications"
            class="text-sm text-gray-700 hover:text-purple-600"
            >You have new job matches!</RouterLink
          >
        </div>
      </div>

      <div class="relative">
        <div
          @click="toggleMsg"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-[#F4F5F9] cursor-pointer hover:bg-gray-200 transition"
        >
          <svg
            viewBox="0 0 48 48"
            class="w-10 h-10 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 18h16c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H22l-4 3v-3h-2c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2z"
              fill="currentColor"
            />
            <circle cx="21" cy="23" r="1.2" fill="#FFFFFF" />
            <circle cx="24" cy="23" r="1.2" fill="#FFFFFF" />
            <circle cx="27" cy="23" r="1.2" fill="#FFFFFF" />
          </svg>
          <span
            class="absolute -top-1 -right-1 bg-[#40189d] text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white"
          >
            {{ notification }}
          </span>
        </div>

        <div
          v-if="isMsgOpen"
          class="absolute right-0 mt-2 w-64 bg-white border border-gray-100 rounded-xl shadow-xl z-50 p-4"
        >
          <p class="text-xs font-bold uppercase text-gray-400 mb-2">Messages</p>
          <RouterLink
            to="/messages"
            class="text-sm text-gray-700 hover:text-purple-600"
            >New message from HR...</RouterLink
          >
        </div>
      </div>

      <div
        class="flex items-center pl-4 border-l border-gray-100 transform translate-x-17"
      >
        <RouterLink to="/profile">
          <img
            class="w-10 h-10 rounded-full object-cover border border-gray-200"
            :src="Freddy"
            alt="Profile"
          />
        </RouterLink>
        <div class="ml-3 hidden sm:block">
          <h3 class="text-sm font-bold text-gray-800 leading-tight">
            Freddy J. Smith
          </h3>
          <p class="text-[10px] text-[#677483] font-medium">Super Admin</p>
        </div>
      </div>
    </div>
  </nav>
</template>
