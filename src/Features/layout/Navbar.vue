<script setup>
import { ref, computed } from "vue";
import Freddy from "@/assets/images/profile_img_1.png";
import { useRoute } from "vue-router";
import { useUiStore } from "../../stores/uiStore";

const route = useRoute();
const uiStore = useUiStore();

const isActive = ref(false);
const isBellOpen = ref(false);
const isMsgOpen = ref(false);
const notification = ref(18);

// Menu items mirrored from sidebar to resolve the current page name
const menuItems = [
  { name: "Dashboard", path: "/home" },
  { name: "Search Job", path: "/search" },
  { name: "Applications", path: "/applications" },
  { name: "Message", path: "/messages" },
  { name: "Statistics", path: "/statistics" },
  { name: "News", path: "/news" },
];

const currentPageName = computed(() => {
  const current = menuItems.find((item) => item.path === route.path);
  return current ? current.name : "Dashboard";
});

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
  <nav
    class="flex items-center justify-between border-b border-gray-100 w-full py-1"
  >
    <!-- Left: hamburger + page title -->
    <div
      class="flex items-center relative left-4 md:left-6 lg:left-10 transition-all duration-300"
    >
      <!-- Hamburger: hidden on mobile (bottom nav handles navigation) -->
      <button
        class="hamburger--vortex mr-2 md:mr-4 scale-65 hidden md:block"
        :class="{ 'is-active': isActive }"
        @click="toggle"
        aria-label="Menu"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>

      <!-- Page Title — shrinks on smaller screens -->
      <h1
        class="font-poppins font-bold text-gray-800 relative text-base sm:text-lg md:text-xl lg:text-2xl transition-all duration-300"
      >
        {{ currentPageName }}
      </h1>
    </div>

    <!-- Search Bar: hidden on mobile (sm), visible on tablet+ -->
    <div class="hidden sm:flex items-center relative" :class="'w-1/4 md:w-1/3'">
      <input
        type="text"
        placeholder="Search..."
        class="w-full bg-[#e0e1e6] border-none rounded-3xl py-2 md:py-3 px-4 md:px-8 lg:px-12 focus:ring-2 focus:ring-purple-500 transition-all text-xs md:text-sm"
      />
      <span class="absolute right-3 text-gray-400 w-4 h-4 md:w-5 md:h-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 md:h-5 md:w-5"
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

    <!-- Right: icons + profile -->
    <div class="flex items-center space-x-2 md:space-x-4">
      <!-- Bell -->
      <div class="relative">
        <div
          @click="toggleBell"
          class="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#F4F5F9] cursor-pointer hover:bg-gray-200 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 md:h-6 md:w-6 text-gray-600"
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
            class="absolute -top-1 -right-1 bg-[#40189d] text-white text-[8px] md:text-[10px] font-bold h-4 w-4 md:h-5 md:w-5 rounded-full flex items-center justify-center border-2 border-white"
          >
            19
          </span>
        </div>

        <div
          v-if="isBellOpen"
          class="absolute right-0 mt-2 w-56 md:w-64 bg-white border border-gray-100 rounded-xl shadow-xl z-50 p-4"
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

      <!-- Message -->
      <div class="relative">
        <div
          @click="toggleMsg"
          class="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#F4F5F9] cursor-pointer hover:bg-gray-200 transition"
        >
          <svg
            viewBox="0 0 48 48"
            class="w-7 h-7 md:w-10 md:h-10 text-gray-600"
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
            class="absolute -top-1 -right-1 bg-[#40189d] text-white text-[8px] md:text-[10px] font-bold h-4 w-4 md:h-5 md:w-5 rounded-full flex items-center justify-center border-2 border-white"
          >
            {{ notification }}
          </span>
        </div>

        <div
          v-if="isMsgOpen"
          class="absolute right-0 mt-2 w-56 md:w-64 bg-white border border-gray-100 rounded-xl shadow-xl z-50 p-4"
        >
          <p class="text-xs font-bold uppercase text-gray-400 mb-2">Messages</p>
          <RouterLink
            to="/messages"
            class="text-sm text-gray-700 hover:text-purple-600"
            >New message from HR...</RouterLink
          >
        </div>
      </div>

      <!-- Profile -->
      <div class="flex items-center pl-2 md:pl-4 border-l border-gray-100">
        <RouterLink to="/profile">
          <img
            class="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-[#4B2AAD]/30 ring-2 ring-[#4B2AAD]/20 hover:ring-[#4B2AAD]/60 transition-all duration-300 shadow-md"
            :src="Freddy"
            alt="Profile"
          />
        </RouterLink>
        <!-- Name + role: hidden on sm and md, visible on lg+ -->
        <div class="ml-3 hidden lg:block">
          <h3 class="text-sm font-bold text-gray-800 leading-tight">
            Freddy J. Smith
          </h3>
          <p class="text-[10px] text-[#677483] font-medium">Super Admin</p>
        </div>
      </div>
    </div>
  </nav>
</template>
