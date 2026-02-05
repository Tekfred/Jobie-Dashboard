<script setup>
import { ref } from "vue";
import Freddy from "@/assets/images/profile_img_1.png";

const isActive = ref(false);
const notification = ref(18);

const toggle = () => {
  isActive.value = !isActive.value;
};

</script>
<template>
  <nav
    class="bg-white px-8 flex items-center justify-between border-b border-gray-100"
  >
    <div class="flex text-center items-center">
      <button
        class="hamburger--vortex m-4"
        :class="{ 'is-active': isActive }"
        @click="toggle"
        aria-label="Menu"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <h1 class="font-bold text-lg">Dashboard</h1>
    </div>

    <div class="flex items-center w-1/3 relative">
      <input
        type="text"
        placeholder="Search for something here..."
        class="w-full bg-[#eeeff2] border-none rounded-3xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-purple-500 transition-all text-sm"
      />
      <span class="absolute right-4 text-gray-400 w-5 h-5 bg-[eeeff2]">
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
    <div class="flex items-center space-x-2">
      <div class="relative cursor-pointer hover:opacity-80 transition">
        <div class="p-2 bg-[#F8F9FD] rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 rounded-2xl text-gray-500"
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
        </div>
        <span
          class="absolute -top-1 -right-1 bg-[#40189d] text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white"
        >
          19
        </span>
      </div>

      <div class="relative cursor-pointer hover:opacity-80 transition">
        <div class="p-2 bg-[#F8F9FD] rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-500"
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
        </div>
        <span
          class="absolute -top-1 -right-1 bg-[#40189d] text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white"
        >
          {{ notification }}
        </span>
      </div>

      <div class="text-center items-center flex transform translate-x-17">
        <a href="#"
          ><img
            id="dropdown"
            class="w-10 h-10 rounded-full"
            :src="Freddy"
            alt=""
        /></a>

        <div class="text-right transform translate-x-3 ">
          <h3 class="font-sm text-black text-sm font-medium">
            Freddy j. smith
          </h3>
          <p class="text-[#677483] font-medium text-[10px]">Super Admin</p>
        </div>
      </div>
    </div>
  </nav>
</template>
