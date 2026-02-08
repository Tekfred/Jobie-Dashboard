<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useUiStore } from "../../stores/uiStore";
import logo from "@/assets/images/02_Dashboard.png";

const route = useRoute();
const uiStore = useUiStore();


// Centralized menu data
const menuItems = [
  { name: "Dashboard", path: "/", icon: "home" },
  { name: "Search Job", path: "/search", icon: "search" },
  { name: "Applications", path: "/applications", icon: "description" },
  { name: "Message", path: "/messages", icon: "chat" },
  { name: "Statistics", path: "/statistics", icon: "incomplete_circle" },
  { name: "News", path: "/news", icon: "newspaper" },
];

const currentPageName = computed(() => {
  const current = menuItems.find((item) => item.path === route.path);
  return current ? current.name : "Dashboard";
});

const sideMargin = computed(() => {
  return uiStore.isSidebarOpen ? 'ml-05' : 'ml-25';
})
</script>

<template>
  <aside
     class="fixed left-0 top-0 h-screen bg-[#4B2AAD] px-6 py-8 text-white shadow-2xl z-20 transition-all duration-300"
    :class="uiStore.isSidebarOpen ? 'w-65' : 'w-20'"
  >

  


   <div class="absolute -top-14 left-56 w-20 h-20 bg-[#4B2AAD] -right-3 " :class= 'sideMargin'>
      <div
        class="absolute -bottom-8 -right-5 w-16 h-14 bg-gray-100 rounded-full"
      ></div>
    </div>
    <!-- Logo  hide text when collapsed-->
    <div class="flex items-center gap-3 mb-12 px-2 overflow-hidden">
      <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
        <img :src="logo" alt="logo" />
      </div>

      

      <!-- 
        👇 The text fades out when sidebar closes
        opacity-100 when open, opacity-0 when closed
      -->
      <h1  class="text-xl font-bold tracking-wide whitespace-nowrap transition-opacity duration-300"
        :class="uiStore.isSidebarOpen ? 'opacity-100' : 'opacity-0'">Jobie</h1>
    </div>

    <!-- <div
      class="absolute -top-2 left-60 w-20 h-20 bg-[#4B2AAD] -right-2"
    ></div> -->

    
    

    <!-- Navigation -->
    <nav class="space-y-2">
      <RouterLink
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        v-slot="{ isActive }"
        custom
      >
        <a
          :href="item.path"
          @click.prevent="$router.push(item.path)"
          class="flex items-center gap-4 px-4 py-3 rounded-l-[20px] transition-all duration-300 group relative"
          :class="
            isActive
              ? 'bg-[#f1f1f1] text-[#4B2AAD] shadow-lg -mr-6 overflow-hidden'
              : 'text-white/70 hover:text-white hover:bg-white/10 -mr-6'
          "
        >
          <!-- Icon -->
          <span
            class="material-symbols-outlined text-2xl transition-colors"
            :class="
              isActive
                ? 'text-[#4B2AAD] '
                : 'text-white/70 group-hover:text-white '
            "
          >
            {{ item.icon }}
          </span>

          <!-- Text -->
          <span
            class="font-medium text-sm"
            :class="isActive ? 'text-[#4B2AAD] font-semibold overflow-hidden' : ''"
          >
            {{ item.name }}
          </span>
        </a>
      </RouterLink>
    </nav>

    <!-- Footer -->
    <div
      class="absolute bottom-10 left-8 text-[10px] text-white/40 tracking-wider "
    >
      <p class="font-semibold ">Jobie Job Portal Admin Dashboard</p>
      <p class="mt-1 ">© 2020 All Rights Reserved</p>
      <p class="mt-2 ">Made with ❤️ by Peterdraw</p>
    </div>
  </aside>
</template>
