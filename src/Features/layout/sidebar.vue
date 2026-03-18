<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUiStore } from "../../stores/uiStore";
import logo from "@/assets/images/02_Dashboard.png";

const route = useRoute();
const router = useRouter();
const uiStore = useUiStore();

// Main nav items
const menuItems = [
  { name: "Dashboard",    path: "/app/dashboard",    icon: "home" },
  { name: "Search Job",   path: "/app/search",       icon: "search" },
  { name: "Applications", path: "/app/applications", icon: "description" },
  // { name: "Message",      path: "/app/messages",     icon: "chat" },
  { name: "Statistics",   path: "/app/statistics",   icon: "incomplete_circle" },
  { name: "News",         path: "/app/news",         icon: "newspaper" },
];

const currentPageName = computed(() => {
  const current = menuItems.find((item) => item.path === route.path);
  return current ? current.name : "Dashboard";
});

const sideMargin = computed(() => {
  return uiStore.isSidebarOpen
    ? "left-56 opacity-100 pointer-events-none"
    : "left-12 opacity-0 pointer-events-none";
});

const sideinfo = computed(() => {
  return uiStore.isSidebarOpen ? "opacity-100" : "opacity-0";
});

// ✅ Fixed: router.replace instead of push so the dashboard
//    is fully removed from history and never flashes back
const Logout = () => {
  if (confirm("Are you sure you want to logout?")) {
    localStorage.removeItem("auth");
    router.replace("/login");  // ← replace, not push
  }
};
</script>

<template>
  <aside
    class="fixed left-0 top-0 h-screen bg-[#4B2AAD] px-6 py-8 text-white shadow-2xl z-20 transition-all duration-300 hidden md:flex md:flex-col"
    :class="uiStore.isSidebarOpen ? 'w-[260px]' : 'w-20'"
  >
    <!-- Decorative corner piece -->
    <div
      class="absolute -top-14 w-20 h-20 bg-[#4B2AAD] -right-3 transition-all duration-300"
      :class="sideMargin"
    >
      <div class="absolute -bottom-8 -right-5 w-16 h-14 bg-gray-100 rounded-full"></div>
    </div>

    <!-- Logo -->
    <div
      class="flex items-center gap-3 mb-12 px-2 overflow-hidden"
      :class="uiStore.isSidebarOpen ? '' : 'pr-15 relative right-4'"
    >
      <div class="w-15 h-15 rounded-xl flex items-center justify-center shrink-0">
        <img :src="logo" alt="logo" />
      </div>
      <h1
        class="text-xl font-bold tracking-wide whitespace-nowrap transition-opacity duration-300"
        :class="uiStore.isSidebarOpen ? 'opacity-100' : 'opacity-0'"
      >
        Jobie
      </h1>
    </div>

    <!-- Navigation -->
    <nav class="space-y-2 flex-1">
      <RouterLink
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        v-slot="{ isExactActive }"
        custom
      >
        <a
          :href="item.path"
          @click.prevent="$router.push(item.path)"
          class="flex items-center gap-4 px-4 py-3 rounded-l-[20px] transition-all duration-300 group relative"
          :class="
            isExactActive
              ? 'bg-[#e2e2e4] text-[#4B2AAD] -mr-6 overflow-hidden'
              : 'text-white/70 hover:text-white hover:bg-white/10 -mr-6'
          "
        >
          <!-- Icon -->
          <span
            class="material-symbols-outlined text-2xl transition-colors"
            :class="
              isExactActive
                ? 'text-[#4B2AAD]'
                : 'text-white/70 group-hover:text-white'
            "
          >
            {{ item.icon }}
          </span>

          <!-- Label -->
          <span
            class="font-medium text-sm whitespace-nowrap transition-all duration-300 overflow-hidden"
            :class="[
              isExactActive ? 'text-[#4B2AAD] font-semibold' : '',
              uiStore.isSidebarOpen
                ? 'max-w-xs opacity-100 w-auto'
                : 'max-w-0 opacity-0 w-0',
            ]"
          >
            {{ item.name }}
          </span>
        </a>
      </RouterLink>
    </nav>

    <!-- Footer info -->
    <div
      class="mt-auto mb-4 text-[10px] text-white/40 tracking-wider"
      :class="sideinfo"
    >
      <p class="font-semibold">Jobie Job Portal Admin Dashboard</p>
      <p class="mt-1">© 2020 All Rights Reserved</p>
      <p class="mt-2">Made with ❤️ by Peterdraw</p>
    </div>

    
    <button
      @click="Logout"
      class="flex items-center gap-4 px-10 py-3 -mx-6 transition-all duration-300 group
             text-red-400 hover:bg-red-500/10"
    >
      <span class="material-symbols-outlined text-2xl text-red-400 shrink-0">logout</span>
      <span
        class="font-medium text-sm whitespace-nowrap transition-all duration-300 overflow-hidden text-red-400"
        :class="uiStore.isSidebarOpen ? 'max-w-xs opacity-100 w-auto' : 'max-w-0 opacity-0 w-0'"
      >
        Logout
      </span>
    </button>
  </aside>
</template>