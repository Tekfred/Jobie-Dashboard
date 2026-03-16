<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const navItems = [
  { name: "Home", path: "/", icon: "home" },
  { name: "Search", path: "/search", icon: "search" },
  { name: "Applications", path: "/applications", icon: "description" },
  // { name: "Messages", path: "/messages", icon: "chat" },
  { name: "Stats", path: "/statistics", icon: "incomplete_circle" },
  { name: "News", path: "/news", icon: "newspaper"}
];

const isActive = (path) => {
  if (path === "/") return route.path === "/" || route.path === "/home";
  return route.path === path;
};
</script>

<template>
  <!-- Only visible on mobile (hidden on md and above) -->
  <nav
    class="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#4B2AAD] shadow-[0_-4px_24px_rgba(75,42,173,0.35)]"
  >
    <div class="flex items-end justify-around px-2 pt-2 pb-3 safe-bottom">
      <button
        v-for="item in navItems"
        :key="item.path"
        @click="router.push(item.path)"
        class="flex flex-col items-center justify-center gap-0.5 min-w-[56px] transition-all duration-300 relative group"
        :class="
          isActive(item.path) ? 'scale-110' : 'opacity-60 hover:opacity-90'
        "
      >
        <!-- Active pill background -->
        <span
          v-if="isActive(item.path)"
          class="absolute -top-1 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm"
        ></span>

        <!-- Icon -->
        <span
          class="material-symbols-outlined text-[22px] z-10 transition-all duration-300"
          :class="isActive(item.path) ? 'text-white' : 'text-white/60'"
        >
          {{ item.icon }}
        </span>

        <!-- Label -->
        <span
          class="text-[9px] font-semibold tracking-wide z-10 transition-all duration-300"
          :class="isActive(item.path) ? 'text-white' : 'text-white/50'"
        >
          {{ item.name }}
        </span>

        <!-- Active dot indicator -->
        <span
          v-if="isActive(item.path)"
          class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white"
        ></span>
      </button>
    </div>
  </nav>
</template>
