<script setup>
import Navbar from "./Navbar.vue";
import sidebar from "./sidebar.vue";
import BottomNav from "./BottomNav.vue";
import { useUiStore } from "../../stores/uiStore";

const uiStore = useUiStore();
</script>

<template>
  <!-- Root: full screen flex row. Sidebar reserves its width via a shim,
       content area is flex-1 so it always fills the remaining width. -->
  <div
    class="flex w-full absolute right-0 pb-0 sm:pb-20 bg-[#f1f1f1] dark:bg-gray-900"
  >
    <!-- Sidebar (fixed-position) — hidden on mobile, visible on tablet+ -->
    <sidebar class="hidden md:block" />

    <!-- Shim: invisible spacer that matches the sidebar width,
         transitions alongside the sidebar to push content correctly.
         Hidden on mobile where sidebar is gone. -->
    <div
      class="shrink-0 transition-all duration-300 hidden md:block"
      :class="uiStore.isSidebarOpen ? 'w-65' : 'w-20'"
    ></div>

    <!-- Content area: flex-1 = always fills ALL remaining screen width -->
    <div
      class="flex-1 flex flex-col min-w-0 transition-all duration-300 overflow-y h-screen"
    >
      <!-- Navbar — stretches full width of this content column -->
      <section class="bg-[#f1f1f1] dark:bg-gray-900 px-4 flex gap-10 sm:px-2 sticky top-0 z-50">
        <Navbar />
      </section>

      <!-- Page content -->
      <main class="flex-1 px-4 sm:px-2 py-4 sm:py-3 bg-[#f1f1f1] dark:bg-gray-900">
        <router-view />
      </main>
    </div>

    <!-- Mobile bottom navigation — only shows on sm screens -->
    <BottomNav />
  </div>
</template>
