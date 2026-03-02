<script setup>
import Navbar from "./Navbar.vue";
import sidebar from "./sidebar.vue";
import { useUiStore } from "../../stores/uiStore";

const uiStore = useUiStore();
</script>

<template>
  <!-- Root: full screen flex row. Sidebar reserves its width via a shim,
       content area is flex-1 so it always fills the remaining width. -->
  <div class="flex min-h-screen w-screen px-6 absolute right-0 overflow-x-hidden">
    <!-- Sidebar (fixed-position) -->
    <sidebar />

    <!-- Shim: invisible spacer that matches the sidebar width,
         transitions alongside the sidebar to push content correctly -->
    <div
      class="shrink-0 transition-all duration-300"
      :class="uiStore.isSidebarOpen ? 'w-65' : 'w-20'"
    ></div>

    <!-- Content area: flex-1 = always fills ALL remaining screen width -->
    <div class="flex-1 flex flex-col min-w-0 transition-all duration-300">
      <!-- Navbar — stretches full width of this content column -->
      <section class="bg-[#f1f1f1] px-6 sticky top-0 z-10">
        <Navbar />
      </section>

      <!-- Page content -->
      <main class="flex-1 px-6 py-6 bg-[#f1f1f1] overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>
