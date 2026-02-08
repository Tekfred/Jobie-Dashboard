<script setup>
import { ref, computed } from "vue";
import Navbar from "./Navbar.vue";
import sidebar from "./sidebar.vue";
import { useRoute } from "vue-router";
import { useUiStore } from "../../stores/uiStore";


const uiStore = useUiStore();
const mainMargin = computed(() => {
  return uiStore.isSidebarOpen ? 'ml-65' : 'ml-20';
})
// const title = ref("main layout");
</script>

<template>
  <div class="flex-1 flex flex-col transition-all duration-300" 
      :class="mainMargin">
    <section class="bg-[#f1f1f1] px-6">
      <Navbar />
    </section>

    <section>
      <sidebar />
    </section>

    <main class="bg-[#f1f1f1] w-full h-full flex-1 p-6 overflow-y-auto">
      <h1 class="text-xs text-gray-400">Content Area Start Here:</h1>
      <router-view />
    </main>
  </div>
</template>
