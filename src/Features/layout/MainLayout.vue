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
  <div class=" flex flex-col w-auto transition-all duration-300" 
      :class="mainMargin">
    <section class="bg-[#f1f1f1] px-6">
      <Navbar />
    </section>

    <section>
      <sidebar />
    </section>

    <main>
      <h1 class="w-full flex-1 px-20 py-6 overflow-y-auto text-gray-400"></h1>
      <router-view />
    </main>
  </div>
</template>
