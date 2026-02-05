<script setup>
import { ref } from "vue";
import Navbar from "./Navbar.vue";
import sidebar from "./sidebar.vue";

// const title = ref("main layout");
</script>

<template>
  <div class=" ">
    <section>
      <Navbar />
    </section>

    <section class="flex-1 flex flex-col">
      <sidebar />
    </section>

    <main class="flex-1 p-6 bg-white overflow-y-auto">
      <h1 class="text-xs text-gray-400">Content Area Start Here:</h1>
      <router-view />
    </main>
  </div>
</template>
