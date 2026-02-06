<script setup>
import { ref, computed } from "vue";
// import StatCard from "@/components/ui/StatCard.vue";
import { useRoute } from "vue-router";
const stop = ref("Hello World");
const start = ref(true);
</script>

<template>

    
      <!-- <div class="space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard label="Interviews" count="48" colorClass="bg-purple-600">
            <template #icon>🎤</template>
          </StatCard>

          <StatCard label="Applications" count="125" colorClass="bg-blue-400">
            <template #icon>📄</template>
          </StatCard>

          <StatCard label="Profile Visits" count="452" colorClass="bg-teal-400">
            <template #icon>👁️</template>
          </StatCard>

          <StatCard label="Inscriptions" count="12" colorClass="bg-orange-400">
            <template #icon>✍️</template>
          </StatCard>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-sm h-64">
          <h2 class="font-bold mb-4">Vacancy Stats</h2>
        </div> -->
      <!-- </div> -->


    

<main class="bg-linear-to-br from-purple-900 via-purple-700 to-indigo-800 min-h-screen flex items-center justify-center">
  
  <div class="text-center px-4">
    
    <!-- Animated Construction Icon -->
    <div class="mb-8 flex justify-center">
      <!-- Animated Crane/Warning Sign -->
      <div class="relative">
        <!-- Rotating Gear/Cog -->
        <svg class="w-24 h-24 text-yellow-400 animate-spin" style="animation-duration: 3s;" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
        
        <!-- Bouncing Hammer -->
        <div class="absolute -right-6 top-8 animate-bounce">
          <svg class="w-12 h-12 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 14v-3c0-.55-.45-1-1-1h-2v-1c0-1.1-.9-2-2-2h-2V5c0-.55-.45-1-1-1s-1 .45-1 1v2H9c-1.1 0-2 .9-2 2v1H5c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2v1c0 1.1.9 2 2 2h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c1.1 0 2-.9 2-2v-1h2c.55 0 1-.45 1-1z"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- 404 Text -->
    <h1 class="text-9xl font-bold text-white mb-4 animate-pulse">404</h1>
    
    <!-- Under Construction Message -->
    <div class="space-y-4">
      <h2 class="text-3xl md:text-4xl font-semibold text-yellow-400">
        Site Under Construction
      </h2>
      <p class="text-lg md:text-xl text-gray-200 max-w-md mx-auto">
        We're working hard to bring you something amazing. Please check back soon!
      </p>
    </div>

    <!-- Animated Progress Bar -->
    <div class="mt-8 max-w-md mx-auto">
      <div class="bg-gray-700 rounded-full h-4 overflow-hidden">
        <div class="bg-linear-to-r from-yellow-400 to-orange-500 h-full rounded-full animate-pulse" style="width: 65%"></div>
      </div>
      <p class="text-gray-300 text-sm mt-2">Building progress: 65%</p>
    </div>

    <!-- Animated Dots -->
    <div class="flex justify-center gap-2 mt-8">
      <div class="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style="animation-delay: 0s"></div>
      <div class="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
      <div class="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
    </div>

  </div>

   

  </main>
</template>
