<script setup>
/**
 * StatCard Component
 * 
 * Props explanation:
 * - title: The label text (e.g., "Interviews Schedule")
 * - value: The big number to display (e.g., "86")
 * - icon: The icon name from Material Symbols
 * - bgColor: Background color class (e.g., "bg-[#6C5DD3]")
 * - iconBg: Icon background color (slightly lighter shade)
 */

defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'bg-purple-600'
  },
  iconBg: {
    type: String,
    default: 'bg-purple-500'
  }
});
</script>

<template>
  
  <div 
    class="rounded-2xl shadow-lg p-6 text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
    :class="bgColor"
  >
    <div class="flex items-center justify-between">
      <!-- Left side: Text content -->
      <div class="flex-1">
        <!-- Title text - smaller and slightly transparent -->
        <p class="text-sm font-medium opacity-90 mb-2">
          {{ title }}
        </p>
        
        <!-- Big number - the main stat -->
        <h2 class="text-5xl font-bold">
          {{ value }}
        </h2>
      </div>

      <!-- Right side: Icon container -->
      <div 
        class="w-16 h-16 rounded-xl flex items-center justify-center"
        :class="iconBg"
      >
        <span class="material-symbols-outlined text-4xl text-white">
          {{ icon }}
        </span>
      </div>
    </div>
  </div>
</template>