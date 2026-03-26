<script setup>
import { ref } from 'vue';



const activities = ref([
  {
    id: 1,
    message: 'Your application has accepted in',
    highlight: '3 Vacancy',
    time: '12h ago',
    icon: 'description',
    iconColor: 'text-[#6C5DD3]',
    iconBg: 'bg-[#F0EDFF]'
  },
  {
    id: 2,
    message: 'Your application has accepted in',
    highlight: '3 Vacancy',
    time: '12h ago',
    icon: 'description',
    iconColor: 'text-[#6C5DD3]',
    iconBg: 'bg-[#F0EDFF]'
  },
  {
    id: 3,
    message: 'Your application has accepted in',
    highlight: '3 Vacancy',
    time: '12h ago',
    icon: 'description',
    iconColor: 'text-[#6C5DD3]',
    iconBg: 'bg-[#F0EDFF]'
  },
  {
    id: 4,
    message: 'Your application has accepted in',
    highlight: '3 Vacancy',
    time: '12h ago',
    icon: 'description',
    iconColor: 'text-[#6C5DD3]',
    iconBg: 'bg-[#F0EDFF]'
  }
]);



/**
 * Show "See More" indicator on last item
 */
const showLoadMore = ref(true);
</script>

<template>
  <div class="bg-white rounded-2xl ">
    <!-- Section Header -->
    <h3 class="text-md sm:text-lg font-bold text-gray-800  mb-6">Recent Activities</h3>

    <!-- Activities List -->
    <div class="space-y-10">
      <div 
        v-for="(activity, index) in activities" 
        :key="activity.id"
        class="flex items-start gap-4 relative"
      >
        <!-- Icon Container -->
        <div 
          class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
          :class="activity.iconBg"
        >
          <span 
            class="material-symbols-outlined text-xl"
            :class="activity.iconColor"
          >
            {{ activity.icon }}
          </span>
        </div>

        <!-- Activity Content -->
        <div class="flex-2 ">
          <p class="text-sm sm:text-sm text-gray-600">
            {{ activity.message }}
            <span class="font-semibold text-gray-800">{{ activity.highlight }}</span>
          </p>
          <p class="text-xs text-gray-400 mt-1 text-start">{{ activity.time }}</p>
        </div>

        <!-- Vertical line connecting items (except last item) -->
        <div 
          v-if="index < activities.length - 1"
          class="absolute left-5 top-12 w-0.5 h-full bg-gray-200"
        ></div>
      </div>

      <!-- "See More" Button -->
      <div 
        v-if="showLoadMore"
        class="flex justify-center transform translate-y-12"
      >
        <button 
          class="flex items-center justify-center w-12 h-12  sm:w-15 sm:h-15 rounded-full shadow-2xl bg-gray-100 hover:bg-gray-200 transition-colors"
          @click="() => {}"
        >
          <span class="material-symbols-outlined text-white-600 group-hover:text-gray-800 ">
            expand_more
          </span>
        </button>
      </div>
    </div>
  </div>
</template>