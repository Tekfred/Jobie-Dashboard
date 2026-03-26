<script setup>
import RecentActivityList from '@/Features/dashboard/Components/RecentActivityList.vue';

const props = defineProps({
  profile: {
    type: Object,
    default: () => ({ name: '', title: '', image: '' }),
  }
});

const skills = [
  { name: 'PHP',     percentage: 66, color: '#FF9066', strokeColor: '#FFE5D9' },
  { name: 'Vue',     percentage: 31, color: '#42D697', strokeColor: '#D4F4E6' },
  { name: 'Laravel', percentage: 7,  color: '#4CAFE8', strokeColor: '#D9F0FA' },
];

const circumference = 2 * Math.PI * 36;

const getStrokeDashoffset = (percentage) => {
  return circumference - (percentage / 100) * circumference;
};
</script>

<template>
  <div class="bg-white rounded-2xl shadow-lg p-6">
    <!-- Profile Header -->
    <div class="flex flex-col items-center mb-6">
      <!-- Profile Image with circular border -->
      <div class="relative mb-4">
        <!-- Outer purple ring -->
        <div class="absolute inset-0 rounded-full bg-linear-to-br from-[#6C5DD3] to-[#8B7CE8] p-1">
          <div class="w-full h-full bg-white rounded-full"></div>
        </div>
        <!-- Profile picture -->
        <img 
          :src="profile.image" 
          :alt="profile.name"
          class="relative w-24 h-24 rounded-full object-cover border-4 border-white"
        />
      </div>

      <!-- Name and Title -->
      <h3 class="text-sm sm:text-xl font-bold text-gray-800">{{ profile.name }}</h3>
      <p class="text-xs sm:text-sm text-gray-500 mt-1">{{ profile.title }}</p>
    </div>

    <!-- Skills Section -->
    <div class="grid grid-cols-3 gap-4 mb-6">
      <div 
        v-for="skill in skills" 
        :key="skill.name"
        class="flex flex-col items-center"
      >
        <!-- Circular Progress -->
        <div class="relative w-20 h-20">
          <!-- SVG Circle Progress -->
          <svg class="transform -rotate-90 w-20 h-20" viewBox="0 0 100 100">
            <!-- Background circle (light color) -->
            <circle
              cx="50"
              cy="50"
              r="36"
              :stroke="skill.strokeColor"
              stroke-width="13"
              fill="none"
            />
            <!-- Progress circle (main color) -->
            <circle
              cx="50"
              cy="50"
              r="36"
              :stroke="skill.color"
              stroke-width="13"
              fill="none"
              stroke-linecap="round"
              :stroke-dasharray="2 * Math.PI * 36"
              :stroke-dashoffset="getStrokeDashoffset(skill.percentage)"
              class="transition-all duration-500 ease-out"
            />
          </svg>
          
          <!-- Percentage text in center -->
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-xs font-bold text-gray-700">{{ skill.percentage }}%</span>
          </div>
        </div>

        <!-- Skill name below circle -->
        <p class="text-xs font-medium text-gray-600 mt-2">{{ skill.name }}</p>
      </div>
    </div>

    <!-- Recent Activities (under Vacancy Stats, same column) -->
    <RecentActivityList />
  </div>
</template>