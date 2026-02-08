<script setup>
import { ref, computed } from "vue";
const stop = ref("Hello World");
const start = ref(true);
import StatCard from "@/Features/dashboard/Components/StatCard.vue";

// **
//  * Dashboard Stats Data
//  *
//  * Why use an array?
//  * - Easy to loop through with v-for
//  * - Keeps data organized
//  * - Easy to add/remove cards later
//  */
const stats = ref([
  {
    id: 1,
    title: "Interviews Schedule",
    value: "86",
    icon: "event", // Material Symbols icon name
    bgColor: "bg-[#6C5DD3]", // Purple
    iconBg: "bg-[#5B4BC4]",
  },
  {
    id: 2,
    title: "Application Sent",
    value: "75",
    icon: "work", // Briefcase icon
    bgColor: "bg-[#4CAFED]", // Blue
    iconBg: "bg-[#3D9DD9]",
  },
  {
    id: 3,
    title: "Profile Viewed",
    value: "45,673",
    icon: "person", // Person icon
    bgColor: "bg-[#26DAB5]", // Green/Teal
    iconBg: "bg-[#1FC5A3]",
  },
  {
    id: 4,
    title: "Unread Message",
    value: "93",
    icon: "mail", // Email icon
    bgColor: "bg-[#A0D96C]", // Light green
    iconBg: "bg-[#8EC75A]",
  },
]);
</script>

<template>
  <div class="space-y-6">
    <!-- 
      Stats Grid Container:
      
      Grid explanation:
      - grid: Enable CSS Grid
      - grid-cols-1: 1 column on mobile
      - md:grid-cols-2: 2 columns on tablets
      - lg:grid-cols-4: 4 columns on desktop
      - gap-6: Space between cards
    -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard v-for="stat in stats" :key="stat.id" v-bind="stat" />
    </div>

    <!-- Placeholder for other dashboard content -->
    <div class="bg-white rounded-2xl shadow p-6 mt-6">
      <h3 class="text-xl font-bold text-gray-800 mb-4">Vacancy Stats</h3>
      <p class="text-gray-500 text-sm">
        Chart and other content will go here...
      </p>
    </div>
  </div>
</template>
