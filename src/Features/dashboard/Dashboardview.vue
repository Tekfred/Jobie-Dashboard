<script setup>
import StatCard from "@/Features/dashboard/Components/StatCard.vue";
import ProfileCard from "@/Features/dashboard/Components/ProfileCard.vue";
import RecentActivityList from "@/Features/dashboard/Components/RecentActivityList.vue";
import { ref } from "vue";

// Import profile image
import OdaDinkImage from "@/assets/images/profile_img_1.png";

const stats = ref([
  {
    id: 1,
    title: "Interviews Schedule",
    value: "86",
    icon: "event",
    bgColor: "bg-[#6C5DD3]",
    iconBg: "bg-[#5B4BC4]",
  },
  {
    id: 2,
    title: "Application Sent",
    value: "75",
    icon: "work",
    bgColor: "bg-[#4CAFED]",
    iconBg: "bg-[#3D9DD8]",
  },
  {
    id: 3,
    title: "Profile Viewed",
    value: "45,673",
    icon: "person",
    bgColor: "bg-[#26DAB5]",
    iconBg: "bg-[#1FC5A3]",
  },
  {
    id: 4,
    title: "Unread Message",
    value: "93",
    icon: "mail",
    bgColor: "bg-[#A0D96C]",
    iconBg: "bg-[#8EC75A]",
  },
]);

const profile = ref({
  name: "Oda Dink",
  title: "Programmer",
  image: OdaDinkImage,
});
</script>

<template>
  <div class="w-full">
    
    <!-- 
      ========================================
      ROW 1: Stats Cards (4 cards across)
      ========================================
    -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard
        v-for="stat in stats"
        :key="stat.id"
        v-bind="stat"
      />
    </div>

    <!-- 
      ========================================
      ROW 2: Profile Card (LEFT) + Vacancy Stats (RIGHT)
      ========================================
      
    -->
    <!-- Two Column Layout: Oda Dink (LEFT) + Vacancy Stats & Activities (RIGHT) -->
<div class="grid grid-cols-5 lg:grid-cols-12 gap-6 mb-6">
  
  <!-- LEFT COLUMN: Profile Card only (33% width, full height) -->
  <div class="lg:col-span-4">
    <ProfileCard :profile="profile" />

    
  </div>

  <!-- RIGHT COLUMN: Vacancy Stats + Recent Activities stacked (67% width) -->
  <div class="lg:col-span-8 space-y-6">
    <!-- Vacancy Stats -->
    <div class="bg-white rounded-2xl shadow-lg p-6">
      <h3 class="text-xl font-bold text-gray-800 mb-4">Vacancy Stats</h3>
      <div class="flex items-center justify-center h-90 text-gray-400">
        <p>Chart and other content will go here...</p>
      </div>

      
    </div>

    

     <!-- 
      ========================================
      ROW 3: Recommended Jobs (Full Width)
      ========================================
    -->
    <div class="mb-6">
      <h3 class="text-xl font-bold text-gray-800 mb-4">Recommended Jobs</h3>
      <div class="bg-white rounded-2xl shadow-lg p-6">
        
        <div class="flex items-center justify-center h-64 text-gray-400">
          <p>Job cards will go here...</p>
        </div>
      </div>
    </div>
  </div>
</div>

   

    <!-- 
      ========================================
      ROW 4: Featured Companies (Full Width)
      ========================================
    -->
    <div>
      <div class="bg-white rounded-2xl shadow-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-800">Featured Companies</h3>
          <button class="text-sm text-[#6C5DD3] hover:text-[#5B4BC4] font-medium flex items-center gap-1">
            View More
            <span class="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
        <div class="flex items-center justify-center h-32 text-gray-400">
          <p>Company cards will go here...</p>
        </div>
      </div>
    </div>
  </div>
</template>
