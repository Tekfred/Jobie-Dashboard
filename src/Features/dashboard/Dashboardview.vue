<script setup>
import StatCard from "@/Features/dashboard/Components/StatCard.vue";
import ProfileCard from "@/Features/dashboard/Components/ProfileCard.vue";
import VacancyStats from "./Components/VacancyStats.vue";
import FeaturedCompanies from "./Components/FeaturedCompanies.vue";
import { ref } from "vue";

// Import profile image
import OdaDinkImage from "@/assets/images/profile_img_1.png";
import Recommendedjobs from "./Components/Recommendedjobs.vue";

const stats = ref([
  {
    id: 1,
    title: "Interviews Schedule",
    value: "86",
    icon: "event",
    bgColor: "bg-[#4e36e2]",
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
  <div class="w-auto">
    <!-- 
      ========================================
      ROW 1: Stats Cards (4 cards across)
      ========================================
    -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard v-for="stat in stats" :key="stat.id" v-bind="stat" />
      </div>

    <!-- 
      ========================================
      ROW 2: Profile Card (LEFT) + Vacancy Stats (RIGHT)
      ========================================
      
    -->

    <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-6">
      <div class="xl:col-span-4">
        <ProfileCard :profile="profile" />
      </div>

      <div class="xl:col-span-8 space-y-6">
        <!-- Vacancy Stats -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-center h-100 text-gray-400">
            <VacancyStats />
          </div>
        </div>

        <!-- 
      ========================================
      ROW 3: Recommended Jobs (Full Width)
      ========================================
    -->
        <div class="mb-6">
          <h3
            class="text-base sm:text-lg xl:text-xl font-bold text-gray-800 mb-6 sm:mb-11"
          >
            Recommended Jobs
          </h3>
          <div>
            <div class="flex items-center justify-center h-64 text-gray-400">
              <Recommendedjobs />
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
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-base sm:text-lg xl:text-xl font-bold text-gray-800">
          Featured Companies
        </h3>

        <div class="flex gap-4">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-gray-300 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-gray-300 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-gray-300 inline-block"></span>
          </div>
          <button
            class="text-xs text-[#40189d] hover:text-[#5B4BC4] border border-primary px-4 py-1.5 rounded-full cursor-pointer font-medium flex items-center gap-1"
          >
            View More
            <span class="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center h-32 text-gray-400">
        <FeaturedCompanies />
      </div>
    </div>
  </div>
</template>
