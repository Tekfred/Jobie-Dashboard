  <script setup>
  import profileImage from "@/assets/images/profile_img_1.png";

  const profile = {
  id: 1,
  name: "Oda Dink",
  title: "Programmer",
  image: profileImage,
  following: 228,
  followers: 4842,
  phone: "+50 123 456 78",
  email: "davidheree@mail.com",
};

const portfolios = [
  { platform: "facebook", handle: "/davidheree.porto", icon: "facebook", bg: "#1877F2" },
  { platform: "dribbble", handle: "/david.drib", icon: "dribbble", bg: "#EA4C89" },
  { platform: "linkedin", handle: "/davidheree222", icon: "linkedin", bg: "#0A66C2" },
  { platform: "youtube", handle: "/davidhereechan", icon: "youtube", bg: "#FF0000" },
];


  const skills = [
    {
      name: "PHP",
      percentage: 66,
      color: "#FF9066",
      strokeColor: "#FFE5D9",
    },
    {
      name: "Vue",
      percentage: 31,
      color: "#42D697",
      strokeColor: "#D4F4E6",
    },
    {
      name: "Laravel",
      percentage: 7,
      color: "#4CAFE8",
      strokeColor: "#D9F0FA",
    },
  ];

  const circumference = 2 * Math.PI * 36;

  const getStrokeDashoffset = (percentage) =>
  circumference - (percentage / 100) * circumference;
  </script>

  <template>

    <!-- RIGHT: Profile Card -->
    <div v-if="profile" class="pt-18 w-85 flex flex-col gap-5 shrink-0">

      <!-- Profile Info Card -->
      <div class="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center">
        <!-- Avatar with ring -->
        <div class="relative mb-4">
          <svg class="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" stroke="#E8E4FB" stroke-width="4" fill="none"/>
            <circle cx="50" cy="50" r="46" stroke="#6C5DD3" stroke-width="4" fill="none"
              stroke-dasharray="289" stroke-dashoffset="72" stroke-linecap="round"/>
          </svg>
          <img
            :src="profileImage"
            :alt="profile.name"
            class="w-20 h-20 rounded-full object-cover m-[6px]"
          />
        </div>

        <h3 class="text-base font-bold text-gray-800">{{ profile.name }}</h3>
        <p class="text-xs text-gray-400 mt-0.5 mb-4">{{ profile.title }}</p>

        <!-- Stats -->
        <div class="flex gap-18 mt-10 mb-10">
          <div class="text-center">
            <p class="text-2xl font-bold text-gray-800">{{ profile.following }}</p>
            <p class="text-xs text-gray-400">Following</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold text-gray-800">{{ profile.followers.toLocaleString() }}</p>
            <p class="text-xs text-gray-400">Followers</p>
          </div>
        </div>

        <!-- Contact -->
        <div class="w-full space-y-2 mb-5">
          <div class="flex items-center gap-3">
            <svg class="w-4 h-4 text-[#6C5DD3] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span class="text-sm text-gray-600">{{ profile.phone }}</span>
          </div>
          <div class="flex items-center gap-3">
            <svg class="w-4 h-4 text-[#6C5DD3] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span class="text-sm text-gray-600">{{ profile.email }}</span>
          </div>
        </div>

        <!-- Skill Circles -->
        <div class="grid grid-cols-3 gap-3 w-full">
          <div v-for="skill in skills" :key="skill.name" class="flex flex-col items-center">
            <div class="relative w-16 h-16">
              <svg class="transform -rotate-90 w-16 h-16" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="36" :stroke="skill.strokeColor" stroke-width="13" fill="none"/>
                <circle cx="50" cy="50" r="36" :stroke="skill.color" stroke-width="13" fill="none"
                  stroke-linecap="round" :stroke-dasharray="circumference"
                  :stroke-dashoffset="getStrokeDashoffset(skill.percentage)"
                  class="transition-all duration-500 ease-out"/>
              </svg>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-[10px] font-bold text-gray-700">{{ skill.percentage }}%</span>
              </div>
            </div>
            <p class="text-[10px] font-medium text-gray-500 mt-1">{{ skill.name }}</p>
          </div>
        </div>
      </div>

      <!-- Portfolios Card -->
      <div class="bg-white rounded-2xl shadow-sm p-5">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-sm font-bold text-gray-800">Portfolios</h3>
          <button class="text-gray-400 hover:text-gray-600">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </button>
        </div>
        <div class="space-y-3">
          <div v-for="p in portfolios" :key="p.platform" class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0" :style="{ backgroundColor: p.bg }">
              <!-- Facebook -->
              <svg v-if="p.icon === 'facebook'" class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
              <!-- Dribbble -->
              <svg v-if="p.icon === 'dribbble'" class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"/>
              </svg>
              <!-- LinkedIn -->
              <svg v-if="p.icon === 'linkedin'" class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
              </svg>
              <!-- YouTube -->
              <svg v-if="p.icon === 'youtube'" class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
              </svg>
            </div>
            <span class="text-sm text-gray-600">{{ p.handle }}</span>
          </div>
        </div>
      </div>

    </div>
  </template>
