<script setup>
import { ref } from 'vue';

const showInterviews = ref(true);
const showRejected = ref(false);


const skillBars = [
  { name: "Programming", percentage: 78 },
  { name: "Prototyping", percentage: 65 },
  { name: "UI Design", percentage: 89 },
  { name: "Researching", percentage: 94 },
];

const circumference = 2 * Math.PI * 36;
const getStrokeDashoffset = (percentage) =>
  circumference - (percentage / 100) * circumference;
</script>

<template>

   <!-- Breadcrumb -->
        <p class="text-sm text-gray-400 mb-4 text-start m-3">
          <span class="text-[#6C5DD3] font-semibold cursor-pointer hover:underline ">Profile</span>
          <span class="mx-1">/</span>
          <span>Edit Profile</span>
        </p>
  <div class="flex gap-6 pt-6"> 

    
    <!-- LEFT: Edit Form -->
    <div class="flex-1 flex flex-col gap-5 bg-white rounded-2xl shadow-sm p-6">

      <!-- Edit Profile Header Card -->
      <div class="">
       

        <!-- Title Row -->
        <div class="flex items-center justify-between space-x-15 sm:space-x-auto">
          <h2 class="sm:text-xl font-bold text-gray-800 text-sm"><span class=" sm:inline-block hidden">Edit</span> Profile</h2>
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2">
              <span class="text-xs sm:text-sm md:text-base text-gray-500">Available for hire?</span>
              <!-- Toggle -->
              <label class="relative inline-flex  items-center cursor-pointer">
                <input type="checkbox" checked class="sr-only peer" />
                 <button
          @click="showInterviews = !showInterviews"
          :class="showInterviews ? 'bg-[#e5cffd]' : 'bg-gray-200'"
          class="w-8 h-4 sm:w-10 sm:h-3 rounded-full relative transition-colors"
        >
          <div
            :class="
              showInterviews
                ? 'translate-x-4 sm:translate-x-4'
                : '-translate-x-1'
            "
            class="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 bg-[#7252D3] rounded-full transition-transform mt-0.5 ml-px"
          ></div>
        </button>
              </label>
            </div>
            <button
              class="px-5 py-2 rounded-full border border-gray-200 text-gray-600 text-xs sm:text-base font-medium hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              class="px-6 py-2 rounded-full bg-[#6C5DD3] text-white text-xs md:text-base font-semibold hover:bg-[#5a4cc4] transition shadow-md shadow-[#6C5DD3]/30"
            >
             Save <span class="hidden md:text-base">Changes</span> 
            </button>
          </div>
        </div>
      </div>

      <!-- GENERALS -->
      <div class=" p-6 text-start font-semibold">
        <h3 class="text-xs font-bold tracking-widest text-black uppercase mb-5">Generals</h3>
        <div class="grid grid-cols-1 gap-5 mb-5 lg:grid-cols-3">
          <div>
            <label class="block text-xs text-gray-400 mb-1">First Name</label>
            <input
              type="text"
              placeholder="Oda"
              value="Oda"
              class="w-full border-b border-gray-200 focus:border-[#6C5DD3] outline-none py-1.5 text-sm text-gray-700 bg-transparent transition-colors"
            />
          </div>
          <div>
            <label class="block text-xs text-gray-400 mb-1">Middle Name</label>
            <input
              type="text"
              placeholder="Type here"
              class="w-full border-b border-gray-200 focus:border-[#6C5DD3] outline-none py-1.5 text-sm text-gray-400 bg-transparent transition-colors placeholder:text-gray-300"
            />
          </div>
          <div>
            <label class="block text-xs text-gray-400 mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Dink"
              value="Dink"
              class="w-full border-b border-[#6C5DD3] focus:border-[#6C5DD3] outline-none py-1.5 text-sm text-gray-700 bg-transparent transition-colors"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div>
            <label class="block text-xs text-gray-400 mb-1">Username</label>
            <input
              type="text"
              value="davidheree"
              class="w-full border-b border-gray-200 focus:border-[#6C5DD3] outline-none py-1.5 text-sm text-gray-700 bg-transparent transition-colors"
            />
          </div>
          <div>
            <label class="block text-xs text-gray-400 mb-1">Password</label>
            <div class="relative flex items-center border-b border-gray-200 focus-within:border-[#6C5DD3] transition-colors">
              <input
                type="password"
                value="••••••••••••••"
                class="w-full outline-none py-1.5 text-sm text-gray-700 bg-transparent pr-10"
              />
              <button class="absolute right-0 text-xs font-semibold text-[#6C5DD3]">SHOW</button>
            </div>
          </div>
          <div>
            <label class="block text-xs text-gray-400 mb-1">Re-Type Password</label>
            <div class="relative flex items-center border-b border-gray-200 focus-within:border-[#6C5DD3] transition-colors">
              <input
                type="password"
                value="••••••••••••••"
                class="w-full outline-none py-1.5 text-sm text-gray-700 bg-transparent pr-10"
              />
              <button class="absolute right-0 text-xs font-semibold text-[#6C5DD3]">SHOW</button>
            </div>
          </div>
        </div>
      </div>

      <!-- CONTACT -->
      <div class=" p-6 text-start">
        <h3 class="text-xs font-bold tracking-widest text-black uppercase mb-5">Contact</h3>
        <div class="grid grid-cols-1 gap-5 mb-5 lg:grid-cols-3">
          <div>
            <label class="block text-xs text-gray-400 mb-1 font-semibold">MobilePhone</label>
            <div class="flex items-center gap-2 border-b border-gray-200 focus-within:border-[#6C5DD3] py-1.5 transition-colors">
              <!-- Phone icon -->
              <svg class="w-4 h-4 text-[#6C5DD3] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <input type="tel" value="+50 123 456 78" class="w-full outline-none text-sm text-gray-700 bg-transparent" />
            </div>
          </div>
          <div>
            <label class="block text-xs text-gray-400 mb-1">Whatsapp</label>
            <div class="flex items-center gap-2 border-b border-gray-200 focus-within:border-[#6C5DD3] py-1.5 transition-colors">
              <!-- WhatsApp icon -->
              <svg class="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <input type="tel" value="+50 444 5511 11" class="w-full outline-none text-sm text-gray-700 bg-transparent" />
            </div>
          </div>
          <div>
            <label class="block text-xs text-gray-400 mb-1">Email</label>
            <div class="flex items-center gap-2 border-b border-gray-200 focus-within:border-[#6C5DD3] py-1.5 transition-colors">
              <!-- Email icon -->
              <svg class="w-4 h-4 text-[#6C5DD3] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <input type="email" value="davidheree@mail.com" class="w-full outline-none text-sm text-gray-700 bg-transparent" />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div>
            <label class="block text-xs text-gray-400 mb-1">Address</label>
            <input type="text" value="Franklin Avenue St. Corner"
              class="w-full border-b border-gray-200 focus:border-[#6C5DD3] outline-none py-1.5 text-sm text-gray-700 bg-transparent transition-colors" />
          </div>
          <div>
            <label class="block text-xs text-gray-400 mb-1">City</label>
            <div class="relative border-b border-gray-200 focus-within:border-[#6C5DD3] transition-colors">
              <select class="w-full outline-none py-1.5 text-sm text-gray-700 bg-transparent appearance-none pr-6 cursor-pointer">
                <option>London</option>
                <option>New York</option>
                <option>Paris</option>
                <option>Santorini</option>
              </select>
              <svg class="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </div>
          <div>
            <label class="block text-xs text-gray-400 mb-1">Country</label>
            <div class="relative border-b border-gray-200 focus-within:border-[#6C5DD3] transition-colors">
              <select class="w-full outline-none py-1.5 text-sm text-gray-700 bg-transparent appearance-none pr-6 cursor-pointer">
                <option>England</option>
                <option>USA</option>
                <option>France</option>
              </select>
              <svg class="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- ABOUT ME -->
      <div class=" p-6 text-start">
        <h3 class="text-xs font-bold tracking-widest text-black uppercase mb-4">About Me</h3>
        <label class="block text-xs text-gray-400 mb-2 font-semibold">Tell About You</label>
        <textarea
          rows="5"
          class="w-full border border-gray-200 rounded-xl p-3 text-sm text-gray-600 outline-none focus:border-[#6C5DD3] resize-none transition-colors leading-relaxed"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum que laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta su</textarea>
      </div>

      <!-- SKILLS -->
      <div class="bg-white rounded-2xl shadow-sm p-6">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-xs font-bold tracking-widest text-gray-500 uppercase">Skills</h3>
          <button class="text-sm font-semibold text-[#6C5DD3] hover:text-[#5a4cc4] transition">+ Add New Skills</button>
        </div>
        <div class="grid grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-3">
          <div v-for="skill in skillBars" :key="skill.name">
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-xs font-semibold text-[#6C5DD3]">{{ skill.percentage }}%</span>
              <span class="text-xs font-medium text-gray-600">{{ skill.name }}</span>
            </div>
            <div class="relative h-1.5 bg-gray-100 rounded-full overflow-visible">
              <div
                class="h-full bg-[#6C5DD3] rounded-full relative"
                :style="{ width: skill.percentage + '%' }"
              >
                <!-- Drag thumb -->
                <div
                  class="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#6C5DD3] rounded-full border-2 border-white shadow-md shadow-[#6C5DD3]/40"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    
    
  </div>
</template>