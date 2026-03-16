<script setup>
import { ref } from 'vue'
import { 
  ChevronDown, 
  ArrowLeft, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Search,
  MoreHorizontal
} from 'lucide-vue-next'

const newsCards = [
  {
    id: 1,
    title: 'How Jobie is Helping Millions of People Get Back to Work',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400',
    author: 'Jarjit Sigh',
    date: '4 days ago',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    title: 'To Find Your Next Job More Quickly, Tell Your Community You\'re Open to Work',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=400',
    author: 'Jarjit Sigh',
    date: '4 days ago',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 3,
    title: 'Global Diversity Awareness Month: Building an Equitable Workplace Culture For All',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400',
    author: 'Jarjit Sigh',
    date: '4 days ago',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 4,
    title: 'Jobie\'s Story about Helping 10 Million Learners and Counting',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400',
    author: 'Jarjit Sigh',
    date: '4 days ago',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

const activities = [
  { id: 1, type: 'post', user: 'Highspeed Studios', action: 'added a new open position for', target: 'UI Designer', time: '2m ago', color: 'bg-blue-600' },
  { id: 2, type: 'hire', user: 'Superman Studios', action: 'hired some talents', target: '', time: '2m ago', color: 'bg-green-500' },
  { id: 3, type: 'invite', user: 'Congratulations!', action: 'You has been invited to interview at', target: 'Orens Studios.', time: '2m ago', color: 'bg-orange-500', special: 'Check shcedule here' }
]
</script>

<template>
  <div class="p-8  min-h-screen font-['DM_Sans']">
    
    <div class="bg-white rounded-[32px] overflow-hidden flex flex-col md:flex-row mb-10 shadow-sm border border-gray-50">
      <div class="md:w-1/2 relative overflow-hidden bg-emerald-500 flex items-center justify-center p-12">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div class="text-center z-10">
          <h1 class="text-white text-3xl font-bold leading-tight mb-2">What You Need to Know<br>to Get Hired This Month</h1>
          <p class="text-white/80 text-sm tracking-widest italic">~ N O V E M B E R ~</p>
          <div class="grid grid-cols-4 gap-1 w-12 mx-auto mt-6 opacity-60">
            <div v-for="i in 16" :key="i" class="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" class="absolute right-0 bottom-0 h-[90%] object-contain" alt="Featured">
      </div>
      <div class="md:w-1/2 p-10 flex flex-col justify-center">
        <span class="text-[#7252D3] text-xs font-bold uppercase tracking-widest mb-4">Featured</span>
        <h2 class="text-2xl font-bold text-[#1F1F1F] mb-4">What You Need to Know to Get Hired This Month: November 2020</h2>
        <div class="flex items-center gap-4 text-gray-400 text-xs mb-6">
          <span class="font-medium text-gray-600">Samuel Anderson</span>
          <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span>4 days ago</span>
        </div>
        <p class="text-gray-500 text-sm leading-relaxed mb-8 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
        </p>
        <div class="flex items-center justify-between">
          <button class="bg-[#7252D3] text-white px-8 py-3 rounded-2xl font-bold text-sm hover:bg-[#5e41b8] transition-all">Continue Reading</button>
          <div class="flex gap-4">
            <button class="p-2 text-gray-400 hover:text-[#7252D3]"><ArrowLeft class="w-5 h-5" /></button>
            <button class="p-2 text-[#7252D3]"><ArrowRight class="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-8">
      
      <div class="col-span-12 lg:col-span-8">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-xl font-bold text-[#1F1F1F]">Jobie's News Update</h2>
          <button class="flex items-center gap-2 bg-[#F0F2FF] text-[#7252D3] px-4 py-2 rounded-xl text-xs font-bold">
            Newest <ChevronDown class="w-4 h-4" />
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="news in newsCards" :key="news.id" class="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img :src="news.image" class="w-full h-48 object-cover" :alt="news.title">
            <div class="p-6">
              <h3 class="font-bold text-[#1F1F1F] text-base mb-3 leading-snug h-12 line-clamp-2">{{ news.title }}</h3>
              <div class="flex items-center gap-3 text-xs text-gray-400 mb-4">
                <span class="text-gray-600 font-medium">{{ news.author }}</span>
                <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{{ news.date }}</span>
              </div>
              <p class="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-3">
                {{ news.excerpt }}
              </p>
              <button class="text-[#7252D3] font-bold text-xs hover:underline">Continue Reading</button>
            </div>
          </div>
        </div>

        <div class="flex justify-center items-center gap-2 mt-12">
          <button class="p-2 text-[#7252D3]"><ChevronLeft class="w-5 h-5" /></button>
          <button class="w-10 h-10 rounded-full bg-[#7252D3] text-white font-bold text-sm">1</button>
          <button v-for="p in [2,3,4]" :key="p" class="w-10 h-10 rounded-full text-gray-400 font-bold text-sm hover:bg-gray-100 transition-colors">{{ p }}</button>
          <button class="p-2 text-[#7252D3]"><ChevronRight class="w-5 h-5" /></button>
        </div>
      </div>

      <div class="col-span-12 lg:col-span-4 space-y-8">
        
        <div class="bg-white rounded-[32px] p-8 shadow-sm">
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-lg font-bold text-[#1F1F1F]">Jobie's Activity</h2>
            <button class="text-gray-400 text-xs font-medium hover:text-red-500">Clear</button>
          </div>

          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Today</p>

          <div class="space-y-6">
            <div v-for="act in activities" :key="act.id" class="flex gap-4">
              <div :class="act.color" class="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-white">
                <Search v-if="act.type === 'post'" class="w-5 h-5" />
                <span v-else class="font-bold text-lg">{{ act.user[0] }}</span>
              </div>
              <div class="flex-1 border-b border-gray-50 pb-6">
                <p class="text-xs leading-relaxed">
                  <span class="font-bold text-[#1F1F1F]">{{ act.user }}</span> 
                  <span class="text-gray-500 mx-1">{{ act.action }}</span> 
                  <span v-if="act.target" class="font-bold text-[#1F1F1F]">{{ act.target }}</span>
                  <div v-if="act.special" class="text-[#7252D3] font-bold mt-1 cursor-pointer underline">{{ act.special }}</div>
                </p>
                <span class="text-[10px] text-gray-400 block mt-1">{{ act.time }}</span>
              </div>
            </div>
          </div>

          <button class="w-full text-center text-[#7252D3] font-bold text-xs mt-8 py-2 hover:bg-[#F5F7FF] rounded-xl transition-colors">View More</button>
        </div>

        <div class="bg-[#7252D3] rounded-[32px] p-10 relative overflow-hidden text-white group cursor-pointer">
          <div class="absolute top-8 left-8">
            <div class="grid grid-cols-3 gap-1 w-6">
              <div v-for="i in 9" :key="i" class="w-1 h-1 bg-white/40 rounded-full"></div>
            </div>
          </div>
          
          <h3 class="text-2xl font-bold mb-4 relative z-10 leading-snug">Power up your profile's streght with Jobie's Pro</h3>
          <p class="text-white/70 text-xs leading-relaxed mb-8 relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab
          </p>
          
          <button class="bg-white text-[#7252D3] px-6 py-3 rounded-2xl font-bold text-xs flex items-center gap-2 relative z-10 group-hover:scale-105 transition-transform">
            Learn More <ArrowRight class="w-4 h-4" />
          </button>

          <div class="absolute -right-4 -bottom-4 opacity-10 rotate-12">
             <span class="text-[120px] font-black">J</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Text clamp for title consistency */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>