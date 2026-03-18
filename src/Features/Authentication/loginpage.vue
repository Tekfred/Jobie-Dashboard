<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const activeTab = ref("email")
const showPassword = ref(false)

const userEmail = ref("")
const userPhone = ref("")
const password = ref("")

const toastMessage = ref("")
const toastType = ref("success")
const showToast = ref(false)

const triggerToast = (msg, type = "success") => {
  toastMessage.value = msg
  toastType.value = type
  showToast.value = true
  setTimeout(() => (showToast.value = false), 2500)
}

const handleLogin = () => {
  const id = activeTab.value === "email" ? userEmail.value : userPhone.value

  if ( id === "admins@gmail.com" && password.value === "!!Exh-dR3$") {
    localStorage.setItem("auth", "true")

    triggerToast("Welcome back 🎉", "success")
    
    setTimeout(() => {
  router.push("/app/dashboard")   // ← direct to the protected child
}, 1200)
   
  } else {
    triggerToast("Invalid credentials ❌", "error")
  }
}

const setTab = (tab) => (activeTab.value = tab)
</script>

<template>
  <div class="min-h-screen bg-[#F5F6FA] flex">

    <div
      class="hidden lg:flex lg:w-1/2 relative overflow-hidden
             bg-linear-to-br from-[#5B2DD1] to-[#7A5AF8] text-white"
    >
      <div class="absolute inset-0 opacity-20">
        <div class="absolute w-96 h-96 bg-white rounded-full -top-24 -left-24"></div>
        <div class="absolute w-80 h-80 bg-white rounded-full top-1/3 right-[-120px]"></div>
        <div class="absolute w-72 h-72 bg-white rounded-full bottom-[-80px] left-1/4"></div>
      </div>

      <div class="relative z-10 flex flex-col justify-center px-16 xl:px-24">
        <div class="flex items-center gap-3 mb-14">
          <div class="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center font-bold text-xl">
            J
          </div>
          <span class="text-2xl font-semibold">Jobie</span>
        </div>

        <h1 class="text-5xl font-bold leading-tight mb-6">
          Find Your Dream <br />
          Job Today
        </h1>

        <p class="text-white/80 text-lg max-w-md mb-16">
          Connect with thousands of employers and discover opportunities
          that match your skills and aspirations.
        </p>

        <div class="flex gap-16">
          <div>
            <div class="text-3xl font-bold">45K+</div>
            <div class="text-white/70 text-sm">Active Jobs</div>
          </div>
          <div>
            <div class="text-3xl font-bold">12K+</div>
            <div class="text-white/70 text-sm">Companies</div>
          </div>
          <div>
            <div class="text-3xl font-bold">98%</div>
            <div class="text-white/70 text-sm">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
      <div class="w-full max-w-md">

        <div class="lg:hidden flex items-center gap-3 mb-10">
          <div class="w-10 h-10 rounded-xl bg-[#5B2DD1] text-white flex items-center justify-center font-bold">
            J
          </div>
          <span class="text-xl font-semibold text-[#5B2DD1]">Jobie</span>
        </div>

        <h2 class="text-3xl font-bold text-[#111827] mb-2">
          Welcome Back <span>👋</span>
        </h2>
        <p class="text-gray-500 mb-8">
          Sign in to continue to your dashboard
        </p>

        <div class="grid grid-cols-2 gap-4 mb-8">
          <button type="button" class="bg-white border border-gray-200 rounded-xl py-3 font-medium hover:bg-gray-50 transition">Google</button>
          <button type="button" class="bg-white border border-gray-200 rounded-xl py-3 font-medium hover:bg-gray-50 transition">Apple</button>
        </div>

        <div class="flex items-center gap-4 mb-8">
          <div class="flex-1 h-px bg-gray-200"></div>
          <span class="text-xs text-gray-400 tracking-wider">OR CONTINUE WITH</span>
          <div class="flex-1 h-px bg-gray-200"></div>
        </div>

        <div class="bg-[#ECEEF3] rounded-xl p-1 flex mb-8">
          <button   
            type="button"
            @click="setTab('email')"
            :class="activeTab === 'email' ? 'bg-white shadow text-gray-800' : 'text-gray-500'"
            class="flex-1 py-2.5 rounded-lg text-sm font-medium transition"
          >
            ✉️ Email
          </button>
          <button
            type="button"
            @click="setTab('phone')"
            :class="activeTab === 'phone' ? 'bg-white shadow text-gray-800' : 'text-gray-500'"
            class="flex-1 py-2.5 rounded-lg text-sm font-medium transition"
          >
            📞 Phone
          </button>
        </div>

        <form  class="space-y-6" @submit.prevent="handleLogin" >

          <div v-if="activeTab === 'email'">
            <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div class="relative">
              <input
                v-model="userEmail"
                type="email"
                placeholder="admin"
                class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5B2DD1]/30"
              />
            </div>
          </div>

          <div v-else>
            <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <div class="relative">
              <input
                v-model="userphone"
                type="tel"
                placeholder="+233 55 123 4567"
                class="w-full bg-whit e border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5B2DD1]/30"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div class="relative">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter your password"
                class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5B2DD1]/30 pr-12"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-4 top-3.5 text-gray-400"
              >
                👁️
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center gap-2 text-gray-600">
              <input type="checkbox" class="accent-[#5B2DD1]" />
              Remember me
            </label>
            <a href="#" class="text-[#5B2DD1] font-medium">
              Forgot password?
            </a>
          </div>

          <button type="submit" class="w-full bg-[#5B2DD1] hover:bg-[#4c24b8] text-white font-semibold
          py-3 rounded-xl transition shadow-lg shadow-[#5B2DD1]/20">
            Sign In →
          </button>

          <div
            v-if="showToast"
            class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg text-sm font-medium transition-all duration-300 "
            :class="toastType === 'success' ? 'bg-[#181D31] text-white' : 'bg-red-600 text-white'"
          >
            {{ toastMessage }}
          </div>
        </form>

        <p class="text-center text-gray-500 text-sm mt-10">
          Don't have an account?
          <a href="#" class="text-[#5B2DD1] font-semibold">Create Account</a>
        </p>
      </div>
    </div>
  </div>
</template>