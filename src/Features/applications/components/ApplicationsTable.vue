<script setup>
import { ref, computed } from "vue";

const allApplications = ref([
  {
    id: "#APL-0003",
    dateApplied: "June 1, 2020, 08:22 AM",
    company: "Mosciski Inc.",
    department: "Creative Design Agency",
    companyColor: "#FF6B35",
    companyInitial: "M",
    type: "FREELANCE",
    position: "Intern UI Designer",
    hasPhone: true,
    hasEmail: true,
    status: "Pending",
  },
  {
    id: "#APL-0002",
    dateApplied: "June 1, 2020, 08:22 AM",
    company: "Funk Inc.",
    department: "IT Department",
    companyColor: "#6B7280",
    companyInitial: "F",
    type: "PART TIME",
    position: "Junior UI Designer",
    hasPhone: true,
    hasEmail: false,
    status: "On-Hold",
  },
  {
    id: "#APL-0003",
    dateApplied: "June 1, 2020, 08:22 AM",
    company: "Mosciski Inc.",
    department: "Creative Design Agency",
    companyColor: "#C026D3",
    companyInitial: "M",
    type: "FREELANCE",
    position: "Intern UI Designer",
    hasPhone: false,
    hasEmail: false,
    status: "Pending",
  },
  {
    id: "#APL-0001",
    dateApplied: "June 1, 2020, 08:22 AM",
    company: "Highspeed Studios",
    department: "Creative Design Agency",
    companyColor: "#0EA5E9",
    companyInitial: "H",
    type: "FULLTIME",
    position: "Senior UX Designer",
    hasPhone: true,
    hasEmail: true,
    status: "Candidate",
  },
  {
    id: "#APL-0002",
    dateApplied: "June 1, 2020, 08:22 AM",
    company: "Funk Inc.",
    department: "IT Department",
    companyColor: "#6B7280",
    companyInitial: "F",
    type: "PART TIME",
    position: "Junior UI Designer",
    hasPhone: false,
    hasEmail: true,
    status: "On-Hold",
  },
  {
    id: "#APL-0001",
    dateApplied: "June 1, 2020, 08:22 AM",
    company: "Highspeed Studios",
    department: "Creative Design Agency",
    companyColor: "#10B981",
    companyInitial: "H",
    type: "FULLTIME",
    position: "Senior UX Designer",
    hasPhone: true,
    hasEmail: true,
    status: "Candidate",
  },
]);

const currentPage = ref(3);
const perPage = 10;
const totalData = 160;
const totalPages = Math.ceil(totalData / perPage);

const visiblePages = computed(() => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);
  const start = Math.max(1, currentPage.value - 1);
  const end = Math.min(totalPages, start + 3);
  return pages.slice(start - 1, end);
});

function setPage(page) {
  if (page >= 1 && page <= totalPages) currentPage.value = page;
}

function statusClass(status) {
  if (status === "Candidate")
    return "inline-flex items-center justify-center px-3.5 py-1 rounded-full text-[0.7rem] font-semibold whitespace-nowrap bg-[#40189d] text-white";
  if (status === "On-Hold")
    return "inline-flex items-center justify-center px-3.5 py-1 rounded-full text-[0.7rem] font-semibold whitespace-nowrap border border-amber-400 text-amber-600";
  return "inline-flex items-center justify-center px-3.5 py-1 rounded-full text-[0.7rem] font-semibold whitespace-nowrap border border-gray-300 text-gray-500";
}
</script>

<template>
  <!-- Wrapper -->
  <div class="px-4 pb-6 font-sans">

    <!-- ── Table Card ─────────────────────────────────── -->
    <div class="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(64,24,157,0.07)]">

      <!-- Desktop / Medium table (hidden on sm) -->
      <div class="hidden sm:block overflow-x-auto">
        <table class="w-full border-collapse min-w-[720px]">

          <!-- Head -->
          <thead>
            <tr class="bg-gray-50 border-b border-[#f0eeff]">
              <th class="w-9 pl-5 py-3.5 text-left">
                <input type="checkbox" class="w-[15px] h-[15px] accent-[#40189d] cursor-pointer" />
              </th>
              <th class="py-3.5 px-4 text-left text-[0.7rem] font-semibold uppercase tracking-wider text-gray-400 whitespace-nowrap">ID</th>
              <th class="py-3.5 px-4 text-left text-[0.7rem] font-semibold uppercase tracking-wider text-gray-400 whitespace-nowrap">Date Applied</th>
              <th class="py-3.5 px-4 text-left text-[0.7rem] font-semibold uppercase tracking-wider text-gray-400 whitespace-nowrap">Company</th>
              <th class="py-3.5 px-4 text-left text-[0.7rem] font-semibold uppercase tracking-wider text-gray-400 whitespace-nowrap">Type</th>
              <th class="py-3.5 px-4 text-left text-[0.7rem] font-semibold uppercase tracking-wider text-gray-400 whitespace-nowrap">Position</th>
              <th class="py-3.5 px-4 text-left text-[0.7rem] font-semibold uppercase tracking-wider text-gray-400 whitespace-nowrap">Contact</th>
              <th class="py-3.5 px-4 text-left text-[0.7rem] font-semibold uppercase tracking-wider text-gray-400 whitespace-nowrap">Status</th>
              <th class="py-3.5 px-4"></th>
            </tr>
          </thead>

          <!-- Body -->
          <tbody>
            <tr
              v-for="(app, index) in allApplications"
              :key="index"
              class="border-b border-[#f5f4ff] last:border-none transition-colors duration-150 hover:bg-[#faf8ff]"
            >
              <!-- Checkbox -->
              <td class="pl-5 py-3.5 align-middle w-9">
                <input type="checkbox" class="w-[15px] h-[15px] accent-[#40189d] cursor-pointer" />
              </td>

              <!-- ID -->
              <td class="px-4 py-3.5 align-middle text-[0.78rem] font-semibold text-gray-800 whitespace-nowrap">
                {{ app.id }}
              </td>

              <!-- Date Applied -->
              <td class="px-4 py-3.5 align-middle text-[0.74rem] text-gray-500 whitespace-nowrap">
                {{ app.dateApplied }}
              </td>

              <!-- Company -->
              <td class="px-4 py-3.5 align-middle">
                <div class="flex items-center gap-2.5">
                  <div
                    class="w-9 h-9 rounded-[10px] flex items-center justify-center text-white font-bold text-[0.85rem] shrink-0 md:w-[30px] md:h-[30px] md:rounded-[8px]"
                    :style="{ backgroundColor: app.companyColor }"
                  >
                    {{ app.companyInitial }}
                  </div>
                  <div class="flex flex-col gap-0.5">
                    <span class="font-semibold text-[0.78rem] text-gray-800 whitespace-nowrap md:text-[0.73rem]">
                      {{ app.company }}
                    </span>
                    <span class="text-[0.68rem] text-gray-400 whitespace-nowrap md:text-[0.63rem]">
                      {{ app.department }}
                    </span>
                  </div>
                </div>
              </td>

              <!-- Type -->
              <td class="px-4 py-3.5 align-middle text-[0.74rem] font-semibold text-gray-700 whitespace-nowrap tracking-wide">
                {{ app.type }}
              </td>

              <!-- Position -->
              <td class="px-4 py-3.5 align-middle text-[0.78rem] text-gray-700 whitespace-nowrap">
                {{ app.position }}
              </td>

              <!-- Contact -->
              <td class="px-4 py-3.5 align-middle">
                <div class="flex items-center gap-2">
                  <span
                    v-if="app.hasPhone"
                    class="material-symbols-outlined text-[18px] text-[#40189d] cursor-pointer rounded-full p-1 transition-opacity hover:opacity-60"
                    title="Phone"
                  >call</span>
                  <span
                    v-if="app.hasEmail"
                    class="material-symbols-outlined text-[18px] text-[#40189d] cursor-pointer rounded-full p-1 transition-opacity hover:opacity-60"
                    title="Email"
                  >mail</span>
                  <span
                    v-if="!app.hasPhone && !app.hasEmail"
                    class="material-symbols-outlined text-[18px] text-[#40189d] cursor-pointer rounded-full p-1 transition-opacity hover:opacity-60"
                    title="Call"
                  >call</span>
                </div>
              </td>

              <!-- Status -->
              <td class="px-4 py-3.5 align-middle">
                <span :class="statusClass(app.status)">{{ app.status }}</span>
              </td>

              <!-- More -->
              <td class="px-4 py-3.5 align-middle">
                <span class="material-symbols-outlined text-[20px] text-gray-400 cursor-pointer transition-colors hover:text-[#40189d]">
                  more_vert
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ── Mobile Card View (sm only) ─────────────── -->
      <div class="block sm:hidden">
        <div
          v-for="(app, index) in allApplications"
          :key="'m' + index"
          class="px-4 py-3.5 border-b border-[#f0eeff] last:border-none"
        >
          <!-- Top row: company + status -->
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2.5">
              <div
                class="w-8 h-8 rounded-[8px] flex items-center justify-center text-white font-bold text-sm shrink-0"
                :style="{ backgroundColor: app.companyColor }"
              >
                {{ app.companyInitial }}
              </div>
              <div class="flex flex-col gap-0.5">
                <span class="font-semibold text-[0.78rem] text-gray-800">{{ app.company }}</span>
                <span class="text-[0.65rem] text-gray-400">{{ app.department }}</span>
              </div>
            </div>
            <span :class="statusClass(app.status)">{{ app.status }}</span>
          </div>

          <!-- Grid body -->
          <div class="grid grid-cols-2 gap-2 mb-3">
            <div class="flex flex-col gap-0.5">
              <span class="text-[0.62rem] text-gray-400 uppercase font-semibold tracking-wider">ID</span>
              <span class="text-[0.75rem] font-semibold text-gray-800">{{ app.id }}</span>
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-[0.62rem] text-gray-400 uppercase font-semibold tracking-wider">Type</span>
              <span class="text-[0.75rem] font-medium text-gray-800">{{ app.type }}</span>
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-[0.62rem] text-gray-400 uppercase font-semibold tracking-wider">Position</span>
              <span class="text-[0.75rem] font-medium text-gray-800">{{ app.position }}</span>
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-[0.62rem] text-gray-400 uppercase font-semibold tracking-wider">Applied</span>
              <span class="text-[0.72rem] text-gray-500">{{ app.dateApplied }}</span>
            </div>
          </div>

          <!-- Footer: contact + more -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span
                v-if="app.hasPhone"
                class="material-symbols-outlined text-[18px] text-[#40189d] cursor-pointer"
              >call</span>
              <span
                v-if="app.hasEmail"
                class="material-symbols-outlined text-[18px] text-[#40189d] cursor-pointer"
              >mail</span>
              <span
                v-if="!app.hasPhone && !app.hasEmail"
                class="material-symbols-outlined text-[18px] text-[#40189d] cursor-pointer"
              >call</span>
            </div>
            <span class="material-symbols-outlined text-[20px] text-gray-400 cursor-pointer">more_vert</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Pagination ──────────────────────────────────── -->
    <div class="flex items-center justify-between flex-wrap gap-3 pt-4 px-1 sm:flex-row flex-col sm:text-left text-center">
      <span class="text-[0.75rem] text-gray-500">
        Showing {{ perPage }} from {{ totalData }} data
      </span>

      <div class="flex items-center flex-wrap gap-1.5">
        <!-- Previous -->
        <button
          class="flex items-center gap-1 px-2.5 py-2 border border-gray-200 bg-white text-gray-700 rounded-lg text-[0.75rem] font-medium cursor-pointer transition-all hover:border-[#40189d] hover:text-[#40189d] disabled:opacity-40 disabled:cursor-not-allowed"
          :disabled="currentPage === 1"
          @click="setPage(currentPage - 1)"
        >
          <span class="material-symbols-outlined text-[16px]">keyboard_double_arrow_left</span>
          <span class="hidden md:inline text-[0.75rem]">Previous</span>
        </button>

        <!-- Page numbers -->
        <button
          v-for="page in visiblePages"
          :key="page"
          class="min-w-[34px] h-[34px] flex items-center justify-center border rounded-lg text-[0.78rem] font-medium cursor-pointer transition-all"
          :class="page === currentPage
            ? 'bg-[#40189d] text-white border-[#40189d]'
            : 'border-gray-200 bg-white text-gray-700 hover:border-[#40189d] hover:text-[#40189d]'"
          @click="setPage(page)"
        >
          {{ page }}
        </button>

        <!-- Next -->
        <button
          class="flex items-center gap-1 px-2.5 py-2 border border-gray-200 bg-white text-gray-700 rounded-lg text-[0.75rem] font-medium cursor-pointer transition-all hover:border-[#40189d] hover:text-[#40189d] disabled:opacity-40 disabled:cursor-not-allowed"
          :disabled="currentPage === totalPages"
          @click="setPage(currentPage + 1)"
        >
          <span class="hidden md:inline text-[0.75rem]">Next</span>
          <span class="material-symbols-outlined text-[16px]">keyboard_double_arrow_right</span>
        </button>
      </div>
    </div>

  </div>
</template>
