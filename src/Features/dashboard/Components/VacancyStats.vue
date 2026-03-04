<script setup>
import { ref, computed } from 'vue'
import { Line } from 'vue-chartjs'
import { ChevronDown } from 'lucide-vue-next'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

// --- CUSTOM PLUGIN FOR THE VERTICAL LINE ---
const verticalLinePlugin = {
  id: 'verticalLine',
  afterDraw: (chart) => {
    if (chart.tooltip?._active?.length) {
      const { ctx } = chart;
      const activePoint = chart.tooltip._active[0];
      const { x } = activePoint.element;
      const topY = chart.scales.y.top;
      const bottomY = chart.scales.y.bottom;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#e5e7eb'; // Light gray dashed line
      ctx.setLineDash([6, 6]);
      ctx.stroke();
      ctx.restore();
    }
  }
}

const showApplications = ref(true)
const showInterviews = ref(true)
const showRejected = ref(false)

const chartData = computed(() => {
  const datasets = []

  if (showApplications.value) {
    datasets.push({
      label: 'Application Sent',
      data: [30, 72, 45, 38, 42, 50, 35, 37, 20, 15],
      borderColor: '#7252D3',
      backgroundColor: 'transparent',
      borderWidth: 3,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointBackgroundColor: '#7252D3',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
    })
  }

  if (showInterviews.value) {
    datasets.push({
      label: 'Interviews',
      data: [20, 28, 35, 30, 32, 35, 33, 28, 15, 10],
      borderColor: '#00D084',
      backgroundColor: 'transparent',
      borderWidth: 3,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointBackgroundColor: '#00D084',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
    })
  }

  if (showRejected.value) {
    datasets.push({
      label: 'Rejected',
      data: [5, 8, 12, 15, 10, 14, 18, 20, 12, 8],
      borderColor: '#FF5B5B',
      backgroundColor: 'transparent',
      borderWidth: 3,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointBackgroundColor: '#FF5B5B',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
    })
  }

  return {
    labels: ['Week 01', 'Week 02', 'Week 03', 'Week 04', 'Week 05', 'Week 06', 'Week 07', 'Week 08', 'Week 09', 'Week 10'],
    datasets
  }
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: '#fff',
      titleColor: '#000',
      bodyColor: '#666',
      borderWidth: 1,
      borderColor: '#eee',
      padding: 12,
      displayColors: true,
      cornerRadius: 10,
    }
  },
  // ADD THE PLUGIN HERE
  plugins: [verticalLinePlugin],
  scales: {
    y: {
      border: { display: false },
      grid: { color: '#f0f0f0', drawTicks: false },
      ticks: { color: '#9ca3af', font: { size: 12 } }
    },
    x: {
      border: { display: false },
      grid: { display: false },
      ticks: { color: '#9ca3af', font: { size: 12 } }
    }
  }
}
</script>

<template>
  <main class="w-full">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-bold text-gray-800">Vacancy Stats</h2>
      
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <span class="text-sm font-medium text-gray-500">Application Sent</span>
          <button 
            @click="showApplications = !showApplications"
            :class="showApplications ? 'bg-[#7252D3]' : 'bg-gray-200'"
            class="w-10 h-5 rounded-full relative transition-colors"
          >
            <div :class="showApplications ? 'translate-x-5' : 'translate-x-1'" class="w-3 h-3 bg-white rounded-full transition-transform mt-px ml-px"></div>
          </button>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-sm font-medium text-gray-500">Interviews</span>
          <button 
            @click="showInterviews = !showInterviews"
            :class="showInterviews ? 'bg-[#7252D3]' : 'bg-gray-200'"
            class="w-10 h-5 rounded-full relative transition-colors"
          >
            <div :class="showInterviews ? 'translate-x-5' : 'translate-x-1'" class="w-3 h-3 bg-white rounded-full transition-transform mt-px ml-px"></div>
          </button>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-sm font-medium text-gray-500">Rejected</span>
          <button 
            @click="showRejected = !showRejected"
            :class="showRejected ? 'bg-[#7252D3]' : 'bg-gray-200'"
            class="w-10 h-5 rounded-full relative transition-colors"
          >
            <div :class="showRejected ? 'translate-x-5' : 'translate-x-1'" class="w-3 h-3 bg-white rounded-full transition-transform mt-px ml-px"></div>
          </button>
        </div>

        <button class="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm font-medium">
          This Month <ChevronDown class="w-4 h-4" />
        </button>
      </div>
    </div>

    <div class="h-[350px] w-full mt-4">
      <Line :data="chartData" :options="chartOptions" :plugins="[verticalLinePlugin]" />
    </div>

    <div class="flex justify-center gap-8 mt-6">
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-[#7252D3]"></div>
        <span class="text-sm text-gray-600">Application Sent</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-[#00D084]"></div>
        <span class="text-sm text-gray-600">Interviews</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-[#FF5B5B]"></div>
        <span class="text-sm text-gray-600">Rejected</span>
      </div>
    </div>
  </main>
</template>