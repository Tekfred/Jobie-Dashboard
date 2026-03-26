
<script setup>
import { ref, computed } from 'vue'

const showDetails = ref(false)

const W = 700
const H = 130
const PAD_TOP = 8
const PAD_BTM = 18
const chartH = H - PAD_TOP - PAD_BTM

const viewPts = [55,60,72,68,80,74,85,78,65,70,62,75,58]
const hirePts = [12,18,15,22,20,25,18,30,22,26,20,28,24]
const gridYs  = [20, 50, 80, 108]

const xLabels = computed(() =>
  Array.from({ length: 13 }, (_, i) => ({
    label: String(i + 1).padStart(2, '0'),
    pos: (i / 12) * (W - 40) + 20,
  }))
)

function pts2coords(pts) {
  return pts.map((v, i) => {
    const x = (i / (pts.length - 1)) * (W - 40) + 20
    const y = PAD_TOP + (1 - v / 100) * chartH
    return [x, y]
  })
}

function smoothPath(coords) {
  return coords.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(' ')
}

function areaPath(coords) {
  const line = smoothPath(coords)
  const last = coords[coords.length - 1]
  const first = coords[0]
  return `${line} L${last[0]},${H - PAD_BTM} L${first[0]},${H - PAD_BTM} Z`
}

const viewLine = computed(() => smoothPath(pts2coords(viewPts)))
const hireLine = computed(() => smoothPath(pts2coords(hirePts)))
const viewArea = computed(() => areaPath(pts2coords(viewPts)))
const hireArea = computed(() => areaPath(pts2coords(hirePts)))
</script>



<template>
  <div class="card anim-2">
    <!-- Header -->
    <div class="flex items-center gap-3 flex-wrap mb-4">
      <h2 class="card-title flex-1">Visitor Graph</h2>

      <span class="text-[13px] font-semibold text-muted">Show Details</span>

      <!-- Toggle -->
      <button
        class="toggle"
        :class="{ 'toggle--on': showDetails }"
        @click="showDetails = !showDetails"
        aria-label="Toggle details"
      />

      <!-- Period selector -->
      <select class="period-select">
        <option>Weekly</option>
        <option>Monthly</option>
        <option>Yearly</option>
      </select>
    </div>

    <!-- Legend dots -->
    <div class="flex items-center gap-5 mb-3">
      <div class="flex items-center gap-2">
        <span class="series-dot" style="background:#4B1FE8"/>
        <span class="series-lbl">View Profile</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="series-dot" style="background:var(--color-blue)"/>
        <span class="series-lbl">Hire</span>
      </div>
    </div>

    <!-- SVG chart -->
    <div class="chart-wrap">
      <svg
        :viewBox="`0 0 ${W} ${H}`"
        preserveAspectRatio="none"
        class="w-full"
        :style="{ height: '130px' }"
      >
        <defs>
          <linearGradient id="gView" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stop-color="#4B1FE8" stop-opacity="0.22"/>
            <stop offset="100%" stop-color="#4B1FE8" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="gHire" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stop-color="#4EB4FF" stop-opacity="0.22"/>
            <stop offset="100%" stop-color="#4EB4FF" stop-opacity="0"/>
          </linearGradient>
        </defs>

        <!-- Grid lines -->
        <line
          v-for="y in gridYs" :key="y"
          x1="0" :y1="y" :x2="W" :y2="y"
          stroke="var(--color-border)" stroke-width="1"
        />

        <!-- Area fills -->
        <path :d="viewArea" fill="url(#gView)"/>
        <path :d="hireArea" fill="url(#gHire)"/>

        <!-- Lines -->
        <path :d="viewLine" class="line" stroke="#4B1FE8"/>
        <path :d="hireLine" class="line" stroke="var(--color-blue)"/>

        <!-- X-axis labels -->
        <text
          v-for="(x, i) in xLabels" :key="i"
          :x="x.pos" :y="H - 2"
          text-anchor="middle"
          class="axis-label"
        >{{ x.label }}</text>
      </svg>
    </div>
  </div>
</template>

<style scoped>


.card {
  background: var(--color-surface);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  padding: 22px 24px;
  transition: box-shadow 0.2s;
}
.card:hover { box-shadow: var(--shadow-hover); }

.card-title {
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 700;
  color: var(--color-text);
}

/* Toggle */
.toggle {
  width: 40px; height: 22px;
  background: #D0D4E8;
  border: none;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
  flex-shrink: 0;
}
.toggle::after {
  content: '';
  width: 16px; height: 16px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 3px; left: 3px;
  transition: left 0.2s;
  box-shadow: 0 1px 4px rgba(0,0,0,0.15);
}
.toggle--on { background: var(--color-brand); }
.toggle--on::after { left: 21px; }

/* Period dropdown */
.period-select {
  background: var(--color-bg);
  border: none;
  border-radius: 20px;
  padding: 6px 14px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  color: var(--color-text);
  cursor: pointer;
  outline: none;
}

/* Series */
.series-dot {
  display: inline-block;
  width: 10px; height: 10px;
  border-radius: 50%;
}
.series-lbl {
  font-size: 12.5px;
  font-weight: 600;
  color: var(--color-muted);
}

/* SVG */
.line {
  fill: none;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.axis-label {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  fill: var(--color-muted);
}

.chart-wrap { overflow: hidden; }
</style>
