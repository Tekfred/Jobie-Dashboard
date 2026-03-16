<script setup>
defineProps({
  label:       { type: String, required: true },
  value:       { type: String, required: true },
  iconBg:      { type: String, default: '#EEF3FF' },
  iconColor:   { type: String, default: '#5B2BE6' },
  iconPath:    { type: String, default: '' },
  footerText:  { type: String, default: '' },
  footerColor: { type: String, default: '#8A94A8' },
  trendUp:     { type: Boolean, default: false },
  animClass:   { type: String, default: '' },
})
</script>





<template>
  <div
    class="stat-card group"
    :class="animClass"
  >
    <span class="stat-label">{{ label }}</span>

    <div class="flex items-end justify-between mt-1">
      <span class="stat-value">{{ value }}</span>
      <div class="stat-icon" :style="{ background: iconBg }">
        <svg
          width="20" height="20" viewBox="0 0 24 24"
          fill="none" :stroke="iconColor" stroke-width="2"
          v-html="iconPath"
        ></svg>
      </div>
    </div>

    <div class="stat-footer" :style="{ color: footerColor }">
      <svg v-if="trendUp"
        width="12" height="12" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
      <span>{{ footerText }}</span>
    </div>
  </div>
</template>



<style scoped>
.stat-card {
  background: var(--color-surface);
  border-radius: var(--radius-card);
  padding: 20px 22px;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: default;
  transition: box-shadow 0.2s, transform 0.18s;
}
.stat-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

.stat-label {
  font-size: 11px;
  font-weight: 700;
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

.stat-value {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 800;
  color: var(--color-text);
  letter-spacing: -1px;
  line-height: 1;
}

.stat-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-footer {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 600;
  margin-top: 4px;
}
</style>
