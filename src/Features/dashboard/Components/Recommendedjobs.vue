<script setup>
import { ref, onMounted, nextTick } from 'vue'

// GSAP loaded via CDN in index.html — access via window.gsap
const gsap = window.gsap

const detailJobs = ref([
  {
    id: 1,
    companyName: 'Maximoz Team',
    title: 'Database Programmer',
    prices: '$14,000 - $25,000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
    button: 'REMOTE',
    location: 'London, England',
    iconBg: 'bg-blue-600',
  },
  {
    id: 2,
    companyName: 'Klean n Clin Studios',
    title: 'Senior Programmer',
    prices: '$14,000 - $25,000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
    button: 'PART TIME',
    location: 'Manchester, England',
    iconBg: 'bg-orange-500',
  },
  {
    id: 3,
    companyName: 'Maximoz Team',
    title: 'Intern UX Designer',
    prices: '$14,000 - $25,000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
    button: 'FULLTIME',
    location: 'London, England',
    iconBg: 'bg-purple-500',
  },
])

// Track which card index is current/prev/next
const currentIndex = ref(0)
const isAnimating = ref(false)

const cardsWrapper = ref(null)
const btnLeft = ref(null)
const btnRight = ref(null)

function getRole(cardIndex) {
  const total = detailJobs.value.length
  const curr = currentIndex.value
  if (cardIndex === curr) return 'current'
  if (cardIndex === (curr - 1 + total) % total) return 'previous'
  if (cardIndex === (curr + 1) % total) return 'next'
  return 'hidden'
}

function getCardClasses(index) {
  const role = getRole(index)
  const base = 'job-card absolute left-1/2 top-1/2 bg-white rounded-2xl shadow-sm py-5 px-3 flex flex-col text-start justify-between'
  if (role === 'current') return base + ' card--current'
  if (role === 'previous') return base + ' card--previous'
  if (role === 'next') return base + ' card--next'
  return base + ' card--hidden'
}

function swapCards(direction) {
  if (isAnimating.value) return
  isAnimating.value = true

  const total = detailJobs.value.length
  const cards = cardsWrapper.value.querySelectorAll('.job-card')
  const currIdx = currentIndex.value
  const prevIdx = (currIdx - 1 + total) % total
  const nextIdx = (currIdx + 1) % total

  const currentCard = cards[currIdx]
  const previousCard = cards[prevIdx]
  const nextCard = cards[nextIdx]

  // Pop texts: title, button, location on current card
  const currentTexts = currentCard.querySelectorAll('.pop-text')

  gsap.timeline()
    // Disable buttons
    .to([btnLeft.value, btnRight.value], { duration: 0.2, opacity: 0.4, pointerEvents: 'none' })

    // Fly out current card's pop-text upward
    .to(currentTexts, {
      duration: 0.4,
      stagger: 0.1,
      translateY: '-80px',
      opacity: 0,
    }, '-=0.1')

    // Swap index mid-animation
    .call(() => {
      if (direction === 'right') {
        currentIndex.value = nextIdx
      } else {
        currentIndex.value = prevIdx
      }
    })

    // Wait a tick so Vue re-renders new classes
    .call(() => {
      nextTick(() => {
        // Find the new current card's pop-texts and animate them in
        const newCurrentCard = cardsWrapper.value.querySelectorAll('.job-card')[currentIndex.value]
        const newTexts = newCurrentCard.querySelectorAll('.pop-text')

        gsap.fromTo(
          newTexts,
          { opacity: 0, translateY: '40px' },
          {
            duration: 0.4,
            stagger: 0.1,
            translateY: '0px',
            opacity: 1,
          }
        )
      })
    })

    // Re-enable buttons
    .to([btnLeft.value, btnRight.value], {
      delay: 0.5,
      duration: 0.3,
      opacity: 1,
      pointerEvents: 'all',
      onComplete: () => { isAnimating.value = false }
    })
}

// Pointer tilt on current card
function onPointerMove(e, index) {
  if (getRole(index) !== 'current') return
  const card = cardsWrapper.value.querySelectorAll('.job-card')[index]
  const box = card.getBoundingClientRect()
  const centerX = box.left + box.width / 2
  const angle = Math.atan2(e.pageX - centerX, 0) * (20 / Math.PI)
  gsap.set(card, { rotateY: `${angle}deg` })
}

function onPointerOut(e, index) {
  if (getRole(index) !== 'current') return
  const card = cardsWrapper.value.querySelectorAll('.job-card')[index]
  gsap.to(card, { duration: 0.4, rotateY: '0deg' })
}

// Entry animation on mount
onMounted(() => {
  const cards = cardsWrapper.value.querySelectorAll('.job-card')

  // Start cards off-screen below
  gsap.set(cards, { translateY: '100vh' })

  // Set initial pop-texts invisible
  const currentCard = cards[currentIndex.value]
  gsap.set(currentCard.querySelectorAll('.pop-text'), { translateY: '40px', opacity: 0 })
  gsap.set([btnLeft.value, btnRight.value], { opacity: 0, pointerEvents: 'none' })

  gsap.timeline()
    // Drop cards in staggered from right
    .to(cards, {
      delay: 0.2,
      duration: 0.6,
      stagger: { ease: 'power4.inOut', from: 'right', amount: 0.15 },
      translateY: '0%',
    })
    // Pop-text of current card flies in
    .to(currentCard.querySelectorAll('.pop-text'), {
      delay: 0.3,
      duration: 0.4,
      stagger: 0.1,
      opacity: 1,
      translateY: 0,
    })
    // Reveal buttons
    .to([btnLeft.value, btnRight.value], {
      duration: 0.3,
      opacity: 1,
      pointerEvents: 'all',
    }, '-=0.3')
})
</script>

<template>
  <main class="p-6 flex items-center justify-center min-h-screen bg-gray-100">

    <!-- Slider container -->
    <div class="relative flex items-center justify-center w-full" style="perspective: 1000px;">

      <!-- Left Button -->
      <button
        ref="btnLeft"
        @click="swapCards('left')"
        class="nav-btn z-50 absolute left-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white transition-all"
        style="opacity:0"
      >
        <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>

      <!-- Cards Wrapper -->
      <div ref="cardsWrapper" class="cards-wrapper relative" style="width: 260px; height: 360px;">

        <div
          v-for="(job, index) in detailJobs"
          :key="job.id"
          :class="getCardClasses(index)"
          style="width: 240px; height: 340px; transform-style: preserve-3d;"
          @pointermove="onPointerMove($event, index)"
          @pointerout="onPointerOut($event, index)"
        >
          <!-- Top Row: Company + Icon -->
          <div class="flex items-start justify-between gap-2 mb-3">
            <div>
              <p class="text-xs font-normal text-gray-400 mb-1">{{ job.companyName }}</p>
              <!-- Job title — pop-text -->
              <p class="pop-text text-base font-bold text-gray-800">{{ job.title }}</p>
            </div>
            <!-- Company Icon -->
            <div :class="[job.iconBg, 'w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ml-3']">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
          </div>

          <!-- Salary -->
          <p class="text-sm font-semibold text-[#40189d] mb-3">{{ job.prices }}</p>

          <!-- Description -->
          <p class="text-xs leading-relaxed mb-2 mt-5 line-clamp-3">{{ job.message }}</p>

          <!-- Bottom Row: Button + Location — both pop-texts -->
          <div class="flex items-center justify-between mt-7">
            <button class="pop-text text-sm font-semibold text-[#40189d] bg-[#e9e0ff] hover:bg-[#d8c9ff] px-4 py-2.5 rounded-full cursor-pointer">
              {{ job.button }}
            </button>
            <span class="pop-text text-xs text-[#313141] font-bold">{{ job.location }}</span>
          </div>
        </div>

      </div>

      <!-- Right Button -->
      <button
        ref="btnRight"
        @click="swapCards('right')"
        class="nav-btn z-50 absolute right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white transition-all"
        style="opacity:0"
      >
        <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

    </div>
  </main>
</template>

<style scoped>
/* Card position states — mirroring the Voyage Slider's CSS variable approach */
.job-card {
  transition: transform 800ms ease, opacity 800ms ease, box-shadow 200ms ease;
  transform-origin: center center;
  will-change: transform, opacity;
  overflow: hidden;
}

/* Current: centered, slightly scaled up, full opacity */
.card--current {
  transform: translate(-50%, -50%) translateX(0) rotateY(0deg) scale(1.08);
  opacity: 1;
  z-index: 30;
  box-shadow: 0 20px 50px rgba(0,0,0,0.18);
  pointer-events: all;
}

/* Previous: offset left, rotated, dimmed */
.card--previous {
  transform: translate(-50%, -50%) translateX(-230px) rotateY(22deg) scale(0.88);
  opacity: 0.55;
  z-index: 20;
  pointer-events: none;
}

/* Next: offset right, rotated opposite, dimmed */
.card--next {
  transform: translate(-50%, -50%) translateX(230px) rotateY(-22deg) scale(0.88);
  opacity: 0.55;
  z-index: 20;
  pointer-events: none;
}

/* Hidden (4th+ cards) */
.card--hidden {
  opacity: 0;
  pointer-events: none;
  z-index: 1;
  transform: translate(-50%, -50%) translateX(0) scale(0.7);
}

/* Darken overlay on non-current cards — matches voyage slider ::before */
.card--previous::before,
.card--next::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.45);
  z-index: 10;
  border-radius: 1rem;
  pointer-events: none;
}

/* Pop-texts start visible on current, hidden on others */
.card--previous .pop-text,
.card--next .pop-text,
.card--hidden .pop-text {
  opacity: 0;
}

.card--current .pop-text {
  opacity: 1;
}

/* Nav button hover scale */
.nav-btn:hover {
  transform: scale(1.1);
}
</style>