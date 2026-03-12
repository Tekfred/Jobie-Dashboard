<script setup>

</script>

<template>

    <main class="min-h-screen flex items-center justify-center relative overflow-hidden">

  <!-- Broken Glass / Star Burst Animated Background -->
  <svg class="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Shard gradients -->
      <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6366f1" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#a855f7" stop-opacity="0.2"/>
      </linearGradient>
      <linearGradient id="g2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ec4899" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#6366f1" stop-opacity="0.15"/>
      </linearGradient>
      <linearGradient id="g3" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.2"/>
      </linearGradient>
      <linearGradient id="g4" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#ef4444" stop-opacity="0.15"/>
      </linearGradient>
      <linearGradient id="g5" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.2"/>
      </linearGradient>
      <linearGradient id="g6" x1="100%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stop-color="#a855f7" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="#ec4899" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="g7" x1="0%" y1="0%" x2="100%" y2="50%">
        <stop offset="0%" stop-color="#f97316" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#6366f1" stop-opacity="0.15"/>
      </linearGradient>
      <linearGradient id="g8" x1="50%" y1="100%" x2="50%" y2="0%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.15"/>
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

   

    <!-- CENTER BURST POINT ~400,300 -->

    <!-- Shard 1 - top right large -->
    <polygon class="shard s1" points="400,300 620,80 780,200 550,320" fill="url(#g1)" filter="url(#glow)"/>
    <!-- Shard 2 - right -->
    <polygon class="shard s2" points="400,300 780,200 800,420 560,380" fill="url(#g2)" filter="url(#glow)"/>
    <!-- Shard 3 - bottom right -->
    <polygon class="shard s3" points="400,300 560,380 800,420 680,600 420,520" fill="url(#g3)" filter="url(#glow)"/>
    <!-- Shard 4 - bottom -->
    <polygon class="shard s4" points="400,300 420,520 250,580 180,420" fill="url(#g4)" filter="url(#glow)"/>
    <!-- Shard 5 - bottom left -->
    <polygon class="shard s5" points="400,300 180,420 0,500 0,600 250,580" fill="url(#g5)" filter="url(#glow)"/>
    <!-- Shard 6 - left -->
    <polygon class="shard s6" points="400,300 0,300 0,500 180,420" fill="url(#g6)" filter="url(#glow)"/>
    <!-- Shard 7 - top left -->
    <polygon class="shard s7" points="400,300 0,100 0,300 200,180" fill="url(#g7)" filter="url(#glow)"/>
    <!-- Shard 8 - top -->
    <polygon class="shard s8" points="400,300 200,180 0,100 150,0 400,0 620,80" fill="url(#g8)" filter="url(#glow)"/>

    <!-- Inner smaller shards for depth -->
    <polygon class="shard s3" points="400,300 550,320 620,80 480,160" fill="url(#g1)" opacity="0.4" filter="url(#glow)"/>
    <polygon class="shard s5" points="400,300 200,180 280,80 480,160 620,80" fill="url(#g8)" opacity="0.3" filter="url(#glow)"/>
    <polygon class="shard s7" points="400,300 180,420 250,350 280,200 200,180" fill="url(#g6)" opacity="0.35" filter="url(#glow)"/>
    <polygon class="shard s2" points="400,300 560,380 520,460 420,520" fill="url(#g4)" opacity="0.4" filter="url(#glow)"/>

    <!-- Crack lines radiating from center -->
    <line class="crack" x1="400" y1="300" x2="620" y2="80" stroke="#a855f7" stroke-width="1" opacity="0.8"/>
    <line class="crack2" x1="400" y1="300" x2="780" y2="200" stroke="#6366f1" stroke-width="1" opacity="0.7"/>
    <line class="crack" x1="400" y1="300" x2="800" y2="420" stroke="#ec4899" stroke-width="1" opacity="0.6"/>
    <line class="crack3" x1="400" y1="300" x2="680" y2="600" stroke="#8b5cf6" stroke-width="1" opacity="0.7"/>
    <line class="crack2" x1="400" y1="300" x2="250" y2="580" stroke="#f59e0b" stroke-width="1" opacity="0.6"/>
    <line class="crack" x1="400" y1="300" x2="0" y2="500" stroke="#06b6d4" stroke-width="1" opacity="0.7"/>
    <line class="crack3" x1="400" y1="300" x2="0" y2="300" stroke="#a855f7" stroke-width="1" opacity="0.6"/>
    <line class="crack2" x1="400" y1="300" x2="0" y2="100" stroke="#6366f1" stroke-width="1" opacity="0.7"/>
    <line class="crack" x1="400" y1="300" x2="200" y2="0" stroke="#ec4899" stroke-width="1" opacity="0.6"/>
    <line class="crack3" x1="400" y1="300" x2="550" y2="320" stroke="#f97316" stroke-width="0.8" opacity="0.5"/>
    <line class="crack" x1="400" y1="300" x2="480" y2="160" stroke="#10b981" stroke-width="0.8" opacity="0.5"/>
    <line class="crack2" x1="400" y1="300" x2="280" y2="200" stroke="#06b6d4" stroke-width="0.8" opacity="0.5"/>
    <line class="crack3" x1="400" y1="300" x2="250" y2="350" stroke="#8b5cf6" stroke-width="0.8" opacity="0.5"/>
    <line class="crack" x1="400" y1="300" x2="520" y2="460" stroke="#f59e0b" stroke-width="0.8" opacity="0.5"/>

    <!-- Secondary crack branches -->
    <line class="crack2" x1="550" y1="320" x2="620" y2="400" stroke="#a855f7" stroke-width="0.6" opacity="0.4"/>
    <line class="crack3" x1="480" y1="160" x2="580" y2="100" stroke="#6366f1" stroke-width="0.6" opacity="0.4"/>
    <line class="crack" x1="280" y1="200" x2="180" y2="120" stroke="#ec4899" stroke-width="0.6" opacity="0.4"/>
    <line class="crack2" x1="250" y1="350" x2="150" y2="280" stroke="#06b6d4" stroke-width="0.6" opacity="0.4"/>
    <line class="crack3" x1="520" y1="460" x2="600" y2="520" stroke="#f97316" stroke-width="0.6" opacity="0.4"/>

    <!-- Center glow point -->
    <circle cx="400" cy="300" r="18" fill="white" opacity="0.08" filter="url(#glow)"/>
    <circle cx="400" cy="300" r="8" fill="white" opacity="0.15" filter="url(#glow)"/>
    <circle cx="400" cy="300" r="3" fill="white" opacity="0.6"/>
  </svg>

  <div class="text-center px-4 relative z-10">

    <!-- Animated Astronaut Character -->
    <div class="mb-8 flex justify-center">
      <div class="relative" style="animation: float 4s ease-in-out infinite;">
      

        <svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="42" cy="128" rx="6" ry="10" fill="#f97316" opacity="0.85" style="animation: float 0.4s ease-in-out infinite alternate;"/>
          <ellipse cx="42" cy="132" rx="4" ry="7" fill="#fde68a" opacity="0.9" style="animation: float 0.3s ease-in-out infinite alternate-reverse;"/>
          <ellipse cx="78" cy="128" rx="6" ry="10" fill="#f97316" opacity="0.85" style="animation: float 0.5s ease-in-out infinite alternate;"/>
          <ellipse cx="78" cy="132" rx="4" ry="7" fill="#fde68a" opacity="0.9" style="animation: float 0.35s ease-in-out infinite alternate-reverse;"/>
          <rect x="35" y="100" width="16" height="24" rx="4" fill="#4B5563"/>
          <rect x="69" y="100" width="16" height="24" rx="4" fill="#4B5563"/>
          <rect x="40" y="95" width="40" height="20" rx="6" fill="#374151"/>
          <ellipse cx="60" cy="95" rx="26" ry="30" fill="#e5e7eb"/>
          <rect x="52" y="88" width="16" height="8" rx="3" fill="#d1d5db"/>
          <circle cx="60" cy="80" r="3" fill="#9ca3af"/>
          <g style="animation: wave 2s ease-in-out infinite; transform-origin: 38px 85px;">
            <ellipse cx="32" cy="85" rx="8" ry="14" fill="#e5e7eb" transform="rotate(-20 32 85)"/>
            <circle cx="26" cy="75" r="7" fill="#d1d5db"/>
            <circle cx="24" cy="73" r="5" fill="#9ca3af"/>
          </g>
          <ellipse cx="88" cy="85" rx="8" ry="14" fill="#e5e7eb" transform="rotate(20 88 85)"/>
          <circle cx="94" cy="75" r="7" fill="#d1d5db"/>
          <circle cx="96" cy="73" r="5" fill="#9ca3af"/>
          <ellipse cx="50" cy="118" rx="10" ry="14" fill="#d1d5db"/>
          <ellipse cx="70" cy="118" rx="10" ry="14" fill="#d1d5db"/>
          <ellipse cx="50" cy="128" rx="11" ry="7" fill="#6b7280"/>
          <ellipse cx="70" cy="128" rx="11" ry="7" fill="#6b7280"/>
          <circle cx="60" cy="55" r="28" fill="#c7d2fe" opacity="0.25"/>
          <circle cx="60" cy="55" r="26" fill="#1f2937" stroke="#6366f1" stroke-width="3"/>
          <ellipse cx="60" cy="55" rx="18" ry="16" fill="#6366f1" opacity="0.3"/>
          <ellipse cx="60" cy="53" rx="14" ry="12" fill="#818cf8" opacity="0.4"/>
          <ellipse cx="54" cy="47" rx="5" ry="4" fill="white" opacity="0.5" transform="rotate(-20 54 47)"/>
          <g style="animation: blink 4s ease-in-out infinite;">
            <ellipse cx="53" cy="53" rx="3" ry="3.5" fill="white"/>
            <ellipse cx="67" cy="53" rx="3" ry="3.5" fill="white"/>
          </g>
          <circle cx="53" cy="54" r="1.8" fill="#1e1b4b"/>
          <circle cx="67" cy="54" r="1.8" fill="#1e1b4b"/>
          <path d="M54 61 Q60 66 66 61" stroke="white" stroke-width="2" stroke-linecap="round" fill="none"/>
          <line x1="60" y1="29" x2="60" y2="20" stroke="#9ca3af" stroke-width="2"/>
          <circle cx="60" cy="18" r="4" fill="#f59e0b" style="animation: float 1s ease-in-out infinite alternate;"/>
          <circle cx="15" cy="30" r="2" fill="white" opacity="0.6" style="animation: float 2s ease-in-out infinite;"/>
          <circle cx="105" cy="20" r="1.5" fill="white" opacity="0.5" style="animation: float 2.5s ease-in-out infinite alternate;"/>
          <circle cx="10" cy="90" r="1.5" fill="#a5b4fc" opacity="0.7" style="animation: float 3s ease-in-out infinite;"/>
          <circle cx="112" cy="70" r="2" fill="white" opacity="0.4" style="animation: float 1.8s ease-in-out infinite alternate;"/>
        </svg>
      </div>
    </div>

    <!-- 404 Text -->
    <h1 class="text-9xl font-bold text-white mb-4 animate-pulse" style="text-shadow: 0 0 40px rgba(139,92,246,0.5), 0 0 80px rgba(99,102,241,0.3);">404</h1>

    <!-- Under Construction Message -->
    <div class="space-y-4">
      <h2 class="text-3xl md:text-4xl font-semibold text-[#40189d]">
        Site Under Construction
      </h2>
      <p class="text-lg md:text-xl text-gray-200 max-w-md mx-auto">
        We're working hard to bring you something amazing. Please check back soon!
      </p>
    </div>

    <!-- Animated Progress Bar -->
    <div class="mt-8 max-w-md mx-auto">
      <div class="bg-gray-700 rounded-full h-4 overflow-hidden">
        <div
          class="bg-linear-to-r from-[#5B4BC4] to-[#40189d] h-full rounded-full animate-pulse"
          style="width: 65%"
        ></div>
      </div>
      <p class="text-[#5B4BC4] text-sm mt-2">Building progress: 65%</p>
    </div>

    <!-- Animated Dots -->
    <div class="flex justify-center gap-2 mt-8">
      <div class="w-3 h-3 bg-[#40189d] rounded-full animate-bounce" style="animation-delay: 0s"></div>
      <div class="w-3 h-3 bg-[#40189d] rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
      <div class="w-3 h-3 bg-[#40189d] rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
    </div>

  </div>
</main>
</template>



  <style>
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(-2deg); }
            50% { transform: translateY(-18px) rotate(2deg); }
          }
          @keyframes blink {
            0%, 90%, 100% { transform: scaleY(1); }
            95% { transform: scaleY(0.1); }
          }
          @keyframes wave {
            0%, 100% { transform: rotate(0deg); transform-origin: bottom center; }
            25% { transform: rotate(20deg); transform-origin: bottom center; }
            75% { transform: rotate(-10deg); transform-origin: bottom center; }
          }

      .shard { transition: opacity 0.3s; }
      .s1 { animation: shardPulse1 6s ease-in-out infinite; }
      .s2 { animation: shardPulse2 7s ease-in-out infinite; }
      .s3 { animation: shardPulse3 5s ease-in-out infinite; }
      .s4 { animation: shardPulse4 8s ease-in-out infinite; }
      .s5 { animation: shardPulse5 6.5s ease-in-out infinite; }
      .s6 { animation: shardPulse6 9s ease-in-out infinite; }
      .s7 { animation: shardPulse7 5.5s ease-in-out infinite; }
      .s8 { animation: shardPulse8 7.5s ease-in-out infinite; }
      .crack { animation: crackFlicker 4s ease-in-out infinite; }
      .crack2 { animation: crackFlicker 6s ease-in-out infinite reverse; }
      .crack3 { animation: crackFlicker 5s ease-in-out infinite 1s; }

      @keyframes shardPulse1 {
        0%, 100% { opacity: 0.7; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.02); }
      }
      @keyframes shardPulse2 {
        0%, 100% { opacity: 0.4; transform: scale(1) skewX(0deg); }
        50% { opacity: 0.85; transform: scale(1.015) skewX(0.5deg); }
      }
      @keyframes shardPulse3 {
        0%, 100% { opacity: 0.6; }
        40% { opacity: 0.9; }
        70% { opacity: 0.5; }
      }
      @keyframes shardPulse4 {
        0%, 100% { opacity: 0.5; transform: scale(1); }
        60% { opacity: 1; transform: scale(1.03); }
      }
      @keyframes shardPulse5 {
        0%, 100% { opacity: 0.65; }
        50% { opacity: 0.95; }
      }
      @keyframes shardPulse6 {
        0%, 100% { opacity: 0.4; transform: scale(1); }
        45% { opacity: 0.8; transform: scale(1.025); }
      }
      @keyframes shardPulse7 {
        0%, 100% { opacity: 0.55; }
        35% { opacity: 1; }
        65% { opacity: 0.4; }
      }
      @keyframes shardPulse8 {
        0%, 100% { opacity: 0.45; transform: scale(1); }
        55% { opacity: 0.9; transform: scale(1.02); }
      }
      @keyframes crackFlicker {
        0%, 100% { opacity: 0.6; stroke-width: 1; }
        50% { opacity: 1; stroke-width: 1.5; }
      }
   
        </style>