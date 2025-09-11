<template>
  <div class="relative min-h-screen overflow-hidden transition-colors duration-300"
    :class="isDark ? 'bg-slate-900' : 'bg-slate-50'">
    <!-- Animated Background Bubbles -->
    <div class="absolute inset-0 overflow-hidden">
      <div v-for="bubble in bubbles" :key="bubble.id" class="absolute rounded-full opacity-10 animate-float"
        :class="isDark ? 'bg-orange-400' : 'bg-orange-500'" :style="{
          left: bubble.x + '%',
          top: bubble.y + '%',
          width: bubble.size + 'px',
          height: bubble.size + 'px',
          animationDelay: bubble.delay + 's',
          animationDuration: bubble.duration + 's'
        }"></div>
    </div>

    <!-- Navigation -->
    <nav class="relative z-10 flex items-center justify-between p-6 lg:px-12">
      <div class="flex items-center space-x-3">
        <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          FD
        </div>
        <span class="text-xl font-bold" :class="isDark ? 'text-white' : 'text-slate-900'">Frontend Dev</span>
      </div>

      <div class="hidden md:flex items-center space-x-8">
        <a href="#about" class="nav-link"
          :class="isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'">About</a>
        <a href="#services" class="nav-link"
          :class="isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'">Services</a>
        <a href="#work" class="nav-link"
          :class="isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'">Work</a>
        <button
          class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors duration-300">
          Resume
        </button>
      </div>

      <!-- Dark Mode Toggle -->
      <button @click="toggleDarkMode" class="p-2 rounded-full transition-colors duration-300"
        :class="isDark ? 'bg-slate-800 text-yellow-400' : 'bg-white text-slate-600 shadow-md'">
        <Icon :icon="isDark ? 'ph:sun-bold' : 'ph:moon-bold'" class="w-5 h-5" />
      </button>
    </nav>

    <!-- Hero Content -->
    <div class="relative z-10 container mx-auto px-6 lg:px-12 pt-12 lg:pt-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <!-- Left Content -->
        <div class="space-y-8">
          <div class="space-y-4">
            <h1 class="hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              :class="isDark ? 'text-white' : 'text-slate-900'">
              Hello,<br>
              <span class="text-orange-500">I'm Frontend Dev</span><br>
              <span class="text-balance">A Creative Developer</span>
            </h1>
            <p class="hero-subtitle text-lg md:text-xl leading-relaxed max-w-lg"
              :class="isDark ? 'text-slate-300' : 'text-slate-600'">
              Let's embark on a digital journey together, where every line of code tells a story of innovative solutions
              and beautiful user experiences.
            </p>
          </div>

          <div class="flex items-center space-x-4">
            <button
              class="cta-button bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Discover More
            </button>
            <button
              class="icon-button p-4 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
              <Icon icon="ph:arrow-up-right-bold" class="w-6 h-6" />
            </button>
          </div>

          <div class="social-links flex items-center space-x-6">
            <span class="text-sm font-medium" :class="isDark ? 'text-slate-400' : 'text-slate-500'">Follow me</span>
            <div class="flex space-x-3">
              <a href="#"
                class="social-icon p-3 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform duration-300">
                <Icon icon="mdi:linkedin" class="w-5 h-5" />
              </a>
              <a href="#"
                class="social-icon p-3 rounded-full bg-gray-800 text-white hover:scale-110 transition-transform duration-300">
                <Icon icon="mdi:github" class="w-5 h-5" />
              </a>
              <a href="#"
                class="social-icon p-3 rounded-full bg-pink-500 text-white hover:scale-110 transition-transform duration-300">
                <Icon icon="mdi:dribbble" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <!-- Right Content - Profile Image with Stats -->
        <div class="relative flex justify-center lg:justify-end">
          <div class="profile-container relative">
            <!-- Main Profile Circle -->
            <div
              class="profile-circle relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-orange-500">
              <img src="../assets/img/banner.png" alt="Frontend Developer"
                class="w-full h-full object-cover" />
            </div>

            <!-- Floating Stats -->
            <div class="stat-card absolute -top-4 -left-8 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl"
              :class="isDark ? 'bg-slate-800 text-white' : 'bg-white text-slate-900'">
              <div class="text-2xl font-bold text-orange-500">150+</div>
              <div class="text-sm" :class="isDark ? 'text-slate-300' : 'text-slate-600'">Projects Done</div>
            </div>

            <div class="stat-card absolute top-16 -right-12 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl"
              :class="isDark ? 'bg-slate-800 text-white' : 'bg-white text-slate-900'">
              <div class="text-2xl font-bold text-orange-500">50+</div>
              <div class="text-sm" :class="isDark ? 'text-slate-300' : 'text-slate-600'">Happy Clients</div>
            </div>

            <div class="stat-card absolute -bottom-8 right-8 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl"
              :class="isDark ? 'bg-slate-800 text-white' : 'bg-white text-slate-900'">
              <div class="flex items-center space-x-2">
                <div class="flex text-yellow-400">
                  <Icon icon="ph:star-fill" class="w-4 h-4" />
                  <Icon icon="ph:star-fill" class="w-4 h-4" />
                  <Icon icon="ph:star-fill" class="w-4 h-4" />
                  <Icon icon="ph:star-fill" class="w-4 h-4" />
                  <Icon icon="ph:star-fill" class="w-4 h-4" />
                </div>
              </div>
              <div class="text-lg font-bold text-orange-500">3 Years</div>
              <div class="text-sm" :class="isDark ? 'text-slate-300' : 'text-slate-600'">Experience</div>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute -top-12 right-12 w-24 h-24 border-2 border-orange-500 rounded-full opacity-30"></div>
            <div class="absolute -bottom-6 -left-6 w-16 h-16 bg-orange-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <Icon icon="ph:arrow-down-bold" class="w-6 h-6" :class="isDark ? 'text-slate-400' : 'text-slate-500'" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { gsap } from 'gsap'

// Dark mode state
const isDark = ref(false)

// Bubble animation data
const bubbles = ref([])

// Generate random bubbles
const generateBubbles = () => {
  const bubbleCount = 15
  bubbles.value = []

  for (let i = 0; i < bubbleCount; i++) {
    bubbles.value.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 100 + 20,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10
    })
  }
}

// Toggle dark mode
const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

// GSAP Animations
const initAnimations = () => {
  // Hero title animation
  gsap.fromTo('.hero-title',
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
  )

  // Hero subtitle animation
  gsap.fromTo('.hero-subtitle',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
  )

  // CTA button animation
  gsap.fromTo('.cta-button',
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.8, delay: 0.6, ease: 'back.out(1.7)' }
  )

  // Icon button animation
  gsap.fromTo('.icon-button',
    { opacity: 0, rotation: -180 },
    { opacity: 1, rotation: 0, duration: 0.8, delay: 0.8, ease: 'power3.out' }
  )

  // Social links animation
  gsap.fromTo('.social-links',
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 0.8, delay: 1, ease: 'power3.out' }
  )

  // Profile container animation
  gsap.fromTo('.profile-container',
    { opacity: 0, scale: 0.8, rotation: 10 },
    { opacity: 1, scale: 1, rotation: 0, duration: 1.2, delay: 0.4, ease: 'power3.out' }
  )

  // Stat cards animation
  gsap.fromTo('.stat-card',
    { opacity: 0, y: 20, scale: 0.8 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      delay: 1.2,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    }
  )

  // Continuous floating animation for profile
  gsap.to('.profile-circle', {
    y: -10,
    duration: 3,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1
  })

  // Continuous rotation for decorative elements
  gsap.to('.profile-container .absolute:last-child', {
    rotation: 360,
    duration: 20,
    ease: 'none',
    repeat: -1
  })
}

onMounted(() => {
  generateBubbles()
  initAnimations()

  // Check for saved dark mode preference
  const savedTheme = localStorage.getItem('darkMode')
  if (savedTheme) {
    isDark.value = JSON.parse(savedTheme)
    document.documentElement.classList.toggle('dark', isDark.value)
  }
})

// Watch dark mode changes and save to localStorage
const unwatchDarkMode = () => {
  return isDark.value && localStorage.setItem('darkMode', JSON.stringify(isDark.value))
}

onUnmounted(() => {
  unwatchDarkMode()
})
</script>

<style scoped>
@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  33% {
    transform: translateY(-20px) rotate(120deg);
  }

  66% {
    transform: translateY(10px) rotate(240deg);
  }
}

.animate-float {
  animation: float linear infinite;
}

.nav-link {
  position: relative;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #f97316;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.social-icon {
  transition: all 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-2px) scale(1.1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.stat-card {
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.profile-circle {
  box-shadow: 0 20px 60px rgba(249, 115, 22, 0.3);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .stat-card {
    position: relative !important;
    margin: 1rem 0;
  }

  .profile-container .absolute {
    position: relative !important;
    transform: none !important;
  }
}
</style>