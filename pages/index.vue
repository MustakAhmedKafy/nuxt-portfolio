<template>
  <div class="relative min-h-screen overflow-hidden transition-colors duration-500"
    :class="isDark ? 'bg-slate-900' : 'bg-gray-50'">
    <!-- Professional Animated Background -->
    <div class="absolute inset-0">
      <!-- Gradient Overlay -->
      <div class="absolute inset-0"
        :class="isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'">
      </div>

      <!-- Large Interactive Bubbles -->
      <div class="absolute inset-0">
        <div v-for="(bubble, index) in bubbles" :key="index"
          class="absolute rounded-full cursor-pointer transition-all duration-500 hover:scale-110" :class="bubble.class"
          :style="{
            left: bubble.x + '%',
            top: bubble.y + '%',
            animationDelay: bubble.delay + 's',
            animationDuration: bubble.duration + 's'
          }" @mouseenter="bubble.isHovered = true" @mouseleave="bubble.isHovered = false">
        </div>
      </div>
    </div>

    <!-- Professional Navigation -->
    <nav :class="[
      'fixed w-full z-50 top-0 transition-all duration-300',
      isScrolled ? (isDark ? 'bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-700 py-2' : 'bg-white/95 backdrop-blur-md shadow-xl py-2') : 'bg-transparent py-4'
    ]">
      <div class="container mx-auto px-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <div
            class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
            <Icon icon="mdi:code-braces" class="w-6 h-6 text-white" />
          </div>
          <span :class="[
            'text-2xl font-bold transition-colors duration-300',
            isDark ? 'text-white' : 'text-slate-900'
          ]">
            Portfolio
          </span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a v-for="item in navItems" :key="item.name" :href="item.href" :class="[
            'font-medium transition-all duration-300 hover:scale-105',
            isDark ? 'text-gray-300 hover:text-orange-400' : 'text-slate-700 hover:text-orange-600'
          ]">
            {{ item.name }}
          </a>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center space-x-2 md:space-x-4">
          <!-- Dark Mode Toggle -->
          <button @click="toggleDarkMode" :class="[
            'p-2 rounded-full transition-all duration-300 hover:scale-110 flex-shrink-0',
            isDark ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
          ]">
            <Icon :icon="isDark ? 'mdi:weather-sunny' : 'mdi:weather-night'" class="w-5 h-5" />
          </button>

          <!-- CTA Button -->
          <button
            class="hidden sm:block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium px-4 md:px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base">
            Resume
          </button>

          <!-- Mobile Menu Toggle -->
          <button @click="toggleMobileMenu" class="md:hidden p-2 rounded-lg flex-shrink-0"
            :class="isDark ? 'text-white' : 'text-slate-900'">
            <Icon icon="mdi:menu" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" :class="[
        'md:hidden mt-4 mx-4 rounded-xl shadow-xl border transition-all duration-300',
        isDark ? 'bg-slate-800/95 backdrop-blur-md border-slate-700' : 'bg-white/95 backdrop-blur-md border-gray-200'
      ]">
        <div class="p-4 space-y-3">
          <a v-for="item in navItems" :key="item.name" :href="item.href" :class="[
            'block font-medium py-2 transition-colors duration-300',
            isDark ? 'text-gray-300 hover:text-orange-400' : 'text-slate-700 hover:text-orange-600'
          ]">
            {{ item.name }}
          </a>
          <!-- Mobile Resume Button -->
          <button
            class="sm:hidden w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 rounded-full transition-all duration-300 mt-4">
            Resume
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Content -->
    <div class="relative z-10 min-h-screen flex items-center">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="space-y-8 pt-20 md:pt-0">
            <div class="space-y-4">
              <!-- Fixed hello badge with proper background -->
              <div
                class="inline-flex items-center px-4 py-2 rounded-full border transition-all duration-300 backdrop-blur-sm"
                :class="isDark ? 'bg-slate-800/80 border-slate-700 text-gray-300' : 'bg-white/80 border-gray-200 text-slate-600'">
                <Icon icon="mdi:hand-wave" class="w-5 h-5 mr-2 text-orange-500" />
                <span class="text-sm font-medium">Hello, I'm</span>
              </div>

              <h1 :class="[
                'text-4xl md:text-5xl lg:text-7xl font-bold leading-tight transition-colors duration-300',
                isDark ? 'text-white' : 'text-slate-900'
              ]">
                <span class="block">John</span>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Smith</span>
              </h1>

              <h2 :class="[
                'text-xl md:text-2xl lg:text-3xl font-semibold transition-colors duration-300',
                isDark ? 'text-gray-300' : 'text-slate-700'
              ]">
                Frontend Developer
              </h2>

              <p :class="[
                'text-base md:text-lg leading-relaxed max-w-lg transition-colors duration-300',
                isDark ? 'text-gray-400' : 'text-slate-600'
              ]">
                Crafting exceptional digital experiences with modern technologies.
                Let's build something amazing together.
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-4">
              <button
                class="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
                <span>Discover More</span>
                <Icon icon="mdi:arrow-right" class="w-5 h-5" />
              </button>

              <button :class="[
                'font-semibold px-8 py-4 rounded-full border-2 transition-all duration-300 hover:scale-105 flex items-center space-x-2',
                isDark ? 'border-slate-600 text-white hover:bg-slate-800' : 'border-slate-300 text-slate-900 hover:bg-gray-50'
              ]">
                <Icon icon="mdi:play" class="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            <!-- Social Links -->
            <div class="flex items-center space-x-6">
              <span :class="['text-sm font-medium', isDark ? 'text-gray-400' : 'text-slate-600']">
                Follow me
              </span>
              <div class="flex space-x-4">
                <a v-for="social in socialLinks" :key="social.name" :href="social.href" :class="[
                  'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110',
                  social.class,
                  isDark ? 'hover:bg-slate-800' : 'hover:bg-gray-100'
                ]">
                  <Icon :icon="social.icon" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <!-- Right Content - Profile Section -->
          <div class="relative">
            <div class="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <!-- Animated Rings -->
              <div class="absolute inset-0 rounded-full border-2 border-orange-500/30 animate-spin-slow"></div>
              <div class="absolute inset-4 rounded-full border border-orange-400/20 animate-spin-reverse"></div>

              <!-- Profile Image Container -->
              <div class="absolute inset-8 rounded-full overflow-hidden shadow-2xl">
                <div
                  class="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <img src="../assets/img/banner.png" alt="John Smith - Frontend Developer"
                    class="w-full h-full object-cover" />
                </div>
              </div>

              <!-- Improved floating stats with better animations -->
              <div v-for="(stat, index) in stats" :key="index" class="absolute animate-gentle-float"
                :class="stat.position" :style="{ animationDelay: stat.delay + 's' }">
                <div :class="[
                  'px-4 py-3 rounded-xl shadow-lg border backdrop-blur-sm transition-all duration-300 hover:scale-105',
                  isDark ? 'bg-slate-800/90 border-slate-700 text-white' : 'bg-white/90 border-gray-200 text-slate-900'
                ]">
                  <div class="flex items-center space-x-2">
                    <Icon :icon="stat.icon" class="w-5 h-5 text-orange-500" />
                    <div>
                      <div class="font-bold text-lg">{{ stat.value }}</div>
                      <div :class="['text-xs', isDark ? 'text-gray-400' : 'text-slate-600']">{{ stat.label }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <About/>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

// Reactive state
const isDark = ref(false)
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// Navigation items
const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' }
]

// Social links
const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: 'mdi:linkedin', class: 'text-blue-600' },
  { name: 'GitHub', href: '#', icon: 'mdi:github', class: 'text-gray-800' },
  { name: 'Twitter', href: '#', icon: 'mdi:twitter', class: 'text-blue-400' },
  { name: 'Dribbble', href: '#', icon: 'mdi:dribbble', class: 'text-pink-500' }
]

// Stats data
const stats = [
  {
    value: '5+',
    label: 'Years Experience',
    icon: 'mdi:calendar-check',
    position: 'top-0 right-0',
    delay: 0.5
  },
  {
    value: '100+',
    label: 'Projects Done',
    icon: 'mdi:briefcase-check',
    position: 'bottom-0 left-0',
    delay: 1
  },
  {
    value: '50+',
    label: 'Happy Clients',
    icon: 'mdi:account-heart',
    position: 'top-1/2 -left-4',
    delay: 1.5
  }
]

// Enhanced bubble system with larger, interactive bubbles
const bubbles = ref([])

// Generate large interactive bubbles
const generateBubbles = () => {
  const bubbleArray = []
  const sizes = ['w-16 h-16', 'w-20 h-20', 'w-24 h-24', 'w-32 h-32', 'w-12 h-12']
  const opacities = ['opacity-10', 'opacity-15', 'opacity-20', 'opacity-25']

  for (let i = 0; i < 8; i++) {
    bubbleArray.push({
      x: Math.random() * 90,
      y: Math.random() * 90,
      class: `${sizes[Math.floor(Math.random() * sizes.length)]} ${opacities[Math.floor(Math.random() * opacities.length)]} bg-gradient-to-br from-orange-400 to-orange-600 animate-bubble-float`,
      delay: Math.random() * 3,
      duration: 15 + Math.random() * 10,
      isHovered: false
    })
  }

  bubbles.value = bubbleArray
}

// Event handlers
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  localStorage.setItem('darkMode', isDark.value.toString())
  document.documentElement.classList.toggle('dark', isDark.value)
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Lifecycle
onMounted(() => {
  // Initialize dark mode
  const savedDarkMode = localStorage.getItem('darkMode')
  if (savedDarkMode !== null) {
    isDark.value = savedDarkMode === 'true'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  document.documentElement.classList.toggle('dark', isDark.value)

  // Generate large bubbles instead of small floating elements
  generateBubbles()

  // Add scroll listener
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Enhanced animations for better visual appeal */
@keyframes bubble-float {

  0%,
  100% {
    transform: translateY(0px) translateX(0px) scale(1);
    opacity: 0.1;
  }

  25% {
    transform: translateY(-20px) translateX(10px) scale(1.05);
    opacity: 0.2;
  }

  50% {
    transform: translateY(-40px) translateX(-5px) scale(1.1);
    opacity: 0.25;
  }

  75% {
    transform: translateY(-20px) translateX(-10px) scale(1.05);
    opacity: 0.2;
  }
}

@keyframes gentle-float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
}

.animate-bubble-float {
  animation: bubble-float 20s ease-in-out infinite;
}

.animate-gentle-float {
  animation: gentle-float 4s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-spin-reverse {
  animation: spin-reverse 15s linear infinite;
}
</style>
