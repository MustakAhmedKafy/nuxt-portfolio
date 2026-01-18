<template>
  <!-- Modern Professional Navigation -->
  <nav :class="[
    'fixed w-full z-50 top-0 transition-all duration-500',
    isScrolled
      ? (isDark ? 'bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-purple-500/5 border-b border-slate-700/50' : 'bg-white/90 backdrop-blur-xl shadow-2xl shadow-purple-500/10 border-b border-gray-200/50')
      : 'bg-transparent'
  ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Logo - Left -->
        <a href="#" @click.prevent="handleNavClick('#home')" class="flex items-center space-x-3 group flex-shrink-0">
          <div
            class="w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
            <Icon icon="ph:code-bold" class="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <span :class="[
            'text-xl md:text-2xl font-bold transition-colors duration-300 hidden sm:block',
            isDark ? 'text-white' : 'text-slate-900'
          ]">
            Portfolio
          </span>
        </a>

        <!-- Desktop Navigation - Center -->
        <div class="hidden lg:flex items-center justify-center flex-1 px-8">
          <div class="flex items-center space-x-1">
            <a v-for="item in navItems" :key="item.name" :href="item.href"
              @click.prevent="handleNavClick(item.href)"
              class="nav-link relative px-4 py-2 font-medium text-sm transition-all duration-300 group"
              :class="[
                activeSection === item.href.replace('#', '')
                  ? (isDark ? 'text-purple-400' : 'text-purple-600')
                  : isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
              ]">
              <span class="relative z-10">{{ item.name }}</span>
              <!-- Active Dot Indicator -->
              <span
                v-if="activeSection === item.href.replace('#', '')"
                class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-pulse"
              ></span>
              <!-- Hover underline -->
              <span
                v-else
                class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-purple-500/50 rounded-full transition-all duration-300 group-hover:w-4"
              ></span>
            </a>
          </div>
        </div>

        <!-- Action Buttons - Right -->
        <div class="flex items-center space-x-3 flex-shrink-0">
          <!-- Dark Mode Toggle -->
          <button @click="toggleDarkMode" :class="[
            'p-2.5 rounded-xl transition-all duration-300 hover:scale-110',
            isDark
              ? 'bg-slate-800 text-amber-400 hover:bg-slate-700'
              : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
          ]">
            <Icon :icon="isDark ? 'ph:sun-bold' : 'ph:moon-bold'" class="w-5 h-5" />
          </button>

          <!-- CTA Button -->
          <a href="#contact" @click.prevent="handleNavClick('#contact')"
            class="hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50">
            <span>Hire Me</span>
            <Icon icon="ph:arrow-right-bold" class="w-4 h-4" />
          </a>

          <!-- Mobile Menu Toggle -->
          <button @click="toggleMobileMenu" :class="[
            'lg:hidden p-2.5 rounded-xl transition-all duration-300',
            isDark ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-gray-100 text-slate-900 hover:bg-gray-200'
          ]">
            <Icon :icon="isMobileMenuOpen ? 'ph:x-bold' : 'ph:list-bold'" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu - Slide Down -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMobileMenuOpen" :class="[
        'lg:hidden absolute top-full left-0 right-0 border-b shadow-2xl',
        isDark
          ? 'bg-slate-900/95 backdrop-blur-xl border-slate-700/50'
          : 'bg-white/95 backdrop-blur-xl border-gray-200/50'
      ]">
        <div class="max-w-7xl mx-auto px-4 py-4 space-y-1">
          <a v-for="item in navItems" :key="item.name" :href="item.href"
            @click.prevent="handleMobileNavClick(item.href)"
            class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300"
            :class="[
              activeSection === item.href.replace('#', '')
                ? (isDark ? 'text-purple-400 bg-purple-500/10' : 'text-purple-600 bg-purple-50')
                : isDark
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
            ]">
            <Icon :icon="item.icon" class="w-5 h-5" :class="activeSection === item.href.replace('#', '') ? 'text-purple-500' : ''" />
            <span>{{ item.name }}</span>
            <!-- Active indicator for mobile -->
            <span
              v-if="activeSection === item.href.replace('#', '')"
              class="ml-auto w-2 h-2 bg-purple-500 rounded-full animate-pulse"
            ></span>
          </a>

          <!-- Mobile CTA -->
          <div class="pt-3 mt-2 border-t" :class="isDark ? 'border-slate-700/50' : 'border-gray-200'">
            <a href="#contact" @click.prevent="handleMobileNavClick('#contact')"
              class="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/30">
              <span>Hire Me</span>
              <Icon icon="ph:arrow-right-bold" class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

// Props from parent
const props = defineProps({
  isDark: {
    type: Boolean,
    default: false
  }
})

// Emits
const emit = defineEmits(['toggle-dark-mode'])

// Reactive state
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('home')

// Navigation items with icons for all sections
const navItems = [
  { name: 'Home', href: '#home', icon: 'ph:house-duotone' },
  { name: 'About', href: '#about', icon: 'ph:user-duotone' },
  { name: 'Skills', href: '#skills', icon: 'ph:star-four-duotone' },
  { name: 'Services', href: '#services', icon: 'ph:gear-six-duotone' },
  { name: 'Experience', href: '#experience', icon: 'ph:briefcase-duotone' },
  { name: 'Projects', href: '#work', icon: 'ph:folder-notch-open-duotone' },
  { name: 'Gallery', href: '#gallery', icon: 'ph:images-duotone' },
  { name: 'Contact', href: '#contact', icon: 'ph:envelope-simple-duotone' }
]

// Section IDs for scroll tracking
const sectionIds = ['home', 'about', 'skills', 'services', 'experience', 'work', 'gallery', 'contact']

// Event handlers
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  // Active section tracking
  const scrollPosition = window.scrollY + 100

  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const sectionId = sectionIds[i]
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop
      if (scrollPosition >= offsetTop) {
        activeSection.value = sectionId
        break
      }
    }
  }

  // If at top, set home as active
  if (window.scrollY < 100) {
    activeSection.value = 'home'
  }
}

const toggleDarkMode = () => {
  emit('toggle-dark-mode')
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Smooth scroll to section
const handleNavClick = (href) => {
  const sectionId = href.replace('#', '')
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetTop = element.offsetTop - 80
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
}

const handleMobileNavClick = (href) => {
  handleNavClick(href)
  isMobileMenuOpen.value = false
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
