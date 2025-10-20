<template>
  <section
    class="relative w-full min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 overflow-hidden transition-colors duration-500">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse">
      </div>
      <div
        class="absolute top-40 right-20 w-96 h-96 bg-blue-400/15 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s"></div>
      <div
        class="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-400/15 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 2s"></div>
    </div>

    <!-- Grid pattern overlay -->
    <div
      class="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]">
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header with premium styling -->
      <div ref="headerRef" class="text-center mb-20 opacity-0">
        <div class="inline-block mb-4">
          <span
            class="px-4 py-2 bg-purple-500/10 dark:bg-purple-500/10 border border-purple-500/30 dark:border-purple-500/20 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium backdrop-blur-sm">
            What We Offer
          </span>
        </div>
        <h2 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          Transform Your Vision Into
          <span
            class="block mt-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
            Digital Reality
          </span>
        </h2>
        <p class="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Premium solutions crafted with precision, powered by innovation, and designed to exceed expectations
        </p>
      </div>

      <!-- Solutions Grid with enhanced cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div v-for="(solution, index) in solutions" :key="index" ref="cardRefs"
          class="solution-card group relative bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-200/50 dark:border-purple-500/10 overflow-hidden transition-all duration-500 hover:border-purple-400/60 dark:hover:border-purple-500/30 cursor-pointer shadow-lg shadow-purple-100/50 dark:shadow-purple-900/20 hover:shadow-2xl hover:shadow-purple-200/60 dark:hover:shadow-purple-900/40">

          <!-- Animated gradient overlay on hover -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-purple-400/0 via-pink-400/0 to-blue-400/0 dark:from-purple-600/0 dark:via-pink-600/0 dark:to-blue-600/0 group-hover:from-purple-400/8 group-hover:via-pink-400/8 group-hover:to-blue-400/8 dark:group-hover:from-purple-600/5 dark:group-hover:via-pink-600/5 dark:group-hover:to-blue-600/5 transition-all duration-500 rounded-3xl">
          </div>

          <!-- Glow effect -->
          <div
            class="absolute -inset-px bg-gradient-to-br from-purple-400/0 via-pink-400/0 to-blue-400/0 dark:from-purple-500/0 dark:via-pink-500/0 dark:to-blue-500/0 group-hover:from-purple-400/30 group-hover:via-pink-400/30 group-hover:to-blue-400/30 dark:group-hover:from-purple-500/20 dark:group-hover:via-pink-500/20 dark:group-hover:to-blue-500/20 rounded-3xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100">
          </div>

          <!-- Decorative corner accent -->
          <div
            class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/30 dark:from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          </div>

          <!-- Icon with premium styling -->
          <div class="relative z-10 mb-8">
            <div class="relative inline-block">
              <div
                class="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 dark:opacity-50 dark:group-hover:opacity-100 transition-opacity duration-500">
              </div>
              <div
                class="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <Icon :icon="solution.icon" class="w-10 h-10 text-white" />
              </div>
            </div>
          </div>

          <!-- Content with enhanced typography -->
          <div class="relative z-10">
            <h3
              class="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 dark:group-hover:from-purple-400 dark:group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
              {{ solution.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-base">
              {{ solution.description }}
            </p>

            <!-- Features with modern design -->
            <div class="space-y-3">
              <div v-for="(feature, fIndex) in solution.features" :key="fIndex"
                class="flex items-center gap-3 text-sm group/item">
                <div
                  class="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 group-hover/item:scale-150 transition-transform duration-300">
                </div>
                <span
                  class="text-slate-700 dark:text-slate-300 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors duration-300">{{
                  feature }}</span>
              </div>
            </div>

            <!-- Call to action button -->
            <div class="mt-8 pt-6 border-t border-purple-200/50 dark:border-purple-500/10">
              <button
                class="w-full py-3 px-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border border-purple-400/30 dark:border-purple-500/20 hover:border-purple-500/50 dark:hover:border-purple-500/40 rounded-xl text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                <span>Learn More</span>
                <Icon icon="lucide:arrow-right"
                  class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          <!-- Shine effect on hover -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000">
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA section -->
      <div ref="ctaRef" class="mt-20 text-center opacity-0">
        <div class="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            class="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full shadow-lg shadow-purple-400/50 dark:shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 dark:hover:shadow-purple-500/60 transform hover:scale-105 transition-all duration-300">
            Start Your Project
          </button>
          <button
            class="px-8 py-4 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 text-slate-900 dark:text-white font-semibold rounded-full backdrop-blur-sm transition-all duration-300">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headerRef = ref(null)
const cardRefs = ref([])
const ctaRef = ref(null)

const solutions = [
  {
    title: 'Frontend Development',
    description: 'Build lightning-fast, pixel-perfect interfaces that captivate users and drive engagement with cutting-edge technologies.',
    icon: 'lucide:code-2',
    features: ['React & Vue.js Expertise', 'Performance Optimization', 'Modern Architecture']
  },
  {
    title: 'UI/UX Design',
    description: 'Create memorable digital experiences through intuitive design that seamlessly blends aesthetics with functionality.',
    icon: 'lucide:palette',
    features: ['User-Centric Design', 'Brand Identity', 'Design Systems']
  },
  {
    title: 'Responsive Solutions',
    description: 'Deliver flawless experiences across every device and screen size with adaptive, mobile-first design principles.',
    icon: 'lucide:smartphone',
    features: ['Mobile-First Approach', 'Cross-Platform', 'Fluid Layouts']
  },
  {
    title: 'Clean Architecture',
    description: 'Write scalable, maintainable code that stands the test of time using industry best practices and modern standards.',
    icon: 'lucide:file-code',
    features: ['Best Practices', 'Scalable Solutions', 'Documentation']
  },
  {
    title: 'Strategic Solutions',
    description: 'Transform complex challenges into elegant solutions through systematic problem-solving and innovative thinking.',
    icon: 'lucide:lightbulb',
    features: ['Technical Consulting', 'Optimization', 'Innovation']
  },
  {
    title: 'Motion & Video',
    description: 'Bring your story to life with cinematic video editing and dynamic motion graphics that leave lasting impressions.',
    icon: 'lucide:video',
    features: ['Professional Editing', 'Motion Graphics', 'Visual Storytelling']
  }
]

onMounted(() => {
  // Set initial state
  gsap.set(cardRefs.value, {
    opacity: 0,
    y: 60,
    scale: 0.9
  })

  // Animate header
  gsap.to(headerRef.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out'
  })

  // Stagger animate cards with scroll trigger
  gsap.to(cardRefs.value, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    delay: 0.3,
    scrollTrigger: {
      trigger: cardRefs.value[0],
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  })

  // Animate CTA
  gsap.to(ctaRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    delay: 1,
    scrollTrigger: {
      trigger: ctaRef.value,
      start: 'top 90%',
      toggleActions: 'play none none none'
    }
  })

  // Enhanced hover animations
  cardRefs.value.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -12,
        scale: 1.02,
        duration: 0.4,
        ease: 'power2.out'
      })
    })

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
    })
  })
})
</script>

<style scoped>
.solution-card {
  opacity: 0;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 0.1;
  }

  50% {
    opacity: 0.2;
  }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>