<template>
  <section id="services"
    class="bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-100 dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-900 py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">

    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed">
      </div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16 md:mb-20">
        <div
          class="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 bg-purple-100 dark:bg-purple-900/30 rounded-full">
          <Icon icon="ph:gear-six-duotone" class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mr-2" />
          <span
            class="text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wide">Technical Expertise</span>
        </div>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
          Skills & <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">Technologies</span>
        </h2>
        <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
          Crafting pixel-perfect, accessible interfaces with modern tools and frameworks
        </p>
      </div>

      <!-- Services/Skills Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div v-for="(skill, index) in skills" :key="skill.name"
          class="group relative bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer overflow-hidden"
          :class="skill.shadowColor" :style="{ animationDelay: `${index * 100}ms` }"
          @mouseenter="hoveredSkill = skill.name" @mouseleave="hoveredSkill = null">

          <!-- Colorful Top Border -->
          <div class="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl transition-all duration-500"
            :class="skill.topBorder"></div>

          <!-- Gradient Overlay on Hover -->
          <div
            class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"
            :class="skill.hoverGradient"></div>

          <!-- Decorative Corner Shape -->
          <div
            class="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full"
            :class="skill.cornerColor"></div>

          <div class="relative z-10">
            <!-- Icon Container with Iconify -->
            <div class="mb-6">
              <div :class="[
                'w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6',
                skill.iconBg
              ]">
                <Icon :icon="skill.icon" class="w-8 h-8" />
              </div>
            </div>

            <!-- Content -->
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300"
              :class="skill.hoverTextColor">
              {{ skill.name }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6 min-h-[60px]">
              {{ skill.description }}
            </p>

            <!-- Learn More Link -->
            <a href="#"
              class="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300 group/link"
              :class="skill.linkColor">
              <span class="group-hover/link:translate-x-1 transition-transform duration-300">Learn More</span>
              <Icon icon="mdi:arrow-right"
                class="w-4 h-4 group-hover/link:translate-x-2 transition-transform duration-300" />
            </a>
          </div>

          <!-- Shine Effect -->
          <div
            class="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12">
          </div>
        </div>
      </div>

      <!-- Proficiency Bars -->
      <div
        class="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-xl mb-16">
        <div class="flex items-center gap-3 mb-8">
          <div class="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></div>
          <h3 class="text-3xl font-bold text-slate-900 dark:text-white">Core Competencies</h3>
        </div>

        <div class="space-y-8">
          <div v-for="(competency, index) in competencies" :key="competency.name" class="group"
            :style="{ animationDelay: `${index * 100}ms` }">
            <div class="flex justify-between items-center mb-3">
              <span class="text-slate-900 dark:text-white font-semibold text-lg">{{ competency.name }}</span>
              <span
                class="text-purple-600 dark:text-purple-400 text-sm font-bold px-3 py-1 bg-purple-50 dark:bg-purple-950/50 rounded-full border border-purple-200 dark:border-purple-800">
                {{ competency.level }}%
              </span>
            </div>
            <div class="relative h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
              <!-- Progress Bar -->
              <div
                class="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-purple-500/50"
                :style="{ width: isVisible ? `${competency.level}%` : '0%' }">
                <!-- Shimmer Effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools Section -->
      <div class="text-center">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 dark:bg-purple-500/20 rounded-full mb-8 border border-purple-500/20">
          <Icon icon="mdi:tools" class="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <h3 class="text-xl font-bold text-slate-900 dark:text-white">Tools & Workflow</h3>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <div v-for="(tool, index) in tools" :key="tool"
            class="group px-6 py-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-purple-50 dark:hover:bg-purple-950/30 hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-purple-500/20 relative overflow-hidden"
            :style="{ animationDelay: `${index * 50}ms` }">
            <span class="relative z-10">{{ tool }}</span>
            <div
              class="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

const hoveredSkill = ref(null)
const isVisible = ref(false)

const skills = [
  {
    name: 'Web Design',
    icon: 'mdi:palette-outline',
    description: 'Designing smart, engaging websites that connect people with your brand.',
    topBorder: 'bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500',
    iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
    hoverGradient: 'from-purple-500/5 to-pink-500/5',
    cornerColor: 'bg-purple-500',
    linkColor: 'text-purple-600 dark:text-purple-400',
    hoverTextColor: 'group-hover:text-purple-600 dark:group-hover:text-purple-400',
    shadowColor: 'hover:shadow-purple-500/20'
  },
  {
    name: 'Web Development',
    icon: 'mdi:code-braces',
    description: 'Empowering your brand with smart, scalable, and beautifully coded websites.',
    topBorder: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    hoverGradient: 'from-blue-500/5 to-cyan-500/5',
    cornerColor: 'bg-blue-500',
    linkColor: 'text-blue-600 dark:text-blue-400',
    hoverTextColor: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
    shadowColor: 'hover:shadow-blue-500/20'
  },
  {
    name: 'SEO Optimization',
    icon: 'mdi:chart-line',
    description: 'Optimizing your website to dominate search results and attract the right audience.',
    topBorder: 'bg-gradient-to-r from-emerald-500 to-teal-500',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
    hoverGradient: 'from-emerald-500/5 to-teal-500/5',
    cornerColor: 'bg-emerald-500',
    linkColor: 'text-emerald-600 dark:text-emerald-400',
    hoverTextColor: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
    shadowColor: 'hover:shadow-emerald-500/20'
  },
  {
    name: 'Mobile App Development',
    icon: 'mdi:cellphone',
    description: 'Creating powerful, scalable apps that drive engagement and growth.',
    topBorder: 'bg-gradient-to-r from-orange-500 to-red-500',
    iconBg: 'bg-gradient-to-br from-orange-500 to-red-500',
    hoverGradient: 'from-orange-500/5 to-red-500/5',
    cornerColor: 'bg-orange-500',
    linkColor: 'text-orange-600 dark:text-orange-400',
    hoverTextColor: 'group-hover:text-orange-600 dark:group-hover:text-orange-400',
    shadowColor: 'hover:shadow-orange-500/20'
  },
  {
    name: 'UI/UX Design',
    icon: 'mdi:vector-square',
    description: 'Crafting intuitive, beautiful interfaces that users love to interact with.',
    topBorder: 'bg-gradient-to-r from-violet-500 to-purple-500',
    iconBg: 'bg-gradient-to-br from-violet-500 to-purple-500',
    hoverGradient: 'from-violet-500/5 to-purple-500/5',
    cornerColor: 'bg-violet-500',
    linkColor: 'text-violet-600 dark:text-violet-400',
    hoverTextColor: 'group-hover:text-violet-600 dark:group-hover:text-violet-400',
    shadowColor: 'hover:shadow-violet-500/20'
  },
  {
    name: 'Performance Optimization',
    icon: 'mdi:speedometer',
    description: 'Optimizing load times, bundle sizes, and runtime performance for blazing fast experiences.',
    topBorder: 'bg-gradient-to-r from-amber-500 to-yellow-500',
    iconBg: 'bg-gradient-to-br from-amber-500 to-yellow-500',
    hoverGradient: 'from-amber-500/5 to-yellow-500/5',
    cornerColor: 'bg-amber-500',
    linkColor: 'text-amber-600 dark:text-amber-400',
    hoverTextColor: 'group-hover:text-amber-600 dark:group-hover:text-amber-400',
    shadowColor: 'hover:shadow-amber-500/20'
  }
]

const competencies = [
  { name: 'UI/UX Implementation', level: 95 },
  { name: 'Component Architecture', level: 92 },
  { name: 'Web Accessibility (a11y)', level: 90 },
  { name: 'Cross-Browser Compatibility', level: 88 },
  { name: 'API Integration', level: 85 }
]

const tools = [
  'VS Code',
  'Git & GitHub',
  'Figma',
  'Chrome DevTools',
  'Webpack',
  'Vite',
  'npm/yarn',
  'ESLint',
  'Prettier',
  'Postman'
]

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 300)
})
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

@keyframes pulse-slow {

  0%,
  100% {
    opacity: 0.1;
  }

  50% {
    opacity: 0.2;
  }
}

.animate-fade-in {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 25s ease-in-out infinite;
  animation-delay: 5s;
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

.group {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

/* Smooth number counting would require additional JS, but the transition effect works well */
</style>