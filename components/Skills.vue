<template>
  <section
    class="min-h-screen bg-gradient-to-br from-white to-gray dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <p class="text-purple-200 dark:text-purple-400 text-sm font-medium tracking-wider uppercase mb-3">
          Technical Expertise
        </p>
        <h2 class="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
          Skills & Technologies
        </h2>
        <p class="text-purple-100 dark:text-slate-300 text-lg md:text-xl max-w-2xl mx-auto text-pretty">
          Crafting pixel-perfect, accessible interfaces with modern tools and frameworks
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div v-for="(skill, index) in skills" :key="skill.name"
          class="group relative bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/50 hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
          :style="{ animationDelay: `${index * 100}ms` }" @mouseenter="hoveredSkill = skill.name"
          @mouseleave="hoveredSkill = null">
          <!-- Icon -->
          <div class="mb-6 relative">
            <div
              class="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-500 dark:to-purple-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
              {{ skill.icon }}
            </div>
            <div
              class="absolute -top-1 -right-1 w-6 h-6 bg-purple-300 dark:bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-purple-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {{ skill.level }}
            </div>
          </div>

          <!-- Content -->
          <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
            {{ skill.name }}
          </h3>
          <p class="text-purple-100 dark:text-slate-300 text-sm leading-relaxed mb-4">
            {{ skill.description }}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in skill.tags" :key="tag"
              class="px-3 py-1 text-xs font-medium bg-purple-500/30 dark:bg-slate-700/50 text-purple-100 dark:text-purple-300 rounded-full border border-purple-400/30 dark:border-purple-500/30">
              {{ tag }}
            </span>
          </div>

          <!-- Hover Effect Overlay -->
          <div
            class="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/0 to-purple-600/0 group-hover:from-purple-400/10 group-hover:to-purple-600/10 transition-all duration-300 pointer-events-none" />
        </div>
      </div>

      <!-- Proficiency Bars -->
      <div
        class="bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/50">
        <h3 class="text-2xl font-bold text-white mb-8">Core Competencies</h3>
        <div class="space-y-6">
          <div v-for="competency in competencies" :key="competency.name" class="group">
            <div class="flex justify-between items-center mb-2">
              <span class="text-white font-medium">{{ competency.name }}</span>
              <span class="text-purple-200 dark:text-purple-400 text-sm font-bold">{{ competency.level }}%</span>
            </div>
            <div class="h-3 bg-white/10 dark:bg-slate-700/50 rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-purple-400 to-purple-600 dark:from-purple-500 dark:to-purple-700 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-purple-500/50"
                :style="{ width: isVisible ? `${competency.level}%` : '0%' }" />
            </div>
          </div>
        </div>
      </div>

      <!-- Tools Section -->
      <div class="mt-12 text-center">
        <h3 class="text-2xl font-bold text-white mb-8">Tools & Workflow</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <div v-for="tool in tools" :key="tool"
            class="px-6 py-3 bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-slate-700/50 text-white font-medium hover:bg-white/20 dark:hover:bg-slate-700/50 hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-purple-500/20">
            {{ tool }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const hoveredSkill = ref(null)
const isVisible = ref(false)

const skills = [
  {
    name: 'HTML & CSS',
    icon: '🎨',
    level: '10',
    description: 'Semantic markup and modern CSS with Flexbox, Grid, and animations',
    tags: ['HTML5', 'CSS3', 'Sass', 'Tailwind']
  },
  {
    name: 'JavaScript',
    icon: '⚡',
    level: '10',
    description: 'ES6+ features, async programming, and modern JavaScript patterns',
    tags: ['ES6+', 'TypeScript', 'Async/Await']
  },
  {
    name: 'Vue.js',
    icon: '💚',
    level: '10',
    description: 'Building reactive, component-based applications with Vue 3 Composition API',
    tags: ['Vue 3', 'Composition API', 'Pinia']
  },
  {
    name: 'React',
    icon: '⚛️',
    level: '9',
    description: 'Creating dynamic UIs with hooks, context, and modern React patterns',
    tags: ['Hooks', 'Next.js', 'Redux']
  },
  {
    name: 'Responsive Design',
    icon: '📱',
    level: '10',
    description: 'Mobile-first approach ensuring seamless experiences across all devices',
    tags: ['Mobile-First', 'Accessibility', 'UX']
  },
  {
    name: 'Performance',
    icon: '🚀',
    level: '9',
    description: 'Optimizing load times, bundle sizes, and runtime performance',
    tags: ['Optimization', 'Lazy Loading', 'Caching']
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
  'Prettier'
]

onMounted(() => {
  // Trigger animation after component mounts
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

.group {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}
</style>