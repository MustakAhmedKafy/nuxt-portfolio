<template>
  <section
    class="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse">
      </div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000">
      </div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500">
      </div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header with Creative Design -->
      <div class="mb-20 text-center">
        <div class="inline-block mb-6 relative">
          <div class="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
          <span
            class="relative text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-[0.3em] px-6 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm">
            ✦ Featured Works ✦
          </span>
        </div>

        <h2 class="text-5xl sm:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
          Projects that
          <span class="relative inline-block">
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:via-purple-500 dark:to-purple-600 animate-gradient">
              inspire
            </span>
            <svg class="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
              <path d="M0,4 Q25,0 50,4 T100,4" stroke="url(#gradient)" stroke-width="2" fill="none" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:rgb(168, 85, 247);stop-opacity:1" />
                  <stop offset="100%" style="stop-color:rgb(147, 51, 234);stop-opacity:1" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h2>

        <p class="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Crafting digital experiences that blend creativity with cutting-edge technology
        </p>
      </div>

      <!-- Uniform Grid -->
      <div class="mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in paginatedProjects" :key="project.id"
            :style="{ animationDelay: `${index * 100}ms` }"
            class="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] animate-fade-in-up">
            <!-- Glassmorphism Card -->
            <div
              class="relative h-full bg-gradient-to-br from-slate-100/80 to-white/80 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl border border-slate-300/50 dark:border-slate-700/50 group-hover:border-purple-500/50 dark:group-hover:border-purple-500/50 transition-all duration-500 rounded-3xl overflow-hidden">

              <!-- Animated Gradient Border Effect -->
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  class="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 animate-border-flow">
                </div>
              </div>

              <!-- Image Container with Overlay -->
              <div class="relative h-64 overflow-hidden">
                <img :src="project.image" :alt="project.name"
                  class="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700" />

                <!-- Gradient Overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-white/60 dark:via-slate-900/60 to-transparent">
                </div>

                <!-- Floating Tags on Image -->
                <div class="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                  <span v-for="(tag, tagIndex) in project.tags.slice(0, 2)" :key="tag"
                    :style="{ animationDelay: `${tagIndex * 100}ms` }"
                    class="px-4 py-1.5 rounded-full text-xs font-bold bg-purple-500/90 text-white backdrop-blur-md border border-purple-400/30 shadow-lg shadow-purple-500/20 transform group-hover:scale-110 transition-transform duration-300">
                    {{ tag }}
                  </span>
                </div>

                <!-- Project Number Badge -->
                <div
                  class="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-sm shadow-lg">
                  {{ String(project.id).padStart(2, '0') }}
                </div>
              </div>

              <!-- Content Area -->
              <div class="relative p-8 flex flex-col h-[calc(100%-16rem)]">
                <!-- Title with Hover Effect -->
                <h3
                  class="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  {{ project.name }}
                </h3>

                <!-- Description -->
                <p class="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                  {{ project.description }}
                </p>

                <!-- All Tags -->
                <div class="flex flex-wrap gap-2 mb-6">
                  <span v-for="tag in project.tags" :key="tag"
                    class="px-3 py-1 rounded-lg text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    {{ tag }}
                  </span>
                </div>

                <!-- Action Button with Icon -->
                <div
                  class="flex items-center justify-between pt-4 border-t border-slate-300/50 dark:border-slate-700/50">
                  <span
                    class="text-sm font-bold text-purple-600 dark:text-purple-400 group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors flex items-center gap-2">
                    <span>Explore Project</span>
                    <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none"
                      stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>

                  <div class="flex gap-3">
                    <button
                      class="w-10 h-10 rounded-full bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300/50 dark:border-slate-700/50 hover:border-purple-500/50 hover:bg-purple-500/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 group/btn">
                      <svg class="w-5 h-5 group-hover/btn:scale-110 transition-transform" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button
                      class="w-10 h-10 rounded-full bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300/50 dark:border-slate-700/50 hover:border-purple-500/50 hover:bg-purple-500/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 group/btn">
                      <svg class="w-5 h-5 group-hover/btn:scale-110 transition-transform" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Hover Glow Effect -->
              <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div class="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modern Pagination -->
      <div class="flex flex-col items-center gap-8">
        <div class="flex items-center gap-4">
          <!-- Previous Button -->
          <button @click="previousPage" :disabled="currentPage === 1"
            class="group relative p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-300/50 dark:border-slate-700/50 hover:border-purple-500/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 disabled:hover:scale-100">
            <svg
              class="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Page Numbers with Modern Design -->
          <div class="flex items-center gap-2">
            <button v-for="page in totalPages" :key="page" @click="currentPage = page" :class="[
              'relative w-14 h-14 rounded-2xl font-bold transition-all duration-300 text-sm overflow-hidden',
              currentPage === page
                ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/50 scale-110'
                : 'bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-300/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-400 hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105'
            ]">
              <span class="relative z-10">{{ page }}</span>
              <div v-if="currentPage === page"
                class="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-transparent animate-shimmer"></div>
            </button>
          </div>

          <!-- Next Button -->
          <button @click="nextPage" :disabled="currentPage === totalPages"
            class="group relative p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-300/50 dark:border-slate-700/50 hover:border-purple-500/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 disabled:hover:scale-100">
            <svg
              class="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Summary Stats -->
        <div
          class="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-100/30 dark:bg-slate-800/30 backdrop-blur-xl border border-slate-300/50 dark:border-slate-700/50">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
            <span class="text-sm text-slate-600 dark:text-slate-400">
              Showing
              <span class="font-bold text-purple-600 dark:text-purple-400 mx-1">{{ startIndex + 1 }}</span>
              to
              <span class="font-bold text-purple-600 dark:text-purple-400 mx-1">{{ Math.min(endIndex, projects.length)
                }}</span>
              of
              <span class="font-bold text-slate-900 dark:text-white mx-1">{{ projects.length }}</span>
              projects
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentPage = ref(1)
const itemsPerPage = ref(6)

// Sample projects with real images from Unsplash
const projects = ref([
  {
    id: 1,
    name: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with real-time inventory management and payment integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    name: 'Analytics Dashboard',
    description: 'Interactive data visualization dashboard with real-time metrics and comprehensive reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Vue', 'TypeScript', 'Chart.js']
  },
  {
    id: 3,
    name: 'Task Management App',
    description: 'Collaborative task management application with team features and notifications.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Tailwind', 'Firebase']
  },
  {
    id: 4,
    name: 'Social Media Feed',
    description: 'Real-time social feed with infinite scroll, likes, comments, and user interactions.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    tags: ['React', 'GraphQL', 'PostgreSQL']
  },
  {
    id: 5,
    name: 'Design System',
    description: 'Comprehensive component library and design system for enterprise applications.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    tags: ['Storybook', 'CSS', 'React']
  },
  {
    id: 6,
    name: 'AI Chat Interface',
    description: 'Modern chat interface with AI integration and conversation history management.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['Next.js', 'OpenAI', 'Vercel']
  },
  {
    id: 7,
    name: 'Video Platform',
    description: 'Streaming platform with adaptive bitrate video delivery and interactive features.',
    image: 'https://images.unsplash.com/photo-1574267432644-f610dd5e1c55?w=800&h=600&fit=crop',
    tags: ['Vue', 'HLS', 'AWS']
  },
  {
    id: 8,
    name: 'Fitness Tracker',
    description: 'Health and fitness tracking app with progress visualization and goal management.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    tags: ['React Native', 'Firebase', 'Expo']
  },
  {
    id: 9,
    name: 'Restaurant Booking',
    description: 'Restaurant reservation system with real-time availability and table management.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Supabase', 'Stripe']
  }
])

// Computed properties
const totalPages = computed(() => Math.ceil(projects.value.length / itemsPerPage.value))

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return projects.value.slice(start, end)
})

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value)
const endIndex = computed(() => startIndex.value + itemsPerPage.value)

// Methods
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* Custom Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes border-flow {

  0%,
  100% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(100%);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) skewX(-15deg);
  }

  100% {
    transform: translateX(200%) skewX(-15deg);
  }
}

@keyframes gradient {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}

.animate-border-flow {
  animation: border-flow 3s linear infinite;
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

.delay-500 {
  animation-delay: 500ms;
}

.delay-1000 {
  animation-delay: 1000ms;
}

/* Smooth transitions */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>