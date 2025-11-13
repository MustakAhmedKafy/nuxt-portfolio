<template>
  <section
    class="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16 animate-fade-in">
        <div class="inline-block mb-4">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
            Areas of <span
              class="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent">Strength</span>
          </h2>
          <div class="h-1 w-20 mx-auto bg-gradient-to-r from-purple-500 to-purple-600 rounded-full animate-expand">
          </div>
        </div>
        <p class="text-base md:text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mt-6">
          Proficient in responsive design, cross-browser compatibility, and UI/UX principles. Strong problem-solving
          skills, collaboration, and attention to detail.
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        <div v-for="(skill, index) in skills" :key="skill.id" @mouseenter="hoveredSkill = skill.id"
          @mouseleave="hoveredSkill = null" :style="{ animationDelay: `${index * 50}ms` }"
          class="skill-card group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700/50 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/50 hover:-translate-y-2 cursor-pointer animate-slide-up">
          <!-- Background gradient on hover -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-purple-50 dark:from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          </div>

          <!-- Shine effect on hover -->
          <div
            class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent">
          </div>

          <!-- Content -->
          <div class="relative z-10 flex flex-col items-center gap-3">
            <!-- Icon/Image -->
            <div
              class="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 dark:from-purple-500/20 to-purple-50 dark:to-purple-500/10 group-hover:from-purple-200 dark:group-hover:from-purple-500/40 group-hover:to-purple-100 dark:group-hover:to-purple-500/20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
              <img v-if="skill.image" :src="skill.image" :alt="skill.name"
                class="w-7 h-7 md:w-8 md:h-8 object-contain transition-transform duration-300 group-hover:scale-110" />
              <Icon v-else :icon="skill.icon"
                class="w-7 h-7 md:w-8 md:h-8 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors" />
            </div>

            <!-- Skill Name -->
            <h3
              class="text-sm md:text-base font-semibold text-gray-800 dark:text-white text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
              {{ skill.name }}
            </h3>

            <!-- Progress indicator (optional) -->
            <div v-if="hoveredSkill === skill.id"
              class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 animate-fade-in-fast">
              <div v-for="i in 5" :key="i" :class="i <= skill.level ? 'bg-purple-500' : 'bg-gray-300 dark:bg-slate-600'"
                class="w-1.5 h-1.5 rounded-full transition-all duration-300">
              </div>
            </div>

            <!-- Hover indicator line -->
            <div
              class="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full group-hover:w-8 transition-all duration-500">
            </div>
          </div>
        </div>
      </div>

      <!-- Stats or CTA -->
      <div class="mt-16 text-center animate-fade-in-delayed">
        <p class="text-sm text-gray-500 dark:text-slate-400 mb-4">
          {{ skills.length }} Technologies • Always Learning
        </p>
        <div
          class="h-1 w-12 mx-auto bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-full opacity-20 animate-pulse-slow">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const hoveredSkill = ref(null)

const skills = [
  {
    id: 1,
    name: 'HTML',
    icon: 'vscode-icons:file-type-html',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    level: 5
  },
  {
    id: 2,
    name: 'CSS',
    icon: 'vscode-icons:file-type-css',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    level: 5
  },
  {
    id: 3,
    name: 'SCSS',
    icon: 'vscode-icons:file-type-sass',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    level: 4
  },
  {
    id: 4,
    name: 'Bootstrap',
    icon: 'vscode-icons:file-type-bootstrap',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    level: 5
  },
  {
    id: 5,
    name: 'Tailwind CSS',
    icon: 'vscode-icons:file-type-tailwind',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    level: 5
  },
  {
    id: 6,
    name: 'JavaScript',
    icon: 'vscode-icons:file-type-js-official',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 5
  },
  {
    id: 7,
    name: 'Vue JS',
    icon: 'vscode-icons:file-type-vue',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    level: 5
  },
  {
    id: 8,
    name: 'Nuxt JS',
    icon: 'vscode-icons:file-type-nuxt',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
    level: 4
  },
  {
    id: 9,
    name: 'jQuery',
    icon: 'vscode-icons:file-type-light-jquery',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
    level: 4
  },
  {
    id: 10,
    name: 'Vuetify',
    icon: 'vscode-icons:file-type-vue',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg',
    level: 4
  },
  {
    id: 11,
    name: 'Ant Design',
    icon: 'vscode-icons:file-type-light-antd',
    image: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    level: 3
  },
  {
    id: 12,
    name: 'WordPress',
    icon: 'vscode-icons:file-type-wordpress',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
    level: 4
  },
  {
    id: 13,
    name: 'PHP',
    icon: 'vscode-icons:file-type-php',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    level: 4
  },
  {
    id: 14,
    name: 'MySQL',
    icon: 'vscode-icons:file-type-mysql',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    level: 4
  },
  {
    id: 15,
    name: 'Git',
    icon: 'vscode-icons:file-type-git',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    level: 4
  },
  {
    id: 16,
    name: 'GitHub',
    icon: 'mdi:github',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    level: 5
  },
  {
    id: 17,
    name: 'Video Editing',
    icon: 'mdi:video',
    image: 'https://cdn-icons-png.flaticon.com/512/5977/5977590.png',
    level: 3
  },
  {
    id: 18,
    name: 'Photoshop',
    icon: 'vscode-icons:file-type-photoshop',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg',
    level: 4
  },
]
</script>

<style scoped>
/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes expand {
  from {
    width: 0;
  }

  to {
    width: 5rem;
  }
}

@keyframes fadeInFast {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes pulseSlow {

  0%,
  100% {
    opacity: 0.2;
  }

  50% {
    opacity: 0.4;
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out backwards;
}

.animate-expand {
  animation: expand 0.8s ease-out;
}

.animate-fade-in-fast {
  animation: fadeInFast 0.3s ease-out;
}

.animate-fade-in-delayed {
  animation: fadeIn 0.6s ease-out 0.3s backwards;
}

.animate-pulse-slow {
  animation: pulseSlow 3s ease-in-out infinite;
}

/* Smooth transitions for all interactive elements */
.skill-card {
  will-change: transform;
}

/* Fix for some browsers */
@supports (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px)) {
  .backdrop-blur-sm {
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
  }
}
</style>