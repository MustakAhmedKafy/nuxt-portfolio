<template>
  <section id="skills" class="skills-section py-20 md:py-24 lg:py-28 px-4 transition-colors duration-300 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12 md:mb-16 animate-fade-in">
        <div class="inline-block mb-4">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
            Areas of <span
              class="bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">Strength</span>
          </h2>
          <div
            class="h-1 w-16 md:w-20 mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-expand">
          </div>
        </div>
        <p
          class="text-sm sm:text-base md:text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mt-4 md:mt-6 px-4">
          Proficient in responsive design, cross-browser compatibility, and UI/UX principles. Strong problem-solving
          skills, collaboration, and attention to detail.
        </p>
      </div>

      <!-- Marquee Container -->
      <div class="relative">
        <!-- Left fade gradient -->
        <div class="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 lg:w-48 z-10 pointer-events-none fade-left">
        </div>
        <!-- Right fade gradient -->
        <div class="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 lg:w-48 z-10 pointer-events-none fade-right">
        </div>

        <!-- Row 1 - Marquee Left to Right -->
        <div class="marquee-container mb-4 sm:mb-5 md:mb-6">
          <div class="marquee-track marquee-left">
            <div class="marquee-content">
              <div v-for="skill in row1Skills" :key="'r1-' + skill.id" class="skill-card-wrapper">
                <div
                  class="skill-card group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800/80 border border-gray-200/80 dark:border-slate-700/50 p-4 sm:p-5 md:p-6 lg:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/50 hover:-translate-y-2 cursor-pointer card-width">
                  <!-- Background gradient on hover -->
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-purple-50 dark:from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>

                  <!-- Shine effect on hover -->
                  <div
                    class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent">
                  </div>

                  <!-- Content -->
                  <div class="relative z-10 flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
                    <div
                      class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px] flex items-center justify-center rounded-xl sm:rounded-2xl bg-gray-50 dark:bg-slate-700/50 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                      <img :src="skill.image" :alt="skill.name"
                        class="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3
                      class="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-700 dark:text-gray-200 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 whitespace-nowrap">
                      {{ skill.name }}
                    </h3>
                    <!-- Hover indicator line -->
                    <div
                      class="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 md:h-1 w-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full group-hover:w-8 md:group-hover:w-12 transition-all duration-500">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Duplicate for seamless loop -->
            <div class="marquee-content" aria-hidden="true">
              <div v-for="skill in row1Skills" :key="'r1-dup-' + skill.id" class="skill-card-wrapper">
                <div
                  class="skill-card group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800/80 border border-gray-200/80 dark:border-slate-700/50 p-4 sm:p-5 md:p-6 lg:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/50 hover:-translate-y-2 cursor-pointer card-width">
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-purple-50 dark:from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                  <div
                    class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent">
                  </div>
                  <div class="relative z-10 flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
                    <div
                      class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px] flex items-center justify-center rounded-xl sm:rounded-2xl bg-gray-50 dark:bg-slate-700/50 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                      <img :src="skill.image" :alt="skill.name"
                        class="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3
                      class="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-700 dark:text-gray-200 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 whitespace-nowrap">
                      {{ skill.name }}
                    </h3>
                    <div
                      class="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 md:h-1 w-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full group-hover:w-8 md:group-hover:w-12 transition-all duration-500">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 2 - Marquee Right to Left -->
        <div class="marquee-container">
          <div class="marquee-track marquee-right">
            <div class="marquee-content">
              <div v-for="skill in row2Skills" :key="'r2-' + skill.id" class="skill-card-wrapper">
                <div
                  class="skill-card group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800/80 border border-gray-200/80 dark:border-slate-700/50 p-4 sm:p-5 md:p-6 lg:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/50 hover:-translate-y-2 cursor-pointer card-width">
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-purple-50 dark:from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                  <div
                    class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent">
                  </div>
                  <div class="relative z-10 flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
                    <div
                      class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px] flex items-center justify-center rounded-xl sm:rounded-2xl bg-gray-50 dark:bg-slate-700/50 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                      <img :src="skill.image" :alt="skill.name"
                        class="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3
                      class="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-700 dark:text-gray-200 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 whitespace-nowrap">
                      {{ skill.name }}
                    </h3>
                    <div
                      class="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 md:h-1 w-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full group-hover:w-8 md:group-hover:w-12 transition-all duration-500">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Duplicate for seamless loop -->
            <div class="marquee-content" aria-hidden="true">
              <div v-for="skill in row2Skills" :key="'r2-dup-' + skill.id" class="skill-card-wrapper">
                <div
                  class="skill-card group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800/80 border border-gray-200/80 dark:border-slate-700/50 p-4 sm:p-5 md:p-6 lg:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/10 hover:border-purple-400 dark:hover:border-purple-500/50 hover:-translate-y-2 cursor-pointer card-width">
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-purple-50 dark:from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                  <div
                    class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent">
                  </div>
                  <div class="relative z-10 flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
                    <div
                      class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px] flex items-center justify-center rounded-xl sm:rounded-2xl bg-gray-50 dark:bg-slate-700/50 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                      <img :src="skill.image" :alt="skill.name"
                        class="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3
                      class="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-700 dark:text-gray-200 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 whitespace-nowrap">
                      {{ skill.name }}
                    </h3>
                    <div
                      class="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 md:h-1 w-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full group-hover:w-8 md:group-hover:w-12 transition-all duration-500">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats or CTA -->
      <div class="mt-12 md:mt-16 text-center animate-fade-in-delayed">
        <p class="text-xs sm:text-sm text-gray-500 dark:text-slate-400 mb-4">
          {{ skills.length }} Technologies • Always Learning
        </p>
        <div
          class="h-1 w-10 md:w-12 mx-auto bg-gradient-to-r from-indigo-400 via-purple-500 to-purple-600 rounded-full opacity-30 animate-pulse-slow">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const skills = [
  {
    id: 1,
    name: 'HTML',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    id: 2,
    name: 'CSS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    id: 3,
    name: 'SCSS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  },
  {
    id: 4,
    name: 'Bootstrap',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  },
  {
    id: 5,
    name: 'Tailwind CSS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    id: 6,
    name: 'JavaScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    id: 7,
    name: 'Vue JS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  },
  {
    id: 8,
    name: 'Nuxt JS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
  },
  {
    id: 9,
    name: 'jQuery',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
  },
  {
    id: 10,
    name: 'Vuetify',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg',
  },
  {
    id: 11,
    name: 'Ant Design',
    image: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
  {
    id: 12,
    name: 'WordPress',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
  },
  {
    id: 13,
    name: 'PHP',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  },
  {
    id: 14,
    name: 'MySQL',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    id: 15,
    name: 'Git',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    id: 16,
    name: 'GitHub',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    id: 17,
    name: 'Video Editing',
    image: 'https://cdn-icons-png.flaticon.com/512/5977/5977590.png',
  },
  {
    id: 18,
    name: 'Photoshop',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg',
  },
]

// Split skills into two rows
const row1Skills = computed(() => skills.slice(0, Math.ceil(skills.length / 2)))
const row2Skills = computed(() => skills.slice(Math.ceil(skills.length / 2)))
</script>

<style scoped>
/* 
  Background Colors:
  Light Mode: #f8fafc (slate-50)
  Dark Mode: #0f172a (slate-900)
*/

.skills-section {
  background-color: #f8fafc;
}

:root.dark .skills-section,
.dark .skills-section {
  background-color: #0f172a;
}

/* Responsive Card Widths */
.card-width {
  width: 120px;
  /* Mobile */
}

@media (min-width: 640px) {
  .card-width {
    width: 150px;
    /* sm */
  }
}

@media (min-width: 768px) {
  .card-width {
    width: 170px;
    /* md */
  }
}

@media (min-width: 1024px) {
  .card-width {
    width: 190px;
    /* lg */
  }
}

@media (min-width: 1280px) {
  .card-width {
    width: 210px;
    /* xl */
  }
}

/* Fade gradients - Perfect blend with background */
.fade-left {
  background: linear-gradient(to right,
      #f8fafc 0%,
      #f8fafc 30%,
      rgba(248, 250, 252, 0.8) 60%,
      rgba(248, 250, 252, 0.3) 80%,
      transparent 100%);
}

.fade-right {
  background: linear-gradient(to left,
      #f8fafc 0%,
      #f8fafc 30%,
      rgba(248, 250, 252, 0.8) 60%,
      rgba(248, 250, 252, 0.3) 80%,
      transparent 100%);
}

/* Dark mode fade gradients */
:root.dark .fade-left,
.dark .fade-left {
  background: linear-gradient(to right,
      #0f172a 0%,
      #0f172a 30%,
      rgba(15, 23, 42, 0.8) 60%,
      rgba(15, 23, 42, 0.3) 80%,
      transparent 100%);
}

:root.dark .fade-right,
.dark .fade-right {
  background: linear-gradient(to left,
      #0f172a 0%,
      #0f172a 30%,
      rgba(15, 23, 42, 0.8) 60%,
      rgba(15, 23, 42, 0.3) 80%,
      transparent 100%);
}

/* Marquee Container */
.marquee-container {
  width: 100%;
  overflow: hidden;
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 0.75rem;
  /* 12px - Mobile */
}

.marquee-content {
  display: flex;
  gap: 0.75rem;
  /* 12px - Mobile */
  padding: 0.5rem 0;
}

@media (min-width: 640px) {

  .marquee-track,
  .marquee-content {
    gap: 1rem;
    /* 16px - sm */
  }
}

@media (min-width: 768px) {

  .marquee-track,
  .marquee-content {
    gap: 1.25rem;
    /* 20px - md */
  }
}

@media (min-width: 1024px) {

  .marquee-track,
  .marquee-content {
    gap: 1.5rem;
    /* 24px - lg */
  }
}

.skill-card-wrapper {
  flex-shrink: 0;
}

/* Marquee Animations */
@keyframes marquee-left {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-50% - 0.375rem));
  }
}

@keyframes marquee-right {
  0% {
    transform: translateX(calc(-50% - 0.375rem));
  }

  100% {
    transform: translateX(0);
  }
}

@media (min-width: 640px) {
  @keyframes marquee-left {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(calc(-50% - 0.5rem));
    }
  }

  @keyframes marquee-right {
    0% {
      transform: translateX(calc(-50% - 0.5rem));
    }

    100% {
      transform: translateX(0);
    }
  }
}

@media (min-width: 768px) {
  @keyframes marquee-left {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(calc(-50% - 0.625rem));
    }
  }

  @keyframes marquee-right {
    0% {
      transform: translateX(calc(-50% - 0.625rem));
    }

    100% {
      transform: translateX(0);
    }
  }
}

@media (min-width: 1024px) {
  @keyframes marquee-left {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(calc(-50% - 0.75rem));
    }
  }

  @keyframes marquee-right {
    0% {
      transform: translateX(calc(-50% - 0.75rem));
    }

    100% {
      transform: translateX(0);
    }
  }
}

.marquee-left {
  animation: marquee-left 25s linear infinite;
}

.marquee-right {
  animation: marquee-right 25s linear infinite;
}

@media (min-width: 640px) {
  .marquee-left {
    animation: marquee-left 30s linear infinite;
  }

  .marquee-right {
    animation: marquee-right 30s linear infinite;
  }
}

@media (min-width: 768px) {
  .marquee-left {
    animation: marquee-left 35s linear infinite;
  }

  .marquee-right {
    animation: marquee-right 35s linear infinite;
  }
}

@media (min-width: 1024px) {
  .marquee-left {
    animation: marquee-left 40s linear infinite;
  }

  .marquee-right {
    animation: marquee-right 40s linear infinite;
  }
}

/* Pause on hover */
.marquee-container:hover .marquee-track {
  animation-play-state: paused;
}

/* Header Animations */
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

@keyframes expand {
  from {
    width: 0;
  }

  to {
    width: 5rem;
  }
}

@keyframes pulseSlow {

  0%,
  100% {
    opacity: 0.3;
  }

  50% {
    opacity: 0.5;
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-expand {
  animation: expand 0.8s ease-out;
}

.animate-fade-in-delayed {
  animation: fadeIn 0.6s ease-out 0.3s backwards;
}

.animate-pulse-slow {
  animation: pulseSlow 3s ease-in-out infinite;
}

/* Smooth transitions for cards */
.skill-card {
  will-change: transform;
}
</style>