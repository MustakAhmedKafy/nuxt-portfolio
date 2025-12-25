<template>
  <section id="experience"
    class="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 transition-colors duration-300">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-blob">
      </div>
      <div
        class="absolute top-40 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl animate-blob animation-delay-2000">
      </div>
      <div
        class="absolute -bottom-20 left-1/3 w-80 h-80 bg-purple-600/10 dark:bg-purple-600/5 rounded-full blur-3xl animate-blob animation-delay-4000">
      </div>
    </div>

    <!-- Grid Pattern Overlay -->
    <div class="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16 md:mb-20">
        <div
          class="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 bg-purple-100 dark:bg-purple-900/30 rounded-full">
          <icon icon="ph:briefcase-duotone" class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mr-2" />
          <span
            class="text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wide">Professional
            Journey</span>
        </div>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
          Professional <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">Background</span>
        </h2>
        <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
          Experienced front-end developer with a robust professional background. Proficient in web technologies,
          responsive design, and clean coding practices. Dedicated to delivering visually appealing and functional
          websites.
        </p>
      </div>

      <!-- Timeline -->
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Timeline Line -->
          <div
            class="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-200 via-purple-400 to-purple-200 dark:from-purple-800 dark:via-purple-500 dark:to-purple-800 transform md:-translate-x-1/2">
          </div>

          <!-- Timeline Items -->
          <div v-for="(item, index) in backgroundItems" :key="index" class="relative mb-8 sm:mb-10 md:mb-12 last:mb-0">
            <div class="flex flex-col md:flex-row md:items-center gap-6"
              :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
              <!-- Timeline Dot -->
              <div
                class="absolute left-6 sm:left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                <div class="relative">
                  <!-- Pulse Effect -->
                  <div class="absolute inset-0 bg-purple-500 dark:bg-purple-400 rounded-full animate-ping opacity-20">
                  </div>
                  <!-- Main Icon Circle -->
                  <div
                    class="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 dark:from-purple-400 dark:via-purple-500 dark:to-purple-600 rounded-full flex items-center justify-center shadow-xl shadow-purple-500/30 dark:shadow-purple-400/30 ring-4 ring-white dark:ring-gray-800 transition-transform duration-300 hover:scale-110">
                    <icon :icon="item.icon" class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
              </div>

              <!-- Content Card -->
              <div class="md:w-1/2 ml-20 sm:ml-24 md:ml-0"
                :class="index % 2 === 0 ? 'md:pr-10 lg:pr-12 md:text-right' : 'md:pl-10 lg:pl-12 md:text-left'">
                <div
                  class="group relative bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700/50 hover:-translate-y-1 overflow-hidden"
                  :class="item.borderHoverClass">
                  <!-- Single Corner Circle - Different Colors -->
                  <div class="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-25 dark:opacity-20 transition-opacity duration-300 group-hover:opacity-40 dark:group-hover:opacity-30"
                    :class="item.circleClass"></div>

                  <!-- Content -->
                  <div class="relative z-10">
                    <!-- Date Badge -->
                    <div
                      class="inline-flex items-center gap-1.5 px-3 py-1 mb-2.5 bg-purple-50 dark:bg-purple-900/40 backdrop-blur-sm rounded-full border border-purple-200/50 dark:border-purple-700/50">
                      <icon icon="ph:calendar-duotone" class="w-3 h-3 text-purple-600 dark:text-purple-400" />
                      <span class="text-xs font-semibold text-purple-700 dark:text-purple-300">{{ item.date }}</span>
                    </div>

                    <!-- Title -->
                    <h3
                      class="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1.5 leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {{ item.title }}
                    </h3>

                    <!-- Company -->
                    <div class="flex items-center gap-1.5"
                      :class="index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'">
                      <icon icon="ph:buildings-duotone" class="w-4 h-4 text-purple-500 dark:text-purple-400" />
                      <p class="text-sm sm:text-base font-semibold text-purple-600 dark:text-purple-400">
                        {{ item.company }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const backgroundItems = ref([
  {
    date: 'December 06, 2023 – Continuing',
    title: 'Software Engineer',
    company: 'AT Limited',
    icon: 'ph:briefcase-duotone',
    circleClass: 'bg-purple-400',
    borderHoverClass: 'hover:border-purple-300 dark:hover:border-purple-500/50'
  },
  {
    date: 'March 27, 2023 – November 30, 2023',
    title: 'Junior Software Engineer',
    company: 'Neutron Ltd',
    icon: 'ph:code-duotone',
    circleClass: 'bg-sky-400',
    borderHoverClass: 'hover:border-sky-300 dark:hover:border-sky-500/50'
  },
  {
    date: 'May 10, 2022 – March 8, 2023',
    title: 'Assistant Senior Officer',
    company: 'Walton Digi-Tech Industries Limited',
    icon: 'ph:user-gear-duotone',
    circleClass: 'bg-amber-400',
    borderHoverClass: 'hover:border-amber-300 dark:hover:border-amber-500/50'
  },
  {
    date: 'June 10, 2021 – December 10, 2021',
    title: 'Frontend Developer',
    company: 'Developer Experience Hub',
    icon: 'ph:devices-duotone',
    circleClass: 'bg-emerald-400',
    borderHoverClass: 'hover:border-emerald-300 dark:hover:border-emerald-500/50'
  }
]);
</script>

<style scoped>
@keyframes blob {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  33% {
    transform: translate(30px, -50px) scale(1.1);
  }

  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes ping {

  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-ping {
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Custom scrollbar for consistency */
::-webkit-scrollbar {
  width: 8px;
}


</style>
