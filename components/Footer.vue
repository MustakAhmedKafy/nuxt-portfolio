<template>
  <footer class="relative overflow-hidden transition-colors duration-500"
    :class="isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950' : 'bg-gradient-to-br from-gray-100 via-white to-indigo-100'">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
        :class="isDark ? 'bg-purple-500/5' : 'bg-purple-500/10'"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl"
        :class="isDark ? 'bg-indigo-500/5' : 'bg-indigo-500/10'"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="py-12 md:py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          <!-- Brand Column -->
          <div class="lg:col-span-1" data-aos="fade-up" data-aos-delay="0">
            <a href="#home" class="flex items-center space-x-3 group mb-6">
              <div class="w-11 h-11 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-105">
                <Icon icon="ph:code-bold" class="w-6 h-6 text-white" />
              </div>
              <span class="text-2xl font-bold transition-colors"
                :class="isDark ? 'text-white' : 'text-slate-900'">Portfolio</span>
            </a>
            <p class="text-sm leading-relaxed mb-6 transition-colors"
              :class="isDark ? 'text-slate-400' : 'text-slate-600'">
              Crafting exceptional digital experiences with modern technologies. Let's build something amazing together.
            </p>
            <!-- Social Links -->
            <div class="flex space-x-3">
              <a v-for="social in socialLinks" :key="social.name" :href="social.href" target="_blank" rel="noopener noreferrer"
                class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 group"
                :class="isDark ? 'bg-slate-800/80 hover:bg-purple-500' : 'bg-gray-200 hover:bg-purple-500'">
                <Icon :icon="social.icon" class="w-5 h-5 transition-colors"
                  :class="isDark ? 'text-slate-400 group-hover:text-white' : 'text-slate-600 group-hover:text-white'" />
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 class="text-lg font-semibold mb-6 flex items-center transition-colors"
              :class="isDark ? 'text-white' : 'text-slate-900'">
              <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
              Quick Links
            </h4>
            <ul class="space-y-3">
              <li v-for="link in quickLinks" :key="link.name">
                <a :href="link.href"
                  class="hover:text-purple-500 transition-colors duration-300 flex items-center group"
                  :class="isDark ? 'text-slate-400' : 'text-slate-600'">
                  <Icon icon="ph:caret-right" class="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{{ link.name }}</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 class="text-lg font-semibold mb-6 flex items-center transition-colors"
              :class="isDark ? 'text-white' : 'text-slate-900'">
              <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
              Services
            </h4>
            <ul class="space-y-3">
              <li v-for="service in services" :key="service">
                <span class="flex items-center transition-colors"
                  :class="isDark ? 'text-slate-400' : 'text-slate-600'">
                  <Icon icon="ph:check-circle-duotone" class="w-4 h-4 mr-2 text-purple-500" />
                  {{ service }}
                </span>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 class="text-lg font-semibold mb-6 flex items-center transition-colors"
              :class="isDark ? 'text-white' : 'text-slate-900'">
              <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
              Get in Touch
            </h4>
            <ul class="space-y-4">
              <li v-for="contact in contactInfo" :key="contact.label">
                <a :href="contact.href"
                  class="flex items-start group">
                  <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 transition-colors"
                    :class="isDark ? 'bg-slate-800/80 group-hover:bg-purple-500/20' : 'bg-gray-200 group-hover:bg-purple-100'">
                    <Icon :icon="contact.icon" class="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <p class="text-xs uppercase tracking-wide transition-colors"
                      :class="isDark ? 'text-slate-500' : 'text-slate-500'">{{ contact.label }}</p>
                    <p class="group-hover:text-purple-500 transition-colors"
                      :class="isDark ? 'text-slate-300' : 'text-slate-700'">{{ contact.value }}</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="py-6 border-t transition-colors"
        :class="isDark ? 'border-slate-700/50' : 'border-gray-300/50'">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-sm transition-colors"
            :class="isDark ? 'text-slate-400' : 'text-slate-600'">
            &copy; {{ currentYear }} <span class="text-purple-500 font-medium">Portfolio</span>. All rights reserved.
          </p>
          <div class="flex items-center space-x-6">
            <a href="#" class="text-sm hover:text-purple-500 transition-colors"
              :class="isDark ? 'text-slate-400' : 'text-slate-600'">Privacy Policy</a>
            <a href="#" class="text-sm hover:text-purple-500 transition-colors"
              :class="isDark ? 'text-slate-400' : 'text-slate-600'">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

// Props from parent
defineProps({
  isDark: {
    type: Boolean,
    default: false
  }
})

const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: 'mdi:linkedin' },
  { name: 'GitHub', href: '#', icon: 'mdi:github' },
  { name: 'Twitter', href: '#', icon: 'mdi:twitter' },
  { name: 'Dribbble', href: '#', icon: 'mdi:dribbble' }
]

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#work' },
  { name: 'Contact', href: '#contact' }
]

const services = [
  'Web Development',
  'UI/UX Design',
  'Mobile Apps',
  'Consulting'
]

const contactInfo = [
  { label: 'Email', value: 'hello@portfolio.com', icon: 'ph:envelope-duotone', href: 'mailto:hello@portfolio.com' },
  { label: 'Phone', value: '+1 234 567 890', icon: 'ph:phone-duotone', href: 'tel:+1234567890' },
  { label: 'Location', value: 'New York, USA', icon: 'ph:map-pin-duotone', href: '#' }
]
</script>
