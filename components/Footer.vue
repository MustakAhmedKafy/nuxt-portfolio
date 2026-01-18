<script setup>
import { Icon } from '@iconify/vue'

const currentYear = new Date().getFullYear()

const socialLinks = [
  { icon: 'ph:github-logo-fill', href: 'https://github.com/ahmedmustak', label: 'GitHub' },
  { icon: 'ph:linkedin-logo-fill', href: 'https://linkedin.com/in/ahmedmustak', label: 'LinkedIn' },
  { icon: 'ph:facebook-logo-fill', href: '#', label: 'Facebook' },
  { icon: 'ph:instagram-logo-fill', href: '#', label: 'Instagram' }
]

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]
</script>

<template>
  <footer class="relative bg-slate-900 dark:bg-slate-950 text-white overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]">
      </div>
      <div
        class="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]">
      </div>
      <div
        class="absolute top-0 right-1/4 w-[300px] h-[300px] bg-fuchsia-600/10 rounded-full blur-[100px]">
      </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        <!-- Logo & Description -->
        <div class="text-center md:text-left">
          <a href="#home" class="inline-flex items-center gap-2 text-2xl font-bold mb-3">
            <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Ahmed Mustak
            </span>
          </a>
          <p class="text-slate-400 text-sm max-w-xs mx-auto md:mx-0">
            Full Stack Developer crafting modern web experiences with passion and precision.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="text-center">
          <nav class="flex flex-wrap justify-center gap-6">
            <a v-for="link in quickLinks" :key="link.name" :href="link.href"
              class="text-slate-400 hover:text-violet-400 transition-colors duration-300 text-sm">
              {{ link.name }}
            </a>
          </nav>
        </div>

        <!-- Social Links -->
        <div class="text-center md:text-right">
          <div class="flex justify-center md:justify-end gap-3">
            <a v-for="social in socialLinks" :key="social.label" :href="social.href" :aria-label="social.label"
              target="_blank" rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-violet-400 hover:bg-violet-500/10 hover:border-violet-500/30 transition-all duration-300">
              <Icon :icon="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="py-6 border-t border-white/10">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-slate-500 text-sm">
            {{ currentYear }} Ahmed Mustak. All rights reserved.
          </p>
          <p class="text-slate-500 text-sm flex items-center gap-1">
            Crafted with
            <Icon icon="ph:heart-fill" class="w-4 h-4 text-red-500" />
            & passion
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
