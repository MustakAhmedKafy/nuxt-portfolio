<template>
  <section
    class="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 py-20 px-4 overflow-hidden transition-colors duration-500">
    <div class="max-w-7xl mx-auto">
      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left Side - Content -->
        <div class="space-y-8 lg:pr-8">
          <!-- Animated Badge -->
          <div ref="badge"
            class="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 dark:border-purple-700 shadow-sm">
            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Available for new projects</span>
          </div>

          <!-- Description -->
          <div ref="description" class="space-y-4">
            <p class="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm a passionate front-end developer with 5+ years of experience creating beautiful,
              responsive web applications. I specialize in Vue.js, React, and modern CSS frameworks,
              turning complex ideas into intuitive user experiences.
            </p>
            <p class="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source
              projects, or experimenting with the latest web technologies.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div ref="buttons" class="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              class="cta-primary group relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <span class="relative z-10 flex items-center justify-center gap-2">
                <Icon icon="mdi:rocket-launch" class="w-5 h-5" />
                Let's Work Together
              </span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </button>

            <button
              class="cta-secondary group border-2 border-purple-600 text-purple-600 dark:text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              <span class="flex items-center justify-center gap-2">
                <Icon icon="mdi:download" class="w-5 h-5" />
                Download CV
              </span>
            </button>
          </div>

          <!-- Social Links -->
          <div ref="social" class="flex gap-4 pt-4">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url"
              class="social-link w-12 h-12 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl border border-purple-200 dark:border-purple-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              <Icon :icon="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Right Side - Extraordinary Visual Elements -->
        <div class="relative lg:pl-8">
          <!-- Floating Code Terminal -->
          <div ref="codeTerminal"
            class="relative bg-slate-900 dark:bg-black rounded-2xl p-6 shadow-2xl border border-slate-700 dark:border-slate-600 backdrop-blur-sm">
            <!-- Terminal Header -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div class="text-slate-400 text-xs font-mono">~/portfolio</div>
            </div>

            <!-- Terminal Content -->
            <div class="font-mono text-sm space-y-2">
              <div ref="codeLine1" class="flex items-center gap-2">
                <span class="text-green-400">$</span>
                <span class="text-white typewriter">const developer = {</span>
              </div>
              <div ref="codeLine2" class="ml-4 text-blue-400 typewriter-delay-1">name: "Alex",</div>
              <div ref="codeLine3" class="ml-4 text-purple-400 typewriter-delay-2">skills: ["Vue", "React", "GSAP"],
              </div>
              <div ref="codeLine4" class="ml-4 text-yellow-400 typewriter-delay-3">passion: "creating magic",</div>
              <div ref="codeLine5" class="ml-4 text-pink-400 typewriter-delay-4">coffee: Infinity,</div>
              <div ref="codeLine6" class="ml-4 text-cyan-400 typewriter-delay-5">status: "available"</div>
              <div ref="codeLine7" class="text-white typewriter-delay-6">}</div>
              <div ref="codeLine8" class="flex items-center gap-2 mt-4">
                <span class="text-green-400">$</span>
                <span class="text-white typewriter-delay-7">npm run create-awesome</span>
                <div class="w-2 h-4 bg-white animate-pulse ml-1"></div>
              </div>
            </div>
          </div>

          <!-- Floating Geometric Elements -->
          <div ref="floatingElements" class="absolute inset-0 pointer-events-none">
            <!-- Animated Circles -->
            <div
              class="floating-circle absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 rounded-full blur-sm">
            </div>
            <div
              class="floating-circle-2 absolute bottom-20 left-5 w-16 h-16 bg-gradient-to-br from-indigo-400/30 to-purple-500/30 rounded-full blur-sm">
            </div>
            <div
              class="floating-circle-3 absolute top-1/2 -right-5 w-12 h-12 bg-gradient-to-br from-purple-500/25 to-indigo-600/25 rounded-full blur-sm">
            </div>

            <!-- Animated Lines -->
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <path ref="animatedPath" d="M50,200 Q200,50 350,200 T650,200" stroke="url(#gradient)" stroke-width="2"
                fill="none" opacity="0.3" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
                  <stop offset="50%" style="stop-color:#6366f1;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <!-- Floating Tech Icons -->
          <div ref="techIcons" class="absolute inset-0 pointer-events-none">
            <div class="tech-icon absolute top-16 left-8 w-8 h-8 text-purple-500 opacity-60">
              <Icon icon="logos:vue" class="w-full h-full" />
            </div>
            <div class="tech-icon-2 absolute bottom-32 right-12 w-8 h-8 text-purple-500 opacity-60">
              <Icon icon="logos:react" class="w-full h-full" />
            </div>
            <div class="tech-icon-3 absolute top-1/3 -left-4 w-8 h-8 text-purple-500 opacity-60">
              <Icon icon="simple-icons:greensock" class="w-full h-full" />
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
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Template refs
const badge = ref(null)
const description = ref(null)
const buttons = ref(null)
const social = ref(null)
const codeTerminal = ref(null)
const floatingElements = ref(null)
const techIcons = ref(null)
const animatedPath = ref(null)

// Code lines refs
const codeLine1 = ref(null)
const codeLine2 = ref(null)
const codeLine3 = ref(null)
const codeLine4 = ref(null)
const codeLine5 = ref(null)
const codeLine6 = ref(null)
const codeLine7 = ref(null)
const codeLine8 = ref(null)

const socialLinks = [
  { name: 'GitHub', icon: 'mdi:github', url: '#' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: '#' },
  { name: 'Twitter', icon: 'mdi:twitter', url: '#' },
  { name: 'Dribbble', icon: 'mdi:dribbble', url: '#' }
]

onMounted(() => {
  // Create main timeline with improved easing
  const tl = gsap.timeline()

  // Enhanced entrance animations
  tl.from(badge.value, {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "elastic.out(1, 0.5)"
  })
    .from(description.value, {
      duration: 1,
      y: 40,
      opacity: 0,
      ease: "power3.out"
    }, "-=0.7")
    .from(buttons.value.children, {
      duration: 1,
      y: 40,
      opacity: 0,
      stagger: 0.15,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.4")
    .from(social.value.children, {
      duration: 0.8,
      scale: 0,
      opacity: 0,
      stagger: 0.08,
      ease: "elastic.out(1, 0.6)"
    }, "-=0.3")

  // Enhanced code terminal animation
  gsap.from(codeTerminal.value, {
    duration: 1.5,
    x: 150,
    y: -50,
    opacity: 0,
    rotation: 5,
    ease: "power4.out",
    delay: 0.5
  })

  // Typewriter effect for code lines
  const codeLines = [codeLine1, codeLine2, codeLine3, codeLine4, codeLine5, codeLine6, codeLine7, codeLine8]
  codeLines.forEach((line, index) => {
    gsap.from(line.value, {
      duration: 0.8,
      opacity: 0,
      x: -20,
      ease: "power2.out",
      delay: 1.2 + (index * 0.3)
    })
  })

  // Floating elements animations
  gsap.from(floatingElements.value.children, {
    duration: 1,
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    ease: "elastic.out(1, 0.5)",
    delay: 1.5
  })

  gsap.from(techIcons.value.children, {
    duration: 1,
    scale: 0,
    opacity: 0,
    rotation: 180,
    stagger: 0.3,
    ease: "elastic.out(1, 0.6)",
    delay: 2
  })

  // Continuous floating animations
  gsap.to(".floating-circle", {
    duration: 4,
    y: -20,
    x: 10,
    rotation: 360,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  })

  gsap.to(".floating-circle-2", {
    duration: 5,
    y: -15,
    x: -8,
    rotation: -360,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 1
  })

  gsap.to(".floating-circle-3", {
    duration: 3.5,
    y: -25,
    x: 5,
    rotation: 180,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5
  })

  // Tech icons floating
  gsap.to(".tech-icon", {
    duration: 6,
    y: -30,
    rotation: 15,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  })

  gsap.to(".tech-icon-2", {
    duration: 5,
    y: -25,
    rotation: -10,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 1
  })

  gsap.to(".tech-icon-3", {
    duration: 7,
    y: -35,
    rotation: 20,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 2
  })

  // Code terminal floating
  gsap.to(codeTerminal.value, {
    duration: 6,
    y: -20,
    rotation: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 2
  })

  // Animated SVG path
  if (animatedPath.value) {
    const pathLength = animatedPath.value.getTotalLength()
    gsap.set(animatedPath.value, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength
    })

    gsap.to(animatedPath.value, {
      duration: 3,
      strokeDashoffset: 0,
      ease: "power2.inOut",
      delay: 2,
      repeat: -1,
      yoyo: true
    })
  }

  // Social links hover animations
  const socialLinksElements = document.querySelectorAll('.social-link')
  socialLinksElements.forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        duration: 0.4,
        scale: 1.15,
        rotation: 10,
        y: -5,
        ease: "elastic.out(1, 0.5)"
      })
    })
    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        duration: 0.4,
        scale: 1,
        rotation: 0,
        y: 0,
        ease: "power2.out"
      })
    })
  })
})
</script>

<style scoped>
/* Dark mode transitions */
* {
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

/* Enhanced typewriter effect */
.typewriter {
  overflow: hidden;
  white-space: nowrap;
  animation: typewriter 2s steps(20) forwards;
}

.typewriter-delay-1 {
  animation: typewriter 1.5s steps(15) 0.5s forwards;
  opacity: 0;
}

.typewriter-delay-2 {
  animation: typewriter 1.8s steps(25) 1s forwards;
  opacity: 0;
}

.typewriter-delay-3 {
  animation: typewriter 1.6s steps(20) 1.5s forwards;
  opacity: 0;
}

.typewriter-delay-4 {
  animation: typewriter 1.4s steps(18) 2s forwards;
  opacity: 0;
}

.typewriter-delay-5 {
  animation: typewriter 1.7s steps(22) 2.5s forwards;
  opacity: 0;
}

.typewriter-delay-6 {
  animation: typewriter 1.2s steps(10) 3s forwards;
  opacity: 0;
}

.typewriter-delay-7 {
  animation: typewriter 2s steps(25) 3.5s forwards;
  opacity: 0;
}

@keyframes typewriter {
  from {
    width: 0;
    opacity: 0;
  }

  1% {
    opacity: 1;
  }

  to {
    width: 100%;
    opacity: 1;
  }
}

/* Enhanced gradient animation */
@keyframes gradient-shift {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.text-transparent {
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #9333ea;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #7c3aed;
}

/* Dark mode scrollbar */
@media (prefers-color-scheme: dark) {
  ::-webkit-scrollbar-track {
    background: #1e293b;
  }
}

/* Backdrop blur fallback */
@supports not (backdrop-filter: blur(12px)) {
  .backdrop-blur-sm {
    background-color: rgba(255, 255, 255, 0.9);
  }

  .dark .backdrop-blur-sm {
    background-color: rgba(30, 41, 59, 0.9);
  }
}

/* Print styles */
@media print {
  .backdrop-blur-sm {
    background-color: white;
  }
}
</style>