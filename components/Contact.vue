<script setup>
import { ref, reactive } from 'vue'
import { Icon } from '@iconify/vue'

const form = reactive({
  fullName: '',
  email: '',
  subject: '',
  message: ''
})

const subjects = [
  'Logo Design',
  'Web Design',
  'App Development',
  'Branding',
  'Other'
]

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  console.log('Form submitted:', form)
  isSubmitting.value = false
}

const contactInfo = [
  {
    icon: 'ph:phone-call-duotone',
    label: 'Call Us',
    value: '+49 (0) 9132 84-0478',
    href: 'tel:+4909132840478'
  },
  {
    icon: 'ph:envelope-duotone',
    label: 'Email Us',
    value: 'hi@johndesign.com',
    href: 'mailto:hi@johndesign.com'
  },
  {
    icon: 'ph:map-pin-duotone',
    label: 'Visit Us',
    value: '1802 Black Trail Suite 636',
    href: '#'
  }
]

const socialLinks = [
  { icon: 'ph:dribbble-logo-fill', href: '#', label: 'Dribbble' },
  { icon: 'ph:behance-logo-fill', href: '#', label: 'Behance' },
  { icon: 'ph:linkedin-logo-fill', href: '#', label: 'LinkedIn' },
  { icon: 'ph:instagram-logo-fill', href: '#', label: 'Instagram' }
]
</script>

<template>
  <section
    class="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-violet-950/20 overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Gradient Orbs -->
      <div
        class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-400/20 dark:bg-violet-600/20 rounded-full blur-[120px] animate-pulse-slow">
      </div>
      <div
        class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-400/15 dark:bg-fuchsia-600/15 rounded-full blur-[100px] animate-pulse-slower">
      </div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-300/10 dark:bg-indigo-600/10 rounded-full blur-[140px]">
      </div>

      <!-- Grid Pattern -->
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]">
      </div>

      <!-- Floating Particles -->
      <div
        class="absolute top-20 left-[10%] w-2 h-2 bg-violet-500/50 dark:bg-violet-400/60 rounded-full animate-float-1">
      </div>
      <div
        class="absolute top-40 right-[15%] w-1.5 h-1.5 bg-fuchsia-500/40 dark:bg-fuchsia-400/50 rounded-full animate-float-2">
      </div>
      <div
        class="absolute bottom-32 left-[20%] w-1 h-1 bg-indigo-500/60 dark:bg-indigo-400/70 rounded-full animate-float-3">
      </div>
      <div
        class="absolute top-1/3 right-[25%] w-2.5 h-2.5 bg-violet-400/30 dark:bg-violet-300/40 rounded-full animate-float-1">
      </div>
      <div
        class="absolute bottom-1/4 right-[10%] w-1.5 h-1.5 bg-pink-500/40 dark:bg-pink-400/50 rounded-full animate-float-2">
      </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
      <!-- Header Section -->
      <div class="text-center mb-12 sm:mb-16 lg:mb-20">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 mb-6 backdrop-blur-sm">
          <span class="w-2 h-2 bg-violet-500 dark:bg-violet-400 rounded-full animate-pulse"></span>
          <span class="text-violet-600 dark:text-violet-300 text-sm font-medium tracking-wide">Available for
            Projects</span>
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span class="text-slate-800 dark:text-white">Let's Create</span>
          <br>
          <span
            class="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-pink-400 bg-clip-text text-transparent">
            Something Amazing
          </span>
        </h1>

        <p class="text-slate-600 dark:text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Have a project in mind? We'd love to hear about it. Send us a message and let's bring your vision to life.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

        <!-- Left Side - Contact Info -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Contact Cards -->
          <div class="space-y-4">
            <a v-for="(info, index) in contactInfo" :key="index" :href="info.href"
              class="group block p-5 sm:p-6 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] backdrop-blur-sm hover:bg-white dark:hover:bg-white/[0.06] hover:border-violet-300 dark:hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300">
              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-500/20 dark:to-fuchsia-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon :icon="info.icon" class="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p class="text-slate-500 dark:text-slate-500 text-sm mb-1">{{ info.label }}</p>
                  <p
                    class="text-slate-800 dark:text-white font-medium group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">
                    {{ info.value }}</p>
                </div>
              </div>
            </a>
          </div>

          <!-- Social Links -->
          <div class="pt-6 border-t border-slate-200 dark:border-white/[0.05]">
            <p class="text-slate-500 dark:text-slate-500 text-sm mb-4">Follow Us</p>
            <div class="flex gap-3">
              <a v-for="social in socialLinks" :key="social.label" :href="social.href" :aria-label="social.label"
                class="w-11 h-11 rounded-xl bg-white/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 hover:border-violet-300 dark:hover:border-violet-500/30 transition-all duration-300">
                <Icon :icon="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Decorative Quote -->
          <div
            class="hidden lg:block p-6 rounded-2xl bg-gradient-to-br from-violet-100/80 to-fuchsia-100/50 dark:from-violet-500/10 dark:to-fuchsia-500/5 border border-violet-200/50 dark:border-violet-500/10">
            <Icon icon="ph:quotes-fill" class="w-8 h-8 text-violet-400/60 dark:text-violet-500/50 mb-3" />
            <p class="text-slate-700 dark:text-slate-300 italic leading-relaxed">
              "Great design is not just what it looks like, but how it works and feels."
            </p>
            <p class="text-violet-600 dark:text-violet-400 text-sm mt-3 font-medium">— Our Philosophy</p>
          </div>
        </div>

        <!-- Right Side - Contact Form -->
        <div class="lg:col-span-3">
          <div class="relative">
            <!-- Glow Effect Behind Card -->
            <div
              class="absolute -inset-1 bg-gradient-to-r from-violet-400/30 via-fuchsia-400/30 to-pink-400/30 dark:from-violet-600/20 dark:via-fuchsia-600/20 dark:to-pink-600/20 rounded-3xl blur-xl opacity-60 dark:opacity-50">
            </div>

            <!-- Form Card -->
            <div
              class="relative bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-white/[0.08] p-6 sm:p-8 lg:p-10 shadow-xl shadow-violet-500/5 dark:shadow-none">
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <!-- Name & Email Row -->
                <div class="grid sm:grid-cols-2 gap-6">
                  <!-- Full Name -->
                  <div class="group">
                    <label for="fullName"
                      class="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 group-focus-within:text-violet-600 dark:group-focus-within:text-violet-400 transition-colors">
                      Full Name
                    </label>
                    <div class="relative">
                      <Icon icon="ph:user-duotone"
                        class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500 group-focus-within:text-violet-500 dark:group-focus-within:text-violet-400 transition-colors" />
                      <input v-model="form.fullName" type="text" id="fullName" placeholder="John Doe"
                        class="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] rounded-xl text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-violet-400 dark:focus:border-violet-500/50 focus:bg-white dark:focus:bg-violet-500/5 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                        required />
                    </div>
                  </div>

                  <!-- Email -->
                  <div class="group">
                    <label for="email"
                      class="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 group-focus-within:text-violet-600 dark:group-focus-within:text-violet-400 transition-colors">
                      Email Address
                    </label>
                    <div class="relative">
                      <Icon icon="ph:envelope-duotone"
                        class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500 group-focus-within:text-violet-500 dark:group-focus-within:text-violet-400 transition-colors" />
                      <input v-model="form.email" type="email" id="email" placeholder="john@example.com"
                        class="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] rounded-xl text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-violet-400 dark:focus:border-violet-500/50 focus:bg-white dark:focus:bg-violet-500/5 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                        required />
                    </div>
                  </div>
                </div>

                <!-- Subject -->
                <div class="group">
                  <label for="subject"
                    class="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 group-focus-within:text-violet-600 dark:group-focus-within:text-violet-400 transition-colors">
                    What can we help you with?
                  </label>
                  <div class="relative">
                    <Icon icon="ph:briefcase-duotone"
                      class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500 group-focus-within:text-violet-500 dark:group-focus-within:text-violet-400 transition-colors z-10" />
                    <select v-model="form.subject" id="subject"
                      class="w-full pl-12 pr-10 py-3.5 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] rounded-xl text-slate-800 dark:text-white appearance-none cursor-pointer focus:outline-none focus:border-violet-400 dark:focus:border-violet-500/50 focus:bg-white dark:focus:bg-violet-500/5 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                      :class="{ 'text-slate-400 dark:text-slate-600': !form.subject }" required>
                      <option value="" disabled class="bg-white dark:bg-slate-900">Select a service</option>
                      <option v-for="subject in subjects" :key="subject" :value="subject"
                        class="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">
                        {{ subject }}
                      </option>
                    </select>
                    <Icon icon="ph:caret-down"
                      class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500 pointer-events-none" />
                  </div>
                </div>

                <!-- Message -->
                <div class="group">
                  <label for="message"
                    class="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 group-focus-within:text-violet-600 dark:group-focus-within:text-violet-400 transition-colors">
                    Your Message
                  </label>
                  <div class="relative">
                    <Icon icon="ph:chat-text-duotone"
                      class="absolute left-4 top-4 w-5 h-5 text-slate-400 dark:text-slate-500 group-focus-within:text-violet-500 dark:group-focus-within:text-violet-400 transition-colors" />
                    <textarea v-model="form.message" id="message" rows="5"
                      placeholder="Tell us about your project, goals, and timeline..."
                      class="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] rounded-xl text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-violet-400 dark:focus:border-violet-500/50 focus:bg-white dark:focus:bg-violet-500/5 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 resize-none"
                      required></textarea>
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="pt-2">
                  <button type="submit" :disabled="isSubmitting"
                    class="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                    <span v-if="!isSubmitting">Send Message</span>
                    <span v-else>Sending...</span>

                    <div v-if="!isSubmitting" class="relative w-5 h-5">
                      <Icon icon="ph:paper-plane-tilt-fill"
                        class="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                    <Icon v-else icon="ph:spinner" class="w-5 h-5 animate-spin" />
                  </button>
                </div>

                <!-- Privacy Note -->
                <p class="text-slate-500 dark:text-slate-500 text-sm">
                  By submitting, you agree to our
                  <a href="#"
                    class="text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:hover:text-violet-300 underline underline-offset-2">Privacy
                    Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom Animations */
@keyframes pulse-slow {

  0%,
  100% {
    opacity: 0.4;
    transform: scale(1);
  }

  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

@keyframes pulse-slower {

  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }

  50% {
    opacity: 0.5;
    transform: scale(1.08);
  }
}

@keyframes float-1 {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  25% {
    transform: translateY(-20px) translateX(10px);
  }

  50% {
    transform: translateY(-10px) translateX(-5px);
  }

  75% {
    transform: translateY(-25px) translateX(5px);
  }
}

@keyframes float-2 {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  33% {
    transform: translateY(-15px) translateX(-10px);
  }

  66% {
    transform: translateY(-25px) translateX(8px);
  }
}

@keyframes float-3 {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  50% {
    transform: translateY(-30px) translateX(-15px);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 12s ease-in-out infinite;
}

.animate-float-1 {
  animation: float-1 6s ease-in-out infinite;
}

.animate-float-2 {
  animation: float-2 8s ease-in-out infinite;
}

.animate-float-3 {
  animation: float-3 10s ease-in-out infinite;
}

/* Remove default select styling */
select {
  background-image: none;
}

/* Custom Scrollbar for Textarea - Light Mode */
textarea::-webkit-scrollbar {
  width: 6px;
}

textarea::-webkit-scrollbar-track {
  background: transparent;
}

textarea::-webkit-scrollbar-thumb {
  background: rgba(139, 92, 246, 0.3);
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: rgba(139, 92, 246, 0.5);
}

/* Focus visible for accessibility */
input:focus-visible,
select:focus-visible,
textarea:focus-visible,
button:focus-visible,
a:focus-visible {
  outline: 2px solid rgba(139, 92, 246, 0.5);
  outline-offset: 2px;
}
</style>