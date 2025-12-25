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
  <section id="contact"
    class="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/20 overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Gradient Orbs -->
      <div
        class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow">
      </div>
      <div
        class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-400/15 dark:bg-purple-600/15 rounded-full blur-[100px] animate-pulse-slower">
      </div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-300/10 dark:bg-indigo-600/10 rounded-full blur-[140px]">
      </div>

      <!-- Grid Pattern -->
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]">
      </div>

      <!-- Floating Particles -->
      <div
        class="absolute top-20 left-[10%] w-2 h-2 bg-indigo-500/50 dark:bg-indigo-400/60 rounded-full animate-float-1">
      </div>
      <div
        class="absolute top-40 right-[15%] w-1.5 h-1.5 bg-purple-500/40 dark:bg-purple-400/50 rounded-full animate-float-2">
      </div>
      <div
        class="absolute bottom-32 left-[20%] w-1 h-1 bg-indigo-500/60 dark:bg-indigo-400/70 rounded-full animate-float-3">
      </div>
      <div
        class="absolute top-1/3 right-[25%] w-2.5 h-2.5 bg-indigo-400/30 dark:bg-indigo-300/40 rounded-full animate-float-1">
      </div>
      <div
        class="absolute bottom-1/4 right-[10%] w-1.5 h-1.5 bg-purple-500/40 dark:bg-purple-400/50 rounded-full animate-float-2">
      </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <!-- Header Section -->
      <div class="text-center mb-12 sm:mb-16 md:mb-20">
        <div
          class="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 bg-purple-100 dark:bg-purple-900/30 rounded-full">
          <Icon icon="ph:envelope-simple-duotone" class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mr-2" />
          <span
            class="text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wide">Get in Touch</span>
        </div>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
          Let's Create <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">Something Amazing</span>
        </h2>
        <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
          Have a project in mind? We'd love to hear about it. Send us a message and let's bring your vision to life.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">

        <!-- Left Side - Contact Info -->
        <div class="lg:col-span-2 flex flex-col space-y-6">
          <!-- Contact Cards -->
          <div class="space-y-4">
            <a v-for="(info, index) in contactInfo" :key="index" :href="info.href"
              class="group block p-5 sm:p-6 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] backdrop-blur-sm hover:bg-white dark:hover:bg-white/[0.06] hover:border-indigo-300 dark:hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-500/20 dark:to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon :icon="info.icon" class="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p class="text-slate-500 dark:text-slate-500 text-sm mb-1">{{ info.label }}</p>
                  <p
                    class="text-slate-800 dark:text-white font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
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
                class="w-11 h-11 rounded-xl bg-white/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300">
                <Icon :icon="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Decorative Quote -->
          <div
            class="hidden lg:flex flex-col justify-center flex-grow p-6 rounded-2xl bg-gradient-to-br from-indigo-100/80 to-purple-100/50 dark:from-indigo-500/10 dark:to-purple-500/5 border border-indigo-200/50 dark:border-indigo-500/10">
            <Icon icon="ph:quotes-fill" class="w-8 h-8 text-indigo-400/60 dark:text-indigo-500/50 mb-3" />
            <p class="text-slate-700 dark:text-slate-300 italic leading-relaxed">
              "Great design is not just what it looks like, but how it works and feels."
            </p>
            <p class="text-indigo-600 dark:text-indigo-400 text-sm mt-3 font-medium">— Our Philosophy</p>
          </div>
        </div>

        <!-- Right Side - Contact Form -->
        <div class="lg:col-span-3 flex flex-col">
          <div class="relative flex-grow flex flex-col">
            <!-- Glow Effect Behind Card -->
            <div
              class="absolute -inset-1 bg-gradient-to-r from-indigo-400/30 via-purple-400/30 to-purple-500/30 dark:from-indigo-600/20 dark:via-purple-600/20 dark:to-purple-700/20 rounded-3xl blur-xl opacity-60 dark:opacity-50">
            </div>

            <!-- Form Card -->
            <div
              class="relative flex-grow bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-white/[0.08] p-6 sm:p-8 lg:p-10 shadow-xl shadow-indigo-500/5 dark:shadow-none">
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <!-- Name & Email Row -->
                <div class="grid sm:grid-cols-2 gap-6">
                  <!-- Full Name -->
                  <div class="group">
                    <label for="fullName"
                      class="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 group-focus-within:text-indigo-600 dark:group-focus-within:text-indigo-400 transition-colors">
                      Full Name
                    </label>
                    <div class="relative">
                      <Icon icon="ph:user-duotone"
                        class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500 group-focus-within:text-indigo-500 dark:group-focus-within:text-indigo-400 transition-colors" />
                      <input v-model="form.fullName" type="text" id="fullName" placeholder="John Doe"
                        class="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] rounded-xl text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500/50 focus:bg-white dark:focus:bg-indigo-500/5 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                        required />
                    </div>
                  </div>

                  <!-- Email -->
                  <div class="group">
                    <label for="email"
                      class="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 group-focus-within:text-indigo-600 dark:group-focus-within:text-indigo-400 transition-colors">
                      Email Address
                    </label>
                    <div class="relative">
                      <Icon icon="ph:envelope-duotone"
                        class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500 group-focus-within:text-indigo-500 dark:group-focus-within:text-indigo-400 transition-colors" />
                      <input v-model="form.email" type="email" id="email" placeholder="john@example.com"
                        class="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] rounded-xl text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500/50 focus:bg-white dark:focus:bg-indigo-500/5 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                        required />
                    </div>
                  </div>
                </div>

                <!-- Subject -->
                <div class="group">
                  <label for="subject"
                    class="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 group-focus-within:text-indigo-600 dark:group-focus-within:text-indigo-400 transition-colors">
                    What can we help you with?
                  </label>
                  <div class="relative">
                    <Icon icon="ph:briefcase-duotone"
                      class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500 group-focus-within:text-indigo-500 dark:group-focus-within:text-indigo-400 transition-colors z-10" />
                    <select v-model="form.subject" id="subject"
                      class="w-full pl-12 pr-10 py-3.5 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] rounded-xl text-slate-800 dark:text-white appearance-none cursor-pointer focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500/50 focus:bg-white dark:focus:bg-indigo-500/5 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
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
                    class="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 group-focus-within:text-indigo-600 dark:group-focus-within:text-indigo-400 transition-colors">
                    Your Message
                  </label>
                  <div class="relative">
                    <Icon icon="ph:chat-text-duotone"
                      class="absolute left-4 top-4 w-5 h-5 text-slate-400 dark:text-slate-500 group-focus-within:text-indigo-500 dark:group-focus-within:text-indigo-400 transition-colors" />
                    <textarea v-model="form.message" id="message" rows="5"
                      placeholder="Tell us about your project, goals, and timeline..."
                      class="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] rounded-xl text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500/50 focus:bg-white dark:focus:bg-indigo-500/5 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 resize-none"
                      required></textarea>
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="pt-2">
                  <button type="submit" :disabled="isSubmitting"
                    class="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0">
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
                    class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 underline underline-offset-2">Privacy
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
  background: rgba(99, 102, 241, 0.3);
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: rgba(99, 102, 241, 0.5);
}

/* Focus visible for accessibility */
input:focus-visible,
select:focus-visible,
textarea:focus-visible,
button:focus-visible,
a:focus-visible {
  outline: 2px solid rgba(99, 102, 241, 0.5);
  outline-offset: 2px;
}
</style>