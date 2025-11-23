<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const form = ref({
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

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
}
</script>

<template>
  <section
    class="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20 lg:py-32 overflow-visible">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        <!-- Left Content -->
        <div class="space-y-8 pt-8 lg:pt-16">
          <div>
            <p class="text-purple-500 dark:text-purple-400 font-medium tracking-wider uppercase text-sm mb-4">
              Contact Us
            </p>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Let's talk<br>about you
            </h1>
          </div>

          <!-- Scroll Indicator -->
          <div class="flex items-center gap-2 text-gray-400 dark:text-gray-500 pt-12">
            <Icon icon="ph:mouse-simple-light" class="w-5 h-5" />
            <span class="text-sm">Scroll</span>
          </div>
        </div>

        <!-- Right Content - Contact Form Card -->
        <div class="relative lg:-mr-20 xl:-mr-32">
          <div
            class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl shadow-gray-200/50 dark:shadow-black/20 p-8 md:p-10 lg:translate-y-8">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Send us a Message
            </h2>

            <form @submit.prevent="handleSubmit" class="space-y-8">
              <!-- Full Name - Floating Label -->
              <div class="relative">
                <input v-model="form.fullName" type="text" id="fullName" placeholder=" "
                  class="peer w-full px-4 py-4 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 dark:focus:border-purple-400 transition-all outline-none"
                  required />
                <label for="fullName"
                  class="absolute left-4 top-4 text-gray-400 dark:text-gray-500 text-base transition-all duration-200 pointer-events-none bg-white dark:bg-gray-800 px-1 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem] peer-focus:text-xs peer-focus:text-purple-500 dark:peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:top-[-0.5rem] peer-[:not(:placeholder-shown)]:text-xs">
                  Full Name*
                </label>
              </div>

              <!-- Email - Floating Label -->
              <div class="relative">
                <input v-model="form.email" type="email" id="email" placeholder=" "
                  class="peer w-full px-4 py-4 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 dark:focus:border-purple-400 transition-all outline-none"
                  required />
                <label for="email"
                  class="absolute left-4 top-4 text-gray-400 dark:text-gray-500 text-base transition-all duration-200 pointer-events-none bg-white dark:bg-gray-800 px-1 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem] peer-focus:text-xs peer-focus:text-purple-500 dark:peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:top-[-0.5rem] peer-[:not(:placeholder-shown)]:text-xs">
                  E-Mail*
                </label>
              </div>

              <!-- Subject - Floating Label -->
              <div class="relative">
                <select v-model="form.subject" id="subject"
                  class="peer w-full px-4 py-4 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 dark:focus:border-purple-400 transition-all outline-none appearance-none cursor-pointer"
                  required>
                  <option value="" disabled hidden class="dark:bg-gray-800"></option>
                  <option v-for="subject in subjects" :key="subject" :value="subject" class="dark:bg-gray-800">
                    {{ subject }}
                  </option>
                </select>
                <label for="subject"
                  class="absolute left-4 top-4 text-gray-400 dark:text-gray-500 text-base transition-all duration-200 pointer-events-none bg-white dark:bg-gray-800 px-1 peer-focus:top-[-0.5rem] peer-focus:text-xs peer-focus:text-purple-500 dark:peer-focus:text-purple-400 peer-valid:top-[-0.5rem] peer-valid:text-xs">
                  Subject*
                </label>
                <Icon icon="ph:caret-down"
                  class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" />
              </div>

              <!-- Message - Floating Label -->
              <div class="relative">
                <textarea v-model="form.message" id="message" rows="4" placeholder=" "
                  class="peer w-full px-4 py-4 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 dark:focus:border-purple-400 transition-all outline-none resize-none"
                  required></textarea>
                <label for="message"
                  class="absolute left-4 top-4 text-gray-400 dark:text-gray-500 text-base transition-all duration-200 pointer-events-none bg-white dark:bg-gray-800 px-1 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem] peer-focus:text-xs peer-focus:text-purple-500 dark:peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:top-[-0.5rem] peer-[:not(:placeholder-shown)]:text-xs">
                  Your message here*
                </label>
              </div>

              <!-- Submit Button -->
              <div class="pt-4">
                <button type="submit"
                  class="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-500 text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5">
                  Send
                  <Icon icon="ph:arrow-right-bold" class="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Contact Info Footer -->
      <div class="mt-20 lg:mt-32 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Phone -->
          <a href="tel:+4909132840478"
            class="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors group">
            <div
              class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors">
              <Icon icon="ph:headset" class="w-5 h-5" />
            </div>
            <span class="text-sm">+49 (0) 9132 84-0478</span>
          </a>

          <!-- Email -->
          <a href="mailto:hi@johndesign.com"
            class="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors group">
            <div
              class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors">
              <Icon icon="ph:envelope-simple" class="w-5 h-5" />
            </div>
            <span class="text-sm">hi@johndesign.com</span>
          </a>

          <!-- Address -->
          <a href="#"
            class="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors group">
            <div
              class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors">
              <Icon icon="ph:map-pin" class="w-5 h-5" />
            </div>
            <span class="text-sm">1802 Black Trail Suite 636</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div
      class="absolute top-0 left-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
    </div>
    <div
      class="absolute bottom-0 right-0 w-64 h-64 bg-purple-50 dark:bg-purple-900/10 rounded-full blur-2xl opacity-60 translate-x-1/4 translate-y-1/4 pointer-events-none">
    </div>
  </section>
</template>

<style scoped>
/* Remove default select arrow in some browsers */
select {
  background-image: none;
}

/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
  width: 4px;
}

textarea::-webkit-scrollbar-track {
  background: transparent;
}

textarea::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 2px;
}

.dark textarea::-webkit-scrollbar-thumb {
  background: #4b5563;
}
</style>