<template>
  <section id="gallery"
    class="bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 transition-colors duration-500 py-20 md:py-24 lg:py-28 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-12 sm:mb-16 space-y-4">
        <h2
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-500 dark:from-indigo-400 dark:to-purple-400 animate-fade-in">
          My Work
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Capturing moments, creating memories
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button v-for="category in categories" :key="category" @click="activeCategory = category" :class="[
          'px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105',
          activeCategory === category
            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/50 dark:shadow-indigo-500/30'
            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-700'
        ]">
          {{ category }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <TransitionGroup name="gallery">
          <div v-for="(image, index) in filteredImages" :key="image.id" @click="openLightbox(index)"
            :style="{ animationDelay: `${index * 0.1}s` }"
            class="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up">
            <!-- Image -->
            <img :src="image.src" :alt="image.title"
              class="w-full h-auto transform group-hover:scale-110 transition-transform duration-700" loading="lazy" />

            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
              <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 class="text-white text-xl font-bold mb-2">{{ image.title }}</h3>
                <p class="text-indigo-300 text-sm">{{ image.category }}</p>
              </div>

              <!-- View Icon -->
              <div
                class="absolute top-4 right-4 bg-indigo-500 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>

      <!-- Lightbox -->
      <Transition name="lightbox">
        <div v-if="showLightbox" @click="closeLightbox"
          class="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <!-- Close Button -->
          <button @click="closeLightbox"
            class="absolute top-6 right-6 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 z-10">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Navigation -->
          <button @click.stop="prevImage"
            class="absolute left-6 bg-indigo-500/80 hover:bg-indigo-500 text-white rounded-full p-4 transition-all duration-300 transform hover:scale-110">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button @click.stop="nextImage"
            class="absolute right-6 bg-indigo-500/80 hover:bg-indigo-500 text-white rounded-full p-4 transition-all duration-300 transform hover:scale-110">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Image Container -->
          <div @click.stop class="max-w-5xl w-full">
            <img :src="filteredImages[currentImageIndex]?.src" :alt="filteredImages[currentImageIndex]?.title"
              class="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl" />

            <!-- Image Info -->
            <div class="mt-6 text-center">
              <h3 class="text-white text-2xl font-bold mb-2">
                {{ filteredImages[currentImageIndex]?.title }}
              </h3>
              <p class="text-indigo-300">
                {{ filteredImages[currentImageIndex]?.category }}
              </p>
              <p class="text-gray-400 mt-2">
                {{ currentImageIndex + 1 }} / {{ filteredImages.length }}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Gallery Data
const images = ref([
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    title: 'Modern Architecture',
    category: 'Architecture'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'Luxury Interior',
    category: 'Interior'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    title: 'Contemporary Living',
    category: 'Architecture'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    title: 'Elegant Design',
    category: 'Interior'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    title: 'Urban Living',
    category: 'Architecture'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    title: 'Coastal Retreat',
    category: 'Landscape'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
    title: 'Minimalist Space',
    category: 'Interior'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    title: 'Garden View',
    category: 'Landscape'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    title: 'Architectural Marvel',
    category: 'Architecture'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    title: 'Natural Light',
    category: 'Interior'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    title: 'Sunset Vista',
    category: 'Landscape'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
    title: 'Studio Design',
    category: 'Interior'
  }
])

const categories = ref(['All', 'Architecture', 'Interior', 'Landscape'])
const activeCategory = ref('All')
const showLightbox = ref(false)
const currentImageIndex = ref(0)

// Computed
const filteredImages = computed(() => {
  if (activeCategory.value === 'All') {
    return images.value
  }
  return images.value.filter(img => img.category === activeCategory.value)
})

// Methods
const openLightbox = (index) => {
  currentImageIndex.value = index
  showLightbox.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  showLightbox.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % filteredImages.value.length
}

const prevImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0
    ? filteredImages.value.length - 1
    : currentImageIndex.value - 1
}

// Keyboard navigation
const handleKeydown = (e) => {
  if (!showLightbox.value) return

  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'Escape') closeLightbox()
}

// Lifecycle
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out backwards;
}

/* Gallery Transitions */
.gallery-enter-active,
.gallery-leave-active {
  transition: all 0.5s ease;
}

.gallery-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(30px);
}

.gallery-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.gallery-move {
  transition: transform 0.5s ease;
}

/* Lightbox Transitions */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: all 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-from img,
.lightbox-leave-to img {
  transform: scale(0.8);
}

/* Smooth Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}


</style>