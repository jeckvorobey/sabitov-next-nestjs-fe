<script setup lang="ts">
import NavBar from '~/components/NavBar.vue'
import BenefitsSection from '~/components/BenefitsSection.vue'

// SEO
useHead({
  title: 'SpaceX - Путешествие на красную планету',
  meta: [
    { name: 'description', content: 'Начните свое путешествие на Марс вместе со SpaceX' }
  ]
})
</script>

<template>
  <div class="min-h-screen relative overflow-hidden bg-space-dark">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img src="~/assets/images/background.png" alt="Space Background" class="w-full h-full object-cover opacity-80" />
      <div class="absolute inset-0 bg-gradient-space opacity-60 mix-blend-overlay"></div>
    </div>

    <!-- Content Wrapper -->
    <div class="relative z-10 flex flex-col min-h-screen">
      <!-- Navigation -->
      <NavBar />

      <!-- Hero Section -->
      <main class="flex-grow container mx-auto px-4 flex flex-col justify-center relative">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <!-- Text Content -->
          <div class="space-y-8 relative z-20">
            <!-- Logo area if needed, or just text -->
            <div class="text-gradient font-bold tracking-wider uppercase mb-4">
              Путешествие на красную планету
            </div>
            
            <h1 class="hero-title text-white">
              <span class="text-gradient block mb-2">Начните</span>
              <span class="block text-white">невероятное</span>
              <span class="block text-white">путешествие</span>
            </h1>
            
            <p class="text-gray-300 text-lg max-w-md leading-relaxed">
              Мы здесь для того, чтобы сделать жизнь мультипланетной.
            </p>

            <!-- CTA Button -->
            <button class="btn-space mt-8 group">
              <span class="relative z-10 group-hover:text-blue-200 transition-colors">
                Начать путешествие
              </span>
              <!-- Glow effect -->
              <div class="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          <!-- Hero Image (Astronaut/Rocket) -->
          <div class="relative flex justify-center lg:justify-end items-center">
             <!-- Planet Background Element -->
             <img 
              src="/images/icon_planet.svg" 
              alt="" 
              class="absolute top-0 right-0 w-96 h-96 opacity-50 animate-pulse" 
              style="animation-duration: 4s;"
            />
            
            <!-- Astronaut/Rocket -->
            <img 
              src="/images/astronaut.png" 
              alt="Astronaut" 
              class="relative z-10 w-full max-w-lg object-contain drop-shadow-[0_0_35px_rgba(35,89,156,0.4)] transform hover:scale-105 transition-transform duration-700" 
            />
          </div>
        </div>

        <!-- Benefits Section -->
        <BenefitsSection />
        
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Gradient Text Overlay implementation if simpler utility not enough */
.hero-title span {
  background-clip: text;
}
</style>
