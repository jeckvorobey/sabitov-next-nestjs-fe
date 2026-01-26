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
  <div class="h-screen relative overflow-hidden bg-space-dark">
    <!-- Background Image (по Figma - 1920x660) -->
    <div class="absolute inset-0 z-0">
      <img
        src="~/assets/images/background.png"
        alt="Space Background"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Content Wrapper -->
    <div class="relative z-10 h-full flex flex-col">
      <!-- Navigation -->
      <NavBar />

      <!-- Main Content Area -->
      <main class="flex-grow relative">
        <!-- Заголовок слева (по Figma) -->
        <div class="absolute left-[calc(50%-580px)] top-1/2 -translate-y-1/2 z-20">
          <div class="space-y-0">
            <!-- "Путешествие" - 41px -->
            <h1 class="text-gradient-mars text-[41px] font-normal leading-tight">
              Путешествие
            </h1>
            <!-- "на красную планету" - 24px -->
            <p class="text-gradient-mars text-[24px] font-normal leading-tight">
              на красную планету
            </p>
          </div>
        </div>

        <!-- Benefits Section справа (по Figma) -->
        <BenefitsSection />

        <!-- Логотип SpaceX внизу слева (по Figma) -->
        <div class="absolute left-[calc(50%-580px)] bottom-16 z-20">
          <div class="flex items-center gap-3">
            <img
              src="/images/rocket.svg"
              alt="SpaceX"
              class="w-8 h-10"
            />
            <span class="text-white text-2xl font-light tracking-widest uppercase">SpaceX</span>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Градиент текста от оранжево-красного к белому (по Figma) */
.text-gradient-mars {
  background: linear-gradient(270deg, #FF3F04 0%, #FFFFFF 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
