<template>
  <section class="relative w-[1920px] h-[980px] mx-auto overflow-hidden text-white">
    <!-- Фоновое изображение -->
    <img
      src="/images/background.png"
      alt="Mars Background"
      class="absolute inset-0 w-full h-full object-cover z-0"
    >

    <!-- Content Wrapper to ensure z-index above background -->
    <div class="relative z-10 w-full h-full">
      
      <!-- Заголовок -->
      <div class="absolute left-[300px] top-[220px]">
        <h1 class="font-normal leading-none uppercase">
          <div class="text-[96px] tracking-[0.1em] bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-500 to-orange-600 mb-4">
            ПУТЕШЕСТВИЕ
          </div>
          <div class="text-[24px] text-white tracking-[0.45em] pl-1 font-light opacity-90">
            на красную планету
          </div>
        </h1>
      </div>

      <!-- Кнопка "Начать путешествие" -->
      <div class="absolute left-[300px] top-[550px] flex items-center">
        <!-- Button Container -->
        <div class="relative">
          <button class="btn-spacex relative w-[180px] h-[40px] flex items-center justify-center cursor-pointer group overflow-visible">
            <!-- Text -->
            <span class="text-white text-[12px] uppercase tracking-widest pt-[2px] z-10 transition-colors duration-300 group-hover:text-white/80">
              Начать путешествие
            </span>
          </button>
          
          <!-- Линия от кнопки к ракете - теперь внутри контейнера для точной привязки -->
          <img 
            src="/images/line-to-rocket.png" 
            class="absolute left-[175px] top-1/2 -translate-y-1/2 w-[406px] h-[58px] pointer-events-none opacity-70" 
            alt=""
          >
        </div>
      </div>

      <!-- Блок Benefits справа -->
      <div class="absolute right-[350px] top-[280px] w-[380px] h-[360px]">

        <!-- Карточка 1: мы 1 на рынке (верхняя левая) -->
        <div
          class="absolute left-0 top-0 w-[185px] h-[170px] flex flex-col items-center justify-center cursor-pointer group transition-all duration-300"
          @mouseenter="hoveredCard = 0"
          @mouseleave="hoveredCard = null"
        >
          <!-- Hover Background -->
          <img v-if="hoveredCard === 0" src="/images/benefit-hover.png" class="absolute inset-0 w-full h-full object-contain" alt="">
          
          <div class="relative z-10 flex flex-col items-center">
            <span class="text-white/50 text-[14px] font-light mb-1">мы</span>
            <span class="text-white text-[50px] font-bold leading-none mb-1">1</span>
            <span class="text-white/50 text-[14px] font-light">на рынке</span>
          </div>
        </div>

        <!-- Карточка 2: гарантируем 50% (верхняя правая) -->
        <div
          class="absolute left-[190px] top-0 w-[185px] h-[170px] flex flex-col items-center justify-center cursor-pointer group"
          @mouseenter="hoveredCard = 1"
          @mouseleave="hoveredCard = null"
        >
          <img v-if="hoveredCard === 1" src="/images/benefit-hover.png" class="absolute inset-0 w-full h-full object-contain" alt="">
          
          <div class="relative z-10 flex flex-col items-center">
            <span class="text-white/50 text-[14px] font-light mb-1">гарантируем</span>
            <span class="text-white text-[50px] font-bold leading-none mb-1">50%</span>
            <span class="text-white/50 text-[14px] font-light">безопасность</span>
          </div>
        </div>

        <!-- Карточка 3: календарик за 2001 (нижняя левая) -->
        <div
          class="absolute left-0 top-[185px] w-[185px] h-[170px] flex flex-col items-center justify-center cursor-pointer group"
          @mouseenter="hoveredCard = 2"
          @mouseleave="hoveredCard = null"
        >
          <img v-if="hoveredCard === 2" src="/images/benefit-hover.png" class="absolute inset-0 w-full h-full object-contain" alt="">
          
          <div class="relative z-10 flex flex-col items-center">
            <span class="text-white/50 text-[14px] font-light mb-1">календарик за</span>
            <div class="flex items-baseline mb-1">
              <span class="text-white text-[50px] font-bold leading-none">2001</span>
              <span class="text-white text-[24px] font-light">г.</span>
            </div>
            <span class="text-white/50 text-[14px] font-light">в подарок</span>
          </div>
        </div>

        <!-- Карточка 4: путешествие 597 дней (нижняя правая) -->
        <div
          class="absolute left-[190px] top-[185px] w-[185px] h-[170px] flex flex-col items-center justify-center cursor-pointer group"
          @mouseenter="hoveredCard = 3"
          @mouseleave="hoveredCard = null"
        >
          <img v-if="hoveredCard === 3" src="/images/benefit-hover.png" class="absolute inset-0 w-full h-full object-contain" alt="">
          
          <div class="relative z-10 flex flex-col items-center">
            <span class="text-white/50 text-[14px] font-light mb-1">путешествие</span>
            <span class="text-white text-[50px] font-bold leading-none mb-1">597</span>
            <span class="text-white/50 text-[14px] font-light">дней</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hoveredCard = ref<number | null>(null)
</script>

<style scoped>
.btn-spacex::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  background: 
    linear-gradient(90deg, #ffffff, #f97316) top left / 100% 1px no-repeat,
    linear-gradient(180deg, #ffffff, #f97316) top left / 1px 100% no-repeat;
  transition: all 0.3s ease;
}

.btn-spacex::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background: 
    linear-gradient(270deg, #ffffff, #ea580c) bottom right / 100% 1px no-repeat,
    linear-gradient(0deg, #ffffff, #ea580c) bottom right / 1px 100% no-repeat;
  transition: all 0.3s ease;
}

.group:hover .btn-spacex::before,
.group:hover .btn-spacex::after {
  width: 20px;
  height: 20px;
  filter: brightness(1.2);
}
</style>
