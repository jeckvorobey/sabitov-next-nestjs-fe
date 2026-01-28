<template>
  <header class="absolute top-0 left-0 w-full z-50">
    <div class="relative h-[100px] w-[1920px] mx-auto bg-black/20">
      <!-- Логотип SpaceX в рамке -->
      <div class="absolute left-[374px] top-0 h-[100px] w-[318px] border-x border-[#333] bg-black/20">
        <!-- Угловые элементы -->
        <img src="/images/corner-tl.png" class="absolute left-[-1px] top-[-1px]" alt="" />
        <img src="/images/corner-tr.png" class="absolute right-[-1px] top-[-1px]" alt="" />
        <img src="/images/corner-bl.png" class="absolute left-[-1px] bottom-[-1px]" alt="" />
        <img src="/images/corner-br.png" class="absolute right-[-1px] bottom-[-1px]" alt="" />

        <!-- Логотип SPACEX -->
        <div class="absolute inset-0 flex items-center justify-center">
          <img src="/images/spacex-logo.png" alt="SpaceX" class="w-[233px] h-[32px]" />
        </div>
      </div>

      <!-- Навигация -->
      <nav class="absolute left-[850px] top-[38px]">
        <ul class="flex items-center gap-[50px]">
          <li v-for="(item, index) in menuItems" :key="index" class="relative group">
            <button
              class="text-[14px] font-normal tracking-wide transition-colors duration-200 whitespace-nowrap uppercase"
              :class="activeIndex === index ? 'text-gray-400' : 'text-white hover:text-gray-400'"
              @click="handleMenuClick(index)"
            >
              {{ item.label }}
            </button>

            <!-- Подчеркивание для активного пункта -->
             <img
              v-if="activeIndex === index"
              src="/images/nav-underline.png"
              class="absolute left-1/2 -translate-x-1/2 top-[20px]"
              alt=""
            />
          </li>
        </ul>
      </nav>
      
      <!-- Правая часть хедера (контакты/декор если есть) - пока пусто, но добавим бордер низа для всей полосы если нужно -->
       <div class="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(1) // "Технология" активна

const menuItems = [
  { label: 'Главная' },
  { label: 'Технология' },
  { label: 'График полетов' },
  { label: 'Гарантии' },
  { label: 'О компании' },
  { label: 'Контакты' },
]

const handleMenuClick = (index: number) => {
  activeIndex.value = index
}
</script>
