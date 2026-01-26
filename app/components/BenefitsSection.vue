<script setup lang="ts">
// Данные по Figma макету
const benefits = [
  {
    id: 1,
    topText: 'мы',
    mainValue: '1',
    bottomText: 'на рынке',
    hasImage: true
  },
  {
    id: 2,
    topText: 'гарантируем',
    mainValue: '50%',
    bottomText: 'безопасность',
    hasImage: false
  },
  {
    id: 3,
    topText: 'календарик за',
    mainValue: '2001г.',
    bottomText: 'в подарок',
    hasImage: false
  },
  {
    id: 4,
    topText: 'путешествие',
    mainValue: '597',
    bottomText: 'дней',
    hasImage: false
  },
]
</script>

<template>
  <!-- Секция benefits справа (по Figma) -->
  <section class="absolute right-[calc(50%-580px)] top-1/2 -translate-y-1/2 z-10">
    <div class="grid grid-cols-2 gap-2">
      <div
        v-for="benefit in benefits"
        :key="benefit.id"
        class="benefit-rhombus flex flex-col items-center justify-center text-center relative overflow-hidden"
      >
        <!-- Фоновое изображение для первого блока -->
        <img
          v-if="benefit.hasImage"
          src="~/assets/images/benefits_bg.png"
          alt=""
          class="absolute inset-0 w-full h-full object-cover opacity-65"
        />

        <div class="relative z-10 text-white">
          <span class="text-xs block opacity-80">{{ benefit.topText }}</span>
          <span class="text-2xl font-normal block my-1">{{ benefit.mainValue }}</span>
          <span class="text-xs block opacity-80">{{ benefit.bottomText }}</span>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.benefit-rhombus {
  width: 185px;
  height: 185px;
  clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
  background: rgba(255, 255, 255, 0.006);
  position: relative;
}

.benefit-rhombus::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1px;
  clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
  background: linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
</style>
