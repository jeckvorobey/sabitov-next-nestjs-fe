<script setup lang="ts">
defineProps<{
  title: string
  description?: string | null
  icon?: string | null
}>()
</script>

<template>
  <div class="benefit-card flex flex-col items-center text-center group">
    <!-- Icon Container -->
    <div class="mb-6 relative w-24 h-24 flex items-center justify-center">
      <div class="absolute inset-0 bg-space-blue-100/10 rounded-full blur-xl group-hover:bg-space-blue-100/20 transition-all"></div>
      <!-- Placeholder SVG if no icon provided or specific icons based on props -->
      <img v-if="icon" :src="`/images/${icon}`" :alt="title" class="w-16 h-16 relative z-10" />
      <div v-else class="w-16 h-16 rounded-full border border-space-blue-100/30 flex items-center justify-center relative z-10">
        <span class="text-2xl text-space-blue-100">★</span>
      </div>
    </div>

    <!-- Content -->
    <h3 class="text-xl font-bold mb-3 text-white">{{ title }}</h3>
    <p v-if="description" class="text-gray-400 leading-relaxed text-sm">
      {{ description }}
    </p>

    <!-- Hover Effect Line -->
    <div class="w-12 h-1 bg-gradient-to-r from-space-blue-200 to-space-blue-100 mt-6 rounded-full group-hover:w-24 transition-all"></div>
  </div>
</template>
